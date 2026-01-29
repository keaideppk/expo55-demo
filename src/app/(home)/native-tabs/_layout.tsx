import { GlassView } from 'expo-glass-effect';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SymbolView } from 'expo-symbols';
import { useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { TabBarContext } from '../../../context/TabBarContext';

// 文本输入布局常量（参考原始代码）
const MAX_LINES = 5;
const LINE_HEIGHT = 22;
const TEXT_INPUT_PADDING = 4;
const MIN_INPUT_HEIGHT = 32;

export default function NativeTabsLayout() {
  // TabBar 隐藏状态
  const [isTabBarHidden, setIsTabBarHidden] = useState(false);

  // AI 输入相关的状态
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [numberOfLines, setNumberOfLines] = useState(1);

  // 监听键盘事件
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => setKeyboardHeight(e.endCoordinates.height)
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardHeight(0)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    // TODO: 处理发送逻辑
    console.log('发送:', input);
    setInput('');
    setNumberOfLines(1);
  }, [input]);

  const handleVoiceRecord = useCallback(() => {
    if (isRecording) {
      setIsRecording(false);
      setRecordingDuration(0);
    } else {
      setIsRecording(true);
      const timer = setInterval(() => {
        setRecordingDuration((prev) => {
          if (prev >= 10) {
            clearInterval(timer);
            setIsRecording(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  }, [isRecording]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 计算输入框高度
  const inputHeight = Math.max(
    MIN_INPUT_HEIGHT,
    Math.min(numberOfLines, MAX_LINES) * LINE_HEIGHT + TEXT_INPUT_PADDING * 2
  );

  return (
    <TabBarContext.Provider value={{ setIsTabBarHidden }}>
      <NativeTabs minimizeBehavior="onScrollDown" hidden={isTabBarHidden}>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon
            sf={{
              default: 'house',
              selected: 'house.fill',
            }}
          />
          <NativeTabs.Trigger.Label>首页</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="chat">
          <NativeTabs.Trigger.Icon
            sf={{
              default: 'message',
              selected: 'message.fill',
            }}
          />
          <NativeTabs.Trigger.Label>对话</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="notifications">
          <NativeTabs.Trigger.Icon
            sf={{
              default: 'bell',
              selected: 'bell.fill',
            }}
          />
          <NativeTabs.Trigger.Label>通知</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Badge>3</NativeTabs.Trigger.Badge>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="profile" role="search">
          <NativeTabs.Trigger.Icon
            sf={{
              default: 'person.circle',
              selected: 'person.circle.fill',
            }}
          />
          <NativeTabs.Trigger.Label>我的</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* BottomAccessory - AI 输入区域 */}
        {!isTabBarHidden && (
          <NativeTabs.BottomAccessory>
            <GlassView style={[styles.glassContainer, { height: inputHeight + 20 }]} isInteractive>
              {/* 模式切换按钮 */}
              <Pressable style={styles.modeButton}>
                <SymbolView name="brain" size={20} colors="#007AFF" />
              </Pressable>

              {/* 输入框 - 支持多行 */}
              <TextInput
                style={[
                  styles.textInput,
                  {
                    height: inputHeight,
                    maxHeight: MAX_LINES * LINE_HEIGHT + TEXT_INPUT_PADDING * 2,
                  },
                ]}
                placeholder="Ask AI..."
                placeholderTextColor="#8e8e93"
                value={input}
                onChangeText={setInput}
                multiline={true}
                scrollEnabled={true}
                returnKeyType="default"
                onContentSizeChange={(event) => {
                  const height = event.nativeEvent.contentSize.height;
                  const actualContentHeight = height - TEXT_INPUT_PADDING * 2;
                  const lines = Math.ceil(actualContentHeight / LINE_HEIGHT);
                  setNumberOfLines(Math.max(1, lines));
                }}
              />

              {/* 语音/发送按钮 */}
              <Pressable
                style={[
                  styles.actionButton,
                  input.trim() && styles.actionButtonActive,
                  { height: Math.max(36, inputHeight) },
                ]}
                onPress={input.trim() ? handleSend : handleVoiceRecord}
              >
                {input.trim() ? (
                  <SymbolView name="arrow.up" size={20} colors="#fff" />
                ) : isRecording ? (
                  <View style={styles.recordingContent}>
                    <View style={styles.recordingDot} />
                    <Text style={styles.recordingText}>{formatDuration(recordingDuration)}</Text>
                  </View>
                ) : (
                  <SymbolView name="mic" size={20} colors="#8e8e93" />
                )}
              </Pressable>
            </GlassView>
          </NativeTabs.BottomAccessory>
        )}
      </NativeTabs>
    </TabBarContext.Provider>
  );
}

const styles = StyleSheet.create({
  glassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 6,
    // 高度动态设置，不再有固定的 minHeight
    backgroundColor: 'rgba(120, 120, 120, 0.1)',
  },
  modeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: LINE_HEIGHT,
    paddingVertical: TEXT_INPUT_PADDING,
    paddingHorizontal: 8,
    color: '#000',
  },
  actionButton: {
    width: 36,
    minWidth: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(142, 142, 147, 0.2)',
  },
  actionButtonActive: {
    backgroundColor: '#007AFF',
  },
  recordingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  recordingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ef4444',
  },
  recordingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ef4444',
  },
});
