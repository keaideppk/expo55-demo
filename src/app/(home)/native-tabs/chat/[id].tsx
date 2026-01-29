import { Stack, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TabBarContext } from '../../../../context/TabBarContext';

export default function ChatDetailScreen() {
  const { id } = useLocalSearchParams();
  const { setIsTabBarHidden } = useContext(TabBarContext);

  // 进入详情页时隐藏标签栏
  useFocusEffect(() => {
    setIsTabBarHidden(true);
    return () => setIsTabBarHidden(false);
  });

  return (
    <>
      {/* 使用 Stack.Toolbar 配置头部工具栏 */}
      {/* 左侧：返回按钮 */}
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Button
          icon="chevron.left"
          onPress={() => {
            // 返回上一页
            const router = require('expo-router').router;
            router.back();
          }}
        />
      </Stack.Toolbar>

      {/* 右侧：操作按钮组 */}
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button
          icon="phone"
          onPress={() => console.log('电话呼叫')}
        />
        <Stack.Toolbar.Button
          icon="video"
          onPress={() => console.log('视频通话')}
        />
        <Stack.Toolbar.Button
          icon="ellipsis.circle"
          onPress={() => console.log('更多选项')}
        />
      </Stack.Toolbar>

      {/* 底部工具栏 - iOS only */}
      <Stack.Toolbar placement="bottom">
        {/* 左侧：附件按钮 */}
        <Stack.Toolbar.Button
          icon="plus.circle"
          onPress={() => console.log('添加附件')}
        />

        {/* 弹性间距 */}
        <Stack.Toolbar.Spacer />

        {/* 中间：更多功能按钮 */}
        <Stack.Toolbar.Button
          icon="camera"
          onPress={() => console.log('拍照')}
        />
        <Stack.Toolbar.Button
          icon="photo"
          onPress={() => console.log('相册')}
        />
        <Stack.Toolbar.Button
          icon="mic"
          onPress={() => console.log('语音输入')}
        />
        <Stack.Toolbar.Button
          icon="face.smiling"
          onPress={() => console.log('表情')}
        />

        {/* 弹性间距 */}
        <Stack.Toolbar.Spacer />

        {/* 右侧：发送按钮 */}
        <Stack.Toolbar.Button
          icon="paperplane.fill"
          onPress={() => console.log('发送消息')}
        />
      </Stack.Toolbar>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* 对话内容 */}
        <View style={styles.chatContainer}>
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>这是对话详情页 #{id}</Text>
            <Text style={styles.messageTime}>刚刚</Text>
          </View>

          <View style={[styles.messageBubble, styles.assistantBubble]}>
            <Text style={styles.messageText}>
              此页面使用 Stack.Toolbar 配置头部和底部工具栏。
              📍 头部左侧：返回按钮
              📍 头部右侧：电话、视频、更多选项
              📍 底部工具栏：附件、相机、相册、语音、表情、发送
            </Text>
            <Text style={styles.messageTime}>刚刚</Text>
          </View>

          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>Stack.Toolbar 的优势：</Text>
          </View>

          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <SymbolView name="checkmark.circle.fill" size={20} colors="#34C759" />
              <Text style={styles.featureText}>原生性能，与系统头部无缝集成</Text>
            </View>
            <View style={styles.featureItem}>
              <SymbolView name="checkmark.circle.fill" size={20} colors="#34C759" />
              <Text style={styles.featureText}>placement="left/right" 自定义头部两侧</Text>
            </View>
            <View style={styles.featureItem}>
              <SymbolView name="checkmark.circle.fill" size={20} colors="#34C759" />
              <Text style={styles.featureText}>placement="bottom" 底部工具栏（iOS only）</Text>
            </View>
            <View style={styles.featureItem}>
              <SymbolView name="checkmark.circle.fill" size={20} colors="#34C759" />
              <Text style={styles.featureText}>使用 SF Symbols 图标，风格统一</Text>
            </View>
            <View style={styles.featureItem}>
              <SymbolView name="checkmark.circle.fill" size={20} colors="#34C759" />
              <Text style={styles.featureText}>Spacer 实现弹性间距布局</Text>
            </View>
            <View style={styles.featureItem}>
              <SymbolView name="checkmark.circle.fill" size={20} colors="#34C759" />
              <Text style={styles.featureText}>代码简洁，无需自定义导航栏组件</Text>
            </View>
          </View>

          <View style={[styles.messageBubble, styles.assistantBubble]}>
            <Text style={styles.messageText}>
              点击头部的按钮试试！底部工具栏包含附件、相机、相册、语音、表情和发送功能。
            </Text>
            <Text style={styles.messageTime}>刚刚</Text>
          </View>
        </View>

        {/* 占位内容以便可以滚动 */}
        <View style={styles.placeholderContent}>
          <Text style={styles.placeholderText}>更多对话内容...</Text>
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
  },
  chatContainer: {
    padding: 16,
  },
  messageBubble: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  assistantBubble: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 20,
  },
  messageTime: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 4,
    textAlign: 'right',
  },
  featureList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
    lineHeight: 20,
  },
  placeholderContent: {
    padding: 16,
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 16,
  },
  placeholderBox: {
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginBottom: 12,
  },
});
