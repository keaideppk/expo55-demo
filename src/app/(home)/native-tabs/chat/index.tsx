import { useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const messages = [
  { id: 1, role: 'user', content: '你好，今天天气怎么样？' },
  { id: 2, role: 'assistant', content: '你好！今天天气晴朗，温度在20-25度之间，适合外出活动。' },
  { id: 3, role: 'user', content: '有什么建议吗？' },
  { id: 4, role: 'assistant', content: '可以去公园散步，或者去咖啡厅享受阳光。记得带上防晒用品哦！' },
];

const suggestions = [
  { icon: 'calendar', title: '日程安排', color: '#007AFF' },
  { icon: 'chart.bar', title: '数据分析', color: '#34C759' },
  { icon: 'doc.text', title: '写作助手', color: '#FF9500' },
  { icon: 'lightbulb', title: '创意灵感', color: '#AF52DE' },
];

export default function ChatTab() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* 欢迎区域 */}
      <View style={styles.welcomeSection}>
        <SymbolView name="sparkles" size={40} colors="#FFD700" />
        <Text style={styles.welcomeTitle}>AI 助手</Text>
        <Text style={styles.welcomeSubtitle}>有什么可以帮助你的吗？</Text>
      </View>

      {/* 快捷操作建议 */}
      <View style={styles.suggestionsSection}>
        <Text style={styles.sectionTitle}>快速开始</Text>
        <View style={styles.suggestionsGrid}>
          {suggestions.map((suggestion, index) => (
            <Pressable key={index} style={styles.suggestionCard}>
              <View style={[styles.suggestionIcon, { backgroundColor: suggestion.color + '20' }]}>
                <SymbolView name={suggestion.icon as any} size={24} colors={suggestion.color} />
              </View>
              <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* 测试按钮 - 跳转到详情页 */}
      <View style={styles.testSection}>
        <Text style={styles.sectionTitle}>测试标签栏隐藏</Text>
        <Pressable
          style={styles.testButton}
          onPress={() => router.push('/(home)/native-tabs/chat/[id]')}
        >
          <SymbolView name="arrow.right.circle.fill" size={24} colors="#007AFF" />
          <View style={styles.testButtonContent}>
            <Text style={styles.testButtonTitle}>打开详情页</Text>
            <Text style={styles.testButtonDesc}>进入详情页后标签栏将隐藏</Text>
          </View>
          <SymbolView name="chevron.right" size={16} colors="#999" />
        </Pressable>
      </View>

      {/* 对话历史 */}
      <View style={styles.messagesSection}>
        <Text style={styles.sectionTitle}>最近对话</Text>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.role === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <Text style={[
              styles.messageText,
              message.role === 'user' ? styles.userMessageText : styles.assistantMessageText,
            ]}>
              {message.content}
            </Text>
          </View>
        ))}
      </View>

      {/* 额外内容用于测试滚动 */}
      <View style={styles.extraSection}>
        <Text style={styles.extraText}>向下滚动查看 BottomAccessory 收起效果</Text>
        <View style={styles.placeholderBox} />
        <View style={styles.placeholderBox} />
        <View style={styles.placeholderBox} />
        <View style={styles.placeholderBox} />
        <View style={styles.placeholderBox} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 20,
    paddingBottom: 100, // 为 BottomAccessory 留出空间
  },
  welcomeSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginTop: 16,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  suggestionsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  suggestionCard: {
    width: '48%',
    margin: '1%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  suggestionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  testSection: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  testButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
  },
  testButtonContent: {
    flex: 1,
    marginLeft: 12,
  },
  testButtonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  testButtonDesc: {
    fontSize: 13,
    color: '#666',
  },
  messagesSection: {
    marginBottom: 20,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  assistantMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#fff',
  },
  assistantMessageText: {
    color: '#000',
  },
  extraSection: {
    marginTop: 20,
  },
  extraText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
  },
  placeholderBox: {
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginBottom: 12,
  },
});
