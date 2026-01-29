import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SymbolView } from 'expo-symbols';

const quickActions = [
  { icon: 'star.fill', color: '#FFD700', title: '收藏内容', desc: '查看您收藏的所有内容' },
  { icon: 'clock.fill', color: '#007AFF', title: '最近访问', desc: '查看最近浏览的内容' },
  { icon: 'square.grid.2x2.fill', color: '#34C759', title: '分类浏览', desc: '按类别查看所有内容' },
  { icon: 'heart.fill', color: '#FF3B30', title: '我的点赞', desc: '查看您点赞过的内容' },
  { icon: 'bookmark.fill', color: '#FF9500', title: '稍后阅读', desc: '保存待阅读的内容' },
  { icon: 'square.and.arrow.up.fill', color: '#5856D6', title: '我的分享', desc: '查看分享记录' },
  { icon: 'doc.fill', color: '#8E8E93', title: '我的文档', desc: '管理您的文档' },
  { icon: 'photo.fill', color: '#AF52DE', title: '相册', desc: '查看您的照片' },
];

const feedItems = [
  { icon: 'person.circle.fill', color: '#007AFF', user: '用户A', action: '发布了新动态', time: '10分钟前' },
  { icon: 'person.circle.fill', color: '#34C759', user: '用户B', action: '分享了一篇文章', time: '25分钟前' },
  { icon: 'person.circle.fill', color: '#FF9500', user: '用户C', action: '更新了状态', time: '1小时前' },
  { icon: 'person.circle.fill', color: '#AF52DE', user: '用户D', action: '上传了新照片', time: '2小时前' },
  { icon: 'person.circle.fill', color: '#FF3B30', user: '用户E', action: '发布了视频', time: '3小时前' },
  { icon: 'person.circle.fill', color: '#5856D6', user: '用户F', action: '分享了音乐', time: '5小时前' },
  { icon: 'person.circle.fill', color: '#FFD700', user: '用户G', action: '更新了动态', time: '1天前' },
  { icon: 'person.circle.fill', color: '#8E8E93', user: '用户H', action: '发布了想法', time: '1天前' },
];

export default function HomeTab() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* 在页面中自定义标签配置 */}
      <NativeTabs.Trigger>
        <NativeTabs.Trigger.Label>首页</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <View style={styles.header}>
        <Text style={styles.title}>首页</Text>
        <Text style={styles.subtitle}>这是第一个标签页</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>快速操作</Text>
        {quickActions.map((item, index) => (
          <Pressable key={index} style={styles.card}>
            <SymbolView name={item.icon as any} size={24} colors={item.color} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.desc}</Text>
            </View>
            <SymbolView name="chevron.right" size={16} colors="#999" />
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>动态</Text>
        {feedItems.map((item, index) => (
          <View key={index} style={styles.feedItem}>
            <SymbolView name={item.icon as any} size={40} colors={item.color} />
            <View style={styles.feedContent}>
              <Text style={styles.feedUser}>{item.user}</Text>
              <Text style={styles.feedAction}>{item.action}</Text>
              <Text style={styles.feedTime}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Native Tabs 特性</Text>
        <Text style={styles.infoText}>
          • 原生性能，使用系统标签栏组件{'\n'}
          • 自动处理安全区域{'\n'}
          • 支持徽章显示{'\n'}
          • 支持底部配件区域{'\n'}
          • 自动处理标签切换动画{'\n'}
          • 滚动时自动收起 BottomAccessory
        </Text>
      </View>

      {/* 额外的填充内容，确保可以滚动 */}
      <View style={styles.extraContent}>
        <Text style={styles.extraText}>向下滚动查看 BottomAccessory 收起效果</Text>
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
  },
  header: {
    marginBottom: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  },
  feedItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  feedContent: {
    flex: 1,
    marginLeft: 12,
  },
  feedUser: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  feedAction: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  feedTime: {
    fontSize: 12,
    color: '#999',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
  },
  extraContent: {
    marginTop: 20,
  },
  extraText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
  },
  placeholderBox: {
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginBottom: 12,
  },
});
