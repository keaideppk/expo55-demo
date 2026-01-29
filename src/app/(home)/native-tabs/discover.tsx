import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { SymbolView } from 'expo-symbols';

const categories = [
  { icon: 'flame.fill', color: '#FF3B30', title: '热门推荐', count: 128 },
  { icon: 'chart.bar.fill', color: '#FF9500', title: '排行榜', count: 50 },
  { icon: 'music.note', color: '#AF52DE', title: '音乐', count: 89 },
  { icon: 'film.fill', color: '#007AFF', title: '影视', count: 67 },
  { icon: 'gamecontroller.fill', color: '#34C759', title: '游戏', count: 234 },
  { icon: 'book.fill', color: '#5856D6', title: '阅读', count: 156 },
  { icon: 'photo.fill', color: '#FF2D55', title: '图片', count: 89 },
  { icon: 'mic.fill', color: '#FF9500', title: '播客', count: 45 },
  { icon: 'airplane', color: '#5AC8FA', title: '旅行', count: 67 },
];

const trendingTopics = [
  { title: '周末去哪儿玩', views: '12.5万', icon: 'map.fill', color: '#FF3B30' },
  { title: '健康饮食指南', views: '8.3万', icon: 'leaf.fill', color: '#34C759' },
  { title: '高效学习方法', views: '15.2万', icon: 'book.fill', color: '#007AFF' },
  { title: '最新科技资讯', views: '9.7万', icon: 'cpu.fill', color: '#5856D6' },
  { title: '电影推荐清单', views: '11.1万', icon: 'film.fill', color: '#FF9500' },
  { title: '健身入门教程', views: '7.8万', icon: 'figure.strengthtraining.traditional', color: '#AF52DE' },
  { title: '摄影技巧分享', views: '6.5万', icon: 'camera.fill', color: '#FF2D55' },
  { title: '编程学习路线', views: '13.4万', icon: 'chevron.left.forwardslash.chevron.right', color: '#32D74B' },
];

export default function DiscoverTab() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>发现</Text>
        <Text style={styles.subtitle}>探索精彩内容</Text>
      </View>

      {/* 搜索栏 */}
      <View style={styles.searchBar}>
        <SymbolView name="magnifyingglass" size={20} colors="#999" />
        <Text style={styles.searchPlaceholder}>搜索内容...</Text>
      </View>

      {/* 分类网格 */}
      <Text style={styles.sectionTitle}>浏览分类</Text>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View key={index} style={styles.gridItem}>
            <View style={[styles.iconContainer, { backgroundColor: category.color + '20' }]}>
              <SymbolView name={category.icon as any} size={32} colors={category.color} />
            </View>
            <Text style={styles.gridItemTitle}>{category.title}</Text>
            <Text style={styles.gridItemCount}>{category.count} 项</Text>
          </View>
        ))}
      </View>

      {/* 推荐内容 */}
      <Text style={styles.sectionTitle}>为你推荐</Text>
      <View style={styles.recommendationCard}>
        <View style={styles.recommendationHeader}>
          <SymbolView name="sparkles" size={24} colors="#FFD700" />
          <Text style={styles.recommendationTitle}>精选内容</Text>
        </View>
        <Text style={styles.recommendationText}>
          根据您的喜好，我们为您精心挑选了这些内容。
        </Text>
        <View style={styles.recommendationTags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>热门</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>推荐</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>最新</Text>
          </View>
        </View>
      </View>

      {/* 热门话题 */}
      <Text style={styles.sectionTitle}>热门话题</Text>
      <View style={styles.topicsList}>
        {trendingTopics.map((topic, index) => (
          <View key={index} style={styles.topicItem}>
            <View style={[styles.topicIcon, { backgroundColor: topic.color + '20' }]}>
              <SymbolView name={topic.icon as any} size={20} colors={topic.color} />
            </View>
            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicViews}>{topic.views} 浏览</Text>
            </View>
            <SymbolView name="chevron.right" size={14} colors="#999" />
          </View>
        ))}
      </View>

      {/* 额外内容用于测试滚动 */}
      <View style={styles.extraSection}>
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
    marginBottom: 20,
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 24,
    gap: 8,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
    marginBottom: 24,
  },
  gridItem: {
    width: '31%',
    margin: '1%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  gridItemCount: {
    fontSize: 12,
    color: '#666',
  },
  recommendationCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  recommendationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  recommendationText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  recommendationTags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  topicsList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  topicIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  topicViews: {
    fontSize: 12,
    color: '#999',
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
