import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { SymbolView } from 'expo-symbols';

export default function ProfileTab() {
  const menuItems = [
    { icon: 'person.crop.circle.fill', iconColor: '#007AFF', title: '个人资料', subtitle: '编辑您的个人信息' },
    { icon: 'heart.fill', iconColor: '#FF3B30', title: '我的收藏', subtitle: '查看收藏的内容' },
    { icon: 'clock.arrow.circlepath', iconColor: '#FF9500', title: '浏览历史', subtitle: '最近浏览的内容' },
    { icon: 'square.and.arrow.up.fill', iconColor: '#5856D6', title: '分享记录', subtitle: '查看分享历史' },
    { icon: 'bell.fill', iconColor: '#FF3B30', title: '消息通知', subtitle: '管理通知设置' },
    { icon: 'lock.fill', iconColor: '#8E8E93', title: '隐私设置', subtitle: '隐私和安全设置' },
    { icon: 'paintbrush.fill', iconColor: '#AF52DE', title: '主题设置', subtitle: '自定义应用外观' },
    { icon: 'gearshape.fill', iconColor: '#666', title: '设置', subtitle: '应用设置和偏好' },
    { icon: 'questionmark.circle.fill', iconColor: '#34C759', title: '帮助与反馈', subtitle: '常见问题和意见反馈' },
    { icon: 'info.circle.fill', iconColor: '#5856D6', title: '关于', subtitle: '版本信息和相关' },
  ];

  const achievements = [
    { icon: 'trophy.fill', color: '#FFD700', title: '早期用户', desc: '注册超过30天' },
    { icon: 'star.fill', color: '#FF9500', title: '活跃达人', desc: '连续签到7天' },
    { icon: 'heart.fill', color: '#FF3B30', title: '人气之星', desc: '获得100个赞' },
    { icon: 'message.fill', color: '#007AFF', title: '热心回复', desc: '发表50条评论' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* 用户头像区域 */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <SymbolView name="person.fill" size={48} colors="#fff" />
        </View>
        <Text style={styles.userName}>用户名</Text>
        <Text style={styles.userBio}>这是我的个人简介</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>128</Text>
            <Text style={styles.statLabel}>关注</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>256</Text>
            <Text style={styles.statLabel}>粉丝</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89</Text>
            <Text style={styles.statLabel}>获赞</Text>
          </View>
        </View>

        <Pressable style={styles.editButton}>
          <SymbolView name="pencil" size={16} colors="#fff" />
          <Text style={styles.editButtonText}>编辑资料</Text>
        </Pressable>
      </View>

      {/* 菜单列表 */}
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <Pressable key={index} style={styles.menuItem}>
            <View style={[styles.menuIconContainer, { backgroundColor: item.iconColor + '20' }]}>
              <SymbolView name={item.icon as any} size={22} colors={item.iconColor} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            <SymbolView name="chevron.right" size={16} colors="#999" />
          </Pressable>
        ))}
      </View>

      {/* 成就徽章 */}
      <Text style={styles.sectionTitle}>我的成就</Text>
      <View style={styles.achievementsGrid}>
        {achievements.map((achievement, index) => (
          <View key={index} style={styles.achievementCard}>
            <SymbolView name={achievement.icon as any} size={32} colors={achievement.color} />
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDesc}>{achievement.desc}</Text>
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

      {/* 退出登录按钮 */}
      <Pressable style={styles.logoutButton}>
        <SymbolView name="arrow.right.square" size={20} colors="#FF3B30" />
        <Text style={styles.logoutText}>退出登录</Text>
      </Pressable>

      <Text style={styles.versionText}>版本 1.0.0</Text>
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
  profileHeader: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  userBio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    gap: 6,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#999',
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
    marginTop: 8,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
    marginBottom: 20,
  },
  achievementCard: {
    width: '48%',
    margin: '1%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
    marginBottom: 4,
  },
  achievementDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginBottom: 12,
  },
});
