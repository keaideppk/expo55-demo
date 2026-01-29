import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';

export default function NotificationsTab() {
  const [notifications] = useState([
    { id: 1, icon: 'heart.fill', color: '#FF3B30', title: '新点赞', message: '小明 赞了你的动态', time: '2分钟前', read: false },
    { id: 2, icon: 'person.fill', color: '#007AFF', title: '新关注', message: '小红 开始关注你了', time: '15分钟前', read: false },
    { id: 3, icon: 'bubble.left.fill', color: '#34C759', title: '新评论', message: '小李 评论了: 很好！', time: '1小时前', read: false },
    { id: 4, icon: 'arrow.turn.down.right', color: '#FF9500', title: '新回复', message: '你关注的话题有新回复', time: '3小时前', read: true },
    { id: 5, icon: 'gift.fill', color: '#AF52DE', title: '奖励通知', message: '恭喜获得新手奖励', time: '1天前', read: true },
    { id: 6, icon: 'heart.fill', color: '#FF3B30', title: '新点赞', message: '张三 赞了你的评论', time: '2天前', read: true },
    { id: 7, icon: 'person.fill', color: '#007AFF', title: '新关注', message: '李四 开始关注你了', time: '2天前', read: true },
    { id: 8, icon: 'bubble.left.fill', color: '#34C759', title: '新评论', message: '王五 评论了: 不错！', time: '3天前', read: true },
    { id: 9, icon: 'star.fill', color: '#FFD700', title: '收藏通知', message: '赵六 收藏了你的文章', time: '3天前', read: true },
    { id: 10, icon: 'arrow.turn.down.right', color: '#FF9500', title: '新回复', message: '你发布的帖子有新回复', time: '4天前', read: true },
    { id: 11, icon: 'heart.fill', color: '#FF3B30', title: '新点赞', message: '小红 赞了你的分享', time: '4天前', read: true },
    { id: 12, icon: 'person.fill', color: '#007AFF', title: '新关注', message: '新用户 开始关注你了', time: '5天前', read: true },
    { id: 13, icon: 'bubble.left.fill', color: '#34C759', title: '新评论', message: '用户A 评论了: 期待更新！', time: '5天前', read: true },
    { id: 14, icon: 'flag.fill', color: '#8E8E93', title: '系统通知', message: '您的内容已被推荐', time: '6天前', read: true },
    { id: 15, icon: 'heart.fill', color: '#FF3B30', title: '新点赞', message: '用户B 赞了你的照片', time: '1周前', read: true },
    { id: 16, icon: 'gift.fill', color: '#AF52DE', title: '活动奖励', message: '恭喜获得周活跃奖励', time: '1周前', read: true },
    { id: 17, icon: 'person.fill', color: '#007AFF', title: '新关注', message: '用户C 开始关注你了', time: '1周前', read: true },
    { id: 18, icon: 'bubble.left.fill', color: '#34C759', title: '新评论', message: '用户D 评论了: 赞同！', time: '1周前', read: true },
    { id: 19, icon: 'star.fill', color: '#FFD700', title: '收藏通知', message: '用户E 收藏了你的动态', time: '2周前', read: true },
    { id: 20, icon: 'arrow.turn.down.right', color: '#FF9500', title: '新回复', message: '你关注的问题有新答案', time: '2周前', read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* 在页面中更新徽章 */}
      <NativeTabs.Trigger>
        <NativeTabs.Trigger.Label>通知</NativeTabs.Trigger.Label>
        {unreadCount > 0 && (
          <NativeTabs.Trigger.Badge>{unreadCount}</NativeTabs.Trigger.Badge>
        )}
      </NativeTabs.Trigger>

      <View style={styles.header}>
        <Text style={styles.title}>通知</Text>
        <Text style={styles.subtitle}>您有 {unreadCount} 条未读通知</Text>
      </View>

      {/* 全部已读按钮 */}
      <Pressable style={styles.markAllButton}>
        <SymbolView name="checkmark.circle.fill" size={18} colors="#007AFF" />
        <Text style={styles.markAllText}>全部标记为已读</Text>
      </Pressable>

      {/* 通知列表 */}
      <View style={styles.notificationList}>
        {notifications.map((notification) => (
          <Pressable
            key={notification.id}
            style={[styles.notificationItem, !notification.read && styles.unreadItem]}
          >
            <View style={[styles.iconContainer, { backgroundColor: notification.color + '20' }]}>
              <SymbolView name={notification.icon as any} size={24} colors={notification.color} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            {!notification.read && <View style={styles.unreadDot} />}
          </Pressable>
        ))}
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
  markAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 20,
    gap: 6,
  },
  markAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  notificationList: {
    gap: 12,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  unreadItem: {
    backgroundColor: '#fff',
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
});
