import { Stack, router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function StackToolbarScreen() {
  return (
    <>
      {/* Stack.Toolbar 示例 - 展示工具栏的各种配置 */}

      {/* 头部左侧工具栏 */}
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Button
          icon="sidebar.left"
          onPress={() => console.log('左侧按钮 pressed')}
        />
      </Stack.Toolbar>

      {/* 头部右侧工具栏 */}
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button
          icon="ellipsis.circle"
          onPress={() => console.log('右侧按钮 pressed')}
        />
        <Stack.Toolbar.Button
          icon="square.and.arrow.up"
          onPress={() => console.log('分享按钮 pressed')}
        />
      </Stack.Toolbar>

      {/* 底部工具栏 - 包含多个按钮 */}
      <Stack.Toolbar placement="bottom">
        {/* 左侧按钮组 */}
        <Stack.Toolbar.Button
          icon="chevron.left"
          onPress={() => router.back()}
        />
        <Stack.Toolbar.Button
          icon="house"
          onPress={() => router.push("/(home)")}
        />

        {/* 中间弹性间距 */}
        <Stack.Toolbar.Spacer />

        {/* 中间按钮组 */}
        <Stack.Toolbar.Button
          icon="magnifyingglass"
          onPress={() => console.log('搜索 pressed')}
        />
        <Stack.Toolbar.Button
          icon="heart"
          onPress={() => console.log('收藏 pressed')}
        />

        {/* 弹性间距 */}
        <Stack.Toolbar.Spacer />

        {/* 右侧按钮组 */}
        <Stack.Toolbar.Button
          icon="square.and.arrow.up"
          onPress={() => console.log('分享 pressed')}
        />
        <Stack.Toolbar.Button
          icon="trash"
          onPress={() => console.log('删除 pressed')}
        />
      </Stack.Toolbar>

      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 100 }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>
          Stack.Toolbar 示例
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
            当前配置：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ placement="left" - 头部左侧按钮（侧边栏图标）
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ placement="right" - 头部右侧按钮（更多、分享）
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ placement="bottom" - 底部工具栏（6个按钮）
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            ✓ 使用 Spacer 实现弹性间距布局
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            Stack.Toolbar 组件：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Stack.Toolbar.Button - 带图标的按钮
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Stack.Toolbar.Menu - 下拉菜单
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Stack.Toolbar.View - 自定义视图容器
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Stack.Toolbar.Spacer - 弹性间距
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • Stack.Toolbar.SearchBarSlot - 搜索栏槽位
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            placement 属性：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • "left" - 头部左侧（自动显示头部）
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • "right" - 头部右侧（自动显示头部）
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • "bottom" - 底部工具栏（仅 iOS，只能在页面内使用）
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            Toolbar.Button 图标示例：
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {[
              'house', 'magnifyingglass', 'heart', 'heart.fill',
              'square.and.arrow.up', 'trash', 'chevron.left', 'chevron.right',
              'ellipsis.circle', 'gear', 'bell', 'bell.fill',
              'person', 'person.fill', 'star', 'star.fill',
              'checkmark', 'xmark', 'plus', 'minus'
            ].map((icon, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: '#f0f0f0',
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  borderRadius: 6,
                }}
              >
                <Text style={{ fontSize: 12, color: '#333' }}>{icon}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            注意事项：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Stack.Toolbar 是实验性 API，可能变更
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • left/right 自动使头部可见
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • bottom 工具栏仅限 iOS，不能在 layout 中使用
          </Text>
        </View>

        {/* 滚动内容演示 */}
        {Array.from({ length: 15 }).map((_, i) => (
          <View
            key={i}
            style={{
              backgroundColor: '#fff',
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 14, color: '#333' }}>
              内容项 {i + 1} - 观察底部工具栏
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
