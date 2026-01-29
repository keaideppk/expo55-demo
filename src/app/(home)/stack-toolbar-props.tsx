import { Stack, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function StackToolbarPropsScreen() {
  return (
    <>
      {/* 头部左侧：返回按钮 */}
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Button
          icon="chevron.left"
          onPress={() => router.back()}
        />
      </Stack.Toolbar>

      {/* 头部右侧：展示各种 Button 属性 */}
      <Stack.Toolbar placement="right">
        {/* 1. 带徽章的按钮 */}
        <Stack.Toolbar.Button onPress={() => console.log('通知')}>
          <Stack.Toolbar.Icon sf="bell.fill" />
          <Stack.Toolbar.Badge>5</Stack.Toolbar.Badge>
        </Stack.Toolbar.Button>

        {/* 2. 选中状态的按钮 */}
        <Stack.Toolbar.Button
          icon="star.fill"
          selected={true}
          onPress={() => console.log('已收藏')}
        />

        {/* 3. prominent 变体 */}
        <Stack.Toolbar.Button
          icon="checkmark"
          variant="prominent"
          onPress={() => console.log('重要操作')}
        />
      </Stack.Toolbar>

      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 100 }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>
          Stack.Toolbar 属性测试
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            头部右侧按钮说明：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            🔔 通知按钮 - 带 <Text style={{ color: '#007AFF', fontWeight: '600' }}>Badge 徽章 "5"</Text>
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            ⭐ 收藏按钮 - <Text style={{ color: '#007AFF', fontWeight: '600' }}>selected={true}</Text> 选中状态
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            ✓ 确认按钮 - <Text style={{ color: '#007AFF', fontWeight: '600' }}>variant="prominent"</Text> 突出样式
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            Stack.Toolbar.Button 属性：
          </Text>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              Badge（徽章）
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
              在按钮上显示数字或文本标记，通常用于通知数量
            </Text>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Button onPress={...}>
  <Stack.Toolbar.Icon sf="bell.fill" />
  <Stack.Toolbar.Badge>5</Stack.Toolbar.Badge>
</Stack.Toolbar.Button>`}
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
              ⚠️ 仅支持 left/right placement，不支持底部
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              selected（选中状态）
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
              按钮呈现选中/激活状态样式
            </Text>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Button
  icon="star.fill"
  selected={true}
  onPress={...}
/>`}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              variant（变体样式）
            </Text>
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
              <View style={{ backgroundColor: '#e3f2fd', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                <Text style={{ fontSize: 11, color: '#1976d2' }}>plain（默认）</Text>
              </View>
              <View style={{ backgroundColor: '#e8f5e9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                <Text style={{ fontSize: 11, color: '#388e3c' }}>prominent（突出）</Text>
              </View>
              <View style={{ backgroundColor: '#fff3e0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                <Text style={{ fontSize: 11, color: '#f57c00' }}>done（完成）</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Button
  icon="checkmark"
  variant="prominent"
  onPress={...}
/>`}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              disabled（禁用状态）
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
              禁用按钮，点击无效且显示灰色
            </Text>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
                {`<Stack.Toolbar.Button icon="trash" disabled={true} />`}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              hidden（隐藏按钮）
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
              完全隐藏按钮（不占用空间）
            </Text>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
                {`<Stack.Toolbar.Button icon="gear" hidden={true} />`}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              tintColor（色调颜色）
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
              自定义按钮的颜色
            </Text>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
                {`<Stack.Toolbar.Button icon="heart" tintColor="#FF3B30" />`}
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 6, color: '#333' }}>
              iconRenderingMode（图标渲染模式）
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
              控制图片图标的渲染方式
            </Text>
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
              <View style={{ backgroundColor: '#f3e5f5', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                <Text style={{ fontSize: 11, color: '#7b1fa2' }}>template（应用色调）</Text>
              </View>
              <View style={{ backgroundColor: '#fce4ec', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                <Text style={{ fontSize: 11, color: '#c2185b' }}>original（保留原色）</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
              <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
                {`<Stack.Toolbar.Button icon="logo" iconRenderingMode="original" />`}
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
              ⚠️ 仅影响图片图标，不影响 SF Symbols
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            组件式写法：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            除了使用 icon 属性，还可以用组件方式：
          </Text>
          <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
            <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Button onPress={...}>
  <Stack.Toolbar.Icon sf="bell.fill" />
  <Stack.Toolbar.Label>通知</Stack.Toolbar.Label>
  <Stack.Toolbar.Badge>5</Stack.Toolbar.Badge>
</Stack.Toolbar.Button>`}
            </Text>
          </View>
          <Text style={{ fontSize: 12, color: '#999', marginTop: 4 }}>
            💡 使用 icon 时 label 仅用于辅助功能，Badge 仅支持 left/right
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            使用场景：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Badge - 通知数量、未读消息
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • selected - 收藏、筛选状态
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • variant - 主要操作按钮用 prominent
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • disabled - 暂时不可用的功能
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • hidden - 动态显示/隐藏按钮
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
