import { Stack, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function StackToolbarComponentsScreen() {
  return (
    <>
      {/* 头部左侧：返回按钮 */}
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Button
          icon="chevron.left"
          onPress={() => router.back()}
        />
      </Stack.Toolbar>

      {/* 头部右侧：展示各种组件 */}
      <Stack.Toolbar placement="right">
        {/* 1. 简单菜单 */}
        <Stack.Toolbar.Menu>
          <Stack.Toolbar.Icon sf="ellipsis.circle" />
          <Stack.Toolbar.MenuAction onPress={() => console.log('选项1')}>
            选项 1
          </Stack.Toolbar.MenuAction>
          <Stack.Toolbar.MenuAction onPress={() => console.log('选项2')}>
            选项 2
          </Stack.Toolbar.MenuAction>
          <Stack.Toolbar.MenuAction
            destructive
            onPress={() => console.log('删除')}
          >
            删除
          </Stack.Toolbar.MenuAction>
        </Stack.Toolbar.Menu>

        {/* 2. 带图标的菜单 */}
        <Stack.Toolbar.Menu>
          <Stack.Toolbar.Icon sf="gear" />
          <Stack.Toolbar.MenuAction
            icon="gear"
            onPress={() => console.log('设置')}
          >
            设置
          </Stack.Toolbar.MenuAction>
          <Stack.Toolbar.MenuAction
            icon="paintbrush"
            onPress={() => console.log('主题')}
          >
            主题
          </Stack.Toolbar.MenuAction>
        </Stack.Toolbar.Menu>
      </Stack.Toolbar>

      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 100 }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>
          Stack.Toolbar 组件测试
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            头部右侧展示：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            ⋯ 更多菜单 - 包含 3 个操作项
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            ⚙️ 设置菜单 - 带图标的菜单项
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            点击右侧的按钮查看下拉菜单效果
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            Stack.Toolbar.Icon
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            在按钮中显示图标，支持 SF Symbols 和图片
          </Text>
          <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
            <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Button>
  <Stack.Toolbar.Icon sf="bell.fill" />
  <Stack.Toolbar.Label>通知</Stack.Toolbar.Label>
</Stack.Toolbar.Button>`}
            </Text>
          </View>

          <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 12, marginBottom: 6 }}>
            属性：
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • sf - SF Symbol 名称
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • src - 图片源（ImageSourcePropType）
          </Text>
          <Text style={{ fontSize: 13, color: '#666' }}>
            • renderingMode - 'template' | 'original'
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            Stack.Toolbar.Label
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            按钮的文本标签（仅用于组件式写法）
          </Text>
          <Text style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>
            ⚠️ 注意：当使用 icon 属性时，label 仅用于辅助功能，不会显示
          </Text>
          <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
            <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Button>
  <Stack.Toolbar.Icon sf="heart.fill" />
  <Stack.Toolbar.Label>收藏</Stack.Toolbar.Label>
</Stack.Toolbar.Button>`}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            Stack.Toolbar.Menu + MenuAction
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            创建下拉菜单，点击按钮后显示多个操作选项
          </Text>
          <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 6 }}>
            <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
{`<Stack.Toolbar.Menu>
  <Stack.Toolbar.Icon sf="ellipsis.circle" />
  <Stack.Toolbar.MenuAction onPress={handleAction1}>
    操作 1
  </Stack.Toolbar.MenuAction>
  <Stack.Toolbar.MenuAction
    icon="star.fill"
    onPress={handleAction2}
  >
    收藏
  </Stack.Toolbar.MenuAction>
  <Stack.Toolbar.MenuAction
    destructive
    onPress={handleDelete}
  >
    删除
  </Stack.Toolbar.MenuAction>
</Stack.Toolbar.Menu>`}
            </Text>
          </View>

          <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 12, marginBottom: 6 }}>
            Menu 属性：
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • title - 菜单顶部标题
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • destructive - 危险操作样式
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • disabled - 禁用菜单
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • hidden - 隐藏菜单
          </Text>
          <Text style={{ fontSize: 13, color: '#666' }}>
            • variant - 'plain' | 'prominent' | 'done'
          </Text>

          <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 12, marginBottom: 6 }}>
            MenuAction 属性：
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • children - 文本或 Icon + Label
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • destructive - 危险操作（红色）
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • disabled - 禁用该项
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • icon - 操作项图标
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
            • subtitle - 副标题
          </Text>
          <Text style={{ fontSize: 13, color: '#666' }}>
            • isOn - 选中状态
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            使用场景：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Icon - 按钮图标、装饰元素
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Label - 自定义按钮文本（组件式）
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Menu - 更多选项、设置菜单
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • MenuAction - 具体操作项（删除、分享等）
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            renderingMode 对比：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • 'template' - 应用色调颜色（单色）
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • 'original' - 保留原始颜色（多色图标）
          </Text>
          <Text style={{ fontSize: 12, color: '#999', marginTop: 8 }}>
            💡 有 tintColor 时默认 'template'，否则默认 'original'
          </Text>
          <Text style={{ fontSize: 12, color: '#999' }}>
            💡 仅影响图片图标，SF Symbols 不受影响
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            菜单示例：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            点击头部右侧的菜单按钮查看效果：
          </Text>

          <View style={{ backgroundColor: '#f8f8f8', padding: 12, borderRadius: 8, marginBottom: 8 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 4, color: '#333' }}>
              ⋯ 更多菜单
            </Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              • 选项 1（普通）
            </Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              • 选项 2（普通）
            </Text>
            <Text style={{ fontSize: 12, color: '#FF3B30' }}>
              • 删除（destructive 红色）
            </Text>
          </View>

          <View style={{ backgroundColor: '#f8f8f8', padding: 12, borderRadius: 8 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 4, color: '#333' }}>
              ⚙️ 设置菜单
            </Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              • 设置（带图标）
            </Text>
            <Text style={{ fontSize: 12, color: '#666' }}>
              • 主题（带图标）
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
