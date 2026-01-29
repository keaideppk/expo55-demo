import { Stack, router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function StackScreenScreen() {
  return (
    <>
      {/* Stack.Screen 配置示例：通过 options 配置各种屏幕选项 */}
      <Stack.Header
        blurEffect="systemMaterial"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        largeStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          shadowColor: 'transparent',
        }}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        contentContainerStyle={{ padding: 20, gap: 16 }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>
          Stack.Screen 配置示例
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>
            当前 _layout.tsx 中的配置：
          </Text>
          <View style={{ backgroundColor: '#f5f5f5', padding: 12, borderRadius: 8 }}>
            <Text style={{ fontSize: 12, fontFamily: 'monospace', color: '#333' }}>
              {`<Stack.Screen
  name="stack-screen"
  options={{
    title: 'Stack.Screen',
    largeTitle: { visible: true },
    headerLargeTitle: true,
    headerTintColor: '#007AFF',
    presentation: 'card',
  }}
/>`}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            常用 options 属性：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • title - 屏幕标题
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • headerShown - 是否显示头部
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • headerTintColor - 头部色调颜色
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • largeTitle - 大标题配置
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • presentation - 展示方式 (card/modal)
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • headerStyle - 头部样式
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • headerTitleStyle - 标题样式
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            presentation 属性值：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • card - 默认，从右侧滑入
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • modal - 从底部滑入（iOS）
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • fullScreenModal - 全屏模态
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            在页面内动态配置：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
            可以使用 useLayoutEffect 和 navigation.setOptions 来动态配置：
          </Text>
          <View style={{ backgroundColor: '#f5f5f5', padding: 12, borderRadius: 8 }}>
            <Text style={{ fontSize: 11, fontFamily: 'monospace', color: '#333' }}>
              {`import { useNavigation } from 'expo-router';

function Screen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '动态标题',
      headerRight: () => <Button />,
    });
  }, [navigation]);
  // ...
}`}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => ({
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: pressed ? "#0056b3" : "#007AFF",
            borderRadius: 8,
            alignSelf: 'center',
          })}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            返回首页
          </Text>
        </Pressable>

        {/* 滚动内容 */}
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
              滚动内容项 {i + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
