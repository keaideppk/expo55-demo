import { Stack, router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function StackHeaderScreen() {
  return (
    <>
      {/* Stack.Header 示例：配置头部样式 */}
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
          Stack.Header 效果演示
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
            当前头部配置：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ largeTitle: {`{ visible: true }`} - 大标题效果
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ blurEffect: systemMaterial - iOS 模糊效果
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ backgroundColor: 半透明白色
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            ✓ shadowColor: transparent - 隐藏大标题边框
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            效果说明：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            🔸 向上滚动时，大标题会收缩为小标题
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            🔸 半透明背景 + blurEffect 产生毛玻璃效果
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            🔸 shadowColor: transparent 隐藏大标题底部的边框线
          </Text>
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

        <Text style={{ fontSize: 16, fontWeight: '600', color: '#666', marginTop: 8 }}>
          向下滚动查看大标题效果 ↑
        </Text>

        {/* 更多内容用于演示滚动和大标题效果 */}
        {Array.from({ length: 25 }).map((_, i) => (
          <View
            key={i}
            style={{
              backgroundColor: '#fff',
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 14, color: '#333' }}>
              滚动内容项 {i + 1} - 向上滚动观察大标题变化
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
