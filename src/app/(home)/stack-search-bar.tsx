import { Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";

export default function StackSearchBarScreen() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<string[]>([]);

  // 模拟搜索
  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim().length > 0) {
      // 模拟搜索结果
      const mockItems = [
        "Apple", "Banana", "Cherry", "Date", "Elderberry",
        "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
        "Mango", "Nectarine", "Orange", "Peach", "Quince"
      ];
      const filtered = mockItems.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      {/* Stack.SearchBar 示例：与原生头部集成的搜索栏 */}
      <Stack.SearchBar
        placeholder="搜索水果..."
        value={searchText}
        onChangeText={handleSearch}
      />

      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        contentContainerStyle={{ padding: 20, gap: 16 }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>
          Stack.SearchBar 示例
        </Text>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
            功能说明：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ 与原生头部集成
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ 自动使头部可见 (headerShown: true)
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ 支持占位符文本
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            ✓ onChangeText 回调处理搜索逻辑
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            ✓ value 控制输入值
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            当前搜索内容：
          </Text>
          <Text style={{ fontSize: 14, color: '#007AFF' }}>
            {searchText || "(未输入)"}
          </Text>
        </View>

        {/* 搜索结果 */}
        {searchText.trim().length > 0 && (
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
              搜索结果 ({results.length})：
            </Text>
            {results.length > 0 ? (
              results.map((item, index) => (
                <View
                  key={index}
                  style={{
                    paddingVertical: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: '#f0f0f0',
                  }}
                >
                  <Text style={{ fontSize: 14, color: '#333' }}>{item}</Text>
                </View>
              ))
            ) : (
              <Text style={{ fontSize: 14, color: '#999' }}>未找到匹配结果</Text>
            )}
          </View>
        )}

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            Stack.SearchBar 属性：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • placeholder - 占位符文本
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • value - 输入框的值
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • onChangeText - 文本变化回调
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • 其他属性继承自 SearchBarProps
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            注意事项：
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • Stack.SearchBar 会自动显示头部
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
            • 搜索栏是原生头部的一部分
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            • iOS 26+ 可使用 Stack.Toolbar.SearchBarSlot 放在底部工具栏
          </Text>
        </View>

        {/* 额外内容用于演示滚动 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <View
            key={i}
            style={{
              backgroundColor: '#fff',
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 14, color: '#333' }}>
              列表项 {i + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
