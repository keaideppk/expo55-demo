import { useIsPreview } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function LinkPreviewDetailScreen() {
  const isPreview = useIsPreview();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 详情页面</Text>
      {isPreview && (
        <View style={styles.previewBadge}>
          <Text style={styles.previewBadgeText}>🔍 预览模式</Text>
        </View>
      )}
      <Text style={styles.content}>
        这是链接跳转的详情页面。当你在预览页面长按链接时，会看到这个页面的预览效果。
      </Text>
      <Text style={styles.tip}>
        💡 用力按下可以打开完整页面
      </Text>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>📱</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  previewBadge: {
    backgroundColor: "#FFD60A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewBadgeText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  content: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 16,
  },
  tip: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginBottom: 40,
  },
  placeholder: {
    width: 200,
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 64,
  },
});
