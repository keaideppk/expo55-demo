import { Link, useIsPreview } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function LinkPreviewScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Link.Preview 示例</Text>
        <Text style={styles.description}>
          长按下面的链接，查看预览效果
        </Text>

        {/* 1. 基础预览 - 默认大小 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. 基础预览（默认大小）</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按预览详情页面</Text>
              </View>
            </Link.Trigger>
            <Link.Preview />
          </Link>
        </View>

        {/* 2. 自定义大小预览 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. 自定义大小预览（300x200）</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按预览（自定义大小）</Text>
              </View>
            </Link.Trigger>
            <Link.Preview style={{ width: 300, height: 200 }} />
          </Link>
        </View>

        {/* 3. 自定义内容预览 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. 自定义内容预览</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按查看自定义预览</Text>
              </View>
            </Link.Trigger>
            <Link.Preview style={{ width: 280, height: 180 }}>
              <View style={styles.customPreview}>
                <Text style={styles.customPreviewEmoji}>✨</Text>
                <Text style={styles.customPreviewTitle}>自定义预览</Text>
                <Text style={styles.customPreviewDesc}>
                  这是自定义的预览内容，替代默认的页面快照
                </Text>
              </View>
            </Link.Preview>
          </Link>
        </View>

        {/* 4. 预览 + 菜单 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. 预览 + 上下文菜单</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按查看预览和菜单</Text>
              </View>
            </Link.Trigger>
            <Link.Preview style={{ width: 300, height: 200 }} />
            <Link.Menu>
              <Link.MenuAction icon="square.and.arrow.up" onPress={() => alert("分享")}>
                分享
              </Link.MenuAction>
              <Link.MenuAction icon="bookmark" onPress={() => alert("收藏")}>
                收藏
              </Link.MenuAction>
              <Link.MenuAction icon="trash" destructive onPress={() => alert("删除")}>
                删除
              </Link.MenuAction>
            </Link.Menu>
          </Link>
        </View>

        {/* 5. 图片预览 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. 图片内容预览</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按查看图片预览</Text>
              </View>
            </Link.Trigger>
            <Link.Preview style={{ width: 280, height: 280 }}>
              <View style={styles.imagePreview}>
                <Text style={styles.imagePreviewEmoji}>🚀</Text>
                <Text style={styles.imagePreviewText}>自定义内容</Text>
                <Text style={styles.imagePreviewSubtext}>完全自定义的预览效果</Text>
              </View>
            </Link.Preview>
          </Link>
        </View>

        {/* 6. 大尺寸预览 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. 大尺寸预览（400x300）</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按查看大尺寸预览</Text>
              </View>
            </Link.Trigger>
            <Link.Preview style={{ width: 400, height: 300 }} />
          </Link>
        </View>

        {/* 7. 预览 + 菜单 + 嵌套菜单 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. 预览 + 嵌套菜单</Text>
          <Link href="/(home)/link-preview">
            <Link.Trigger>
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>长按查看嵌套菜单</Text>
              </View>
            </Link.Trigger>
            <Link.Preview style={{ width: 320, height: 220 }} />
            <Link.Menu>
              <Link.MenuAction icon="square.and.arrow.up" onPress={() => alert("分享")}>
                分享
              </Link.MenuAction>
              <Link.Menu title="更多选项...">
                <Link.MenuAction icon="bookmark" onPress={() => alert("收藏")}>
                  收藏
                </Link.MenuAction>
                <Link.MenuAction icon="arrow.up.doc" onPress={() => alert("复制")}>
                  复制链接
                </Link.MenuAction>
                <Link.MenuAction icon="trash" destructive onPress={() => alert("删除")}>
                  删除
                </Link.MenuAction>
              </Link.Menu>
            </Link.Menu>
          </Link>
        </View>

        {/* 说明 */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>ℹ️ 使用说明</Text>
          <Text style={styles.infoText}>• 轻轻长按：显示预览（Peek）</Text>
          <Text style={styles.infoText}>• 用力按压：打开完整页面（Pop）</Text>
          <Text style={styles.infoText}>• 向上滑动：显示菜单选项</Text>
          <Text style={styles.infoText}>• 此功能仅支持 iOS</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 12,
  },
  previewBox: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#007AFF",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  // 自定义预览样式
  customPreview: {
    flex: 1,
    backgroundColor: "#FF6B6B",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  customPreviewEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  customPreviewTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  customPreviewDesc: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
  },
  // 图片预览样式
  imagePreview: {
    flex: 1,
    backgroundColor: "#a855f7",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePreviewEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  imagePreviewText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  imagePreviewSubtext: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
  },
  // 说明框
  infoBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
});
