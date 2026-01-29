import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LinkMenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link.Menu 示例</Text>
      <Text style={styles.description}>
        长按下面的链接，查看上下文菜单
      </Text>

      {/* 基础菜单示例 */}
      <Link href="/(home)/link-menu" style={styles.linkWrapper}>
        <Link.Menu title="基础菜单">
          <Link.MenuAction onPress={() => alert("编辑")}>编辑</Link.MenuAction>
          <Link.MenuAction onPress={() => alert("删除")} destructive>
            删除
          </Link.MenuAction>
          <Link.MenuAction onPress={() => alert("分享")}>分享</Link.MenuAction>
        </Link.Menu>
        <Link.Trigger>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>长按查看基础菜单</Text>
          </View>
        </Link.Trigger>
      </Link>

      {/* 带图标的菜单示例 */}
      <Link style={styles.linkWrapper}>
        <Link.Menu title="图标菜单">
          <Link.MenuAction icon="arrow.uturn.backward" onPress={() => alert("撤销")}>
            撤销
          </Link.MenuAction>
          <Link.MenuAction icon="arrow.uturn.forward" onPress={() => alert("重做")}>
            重做
          </Link.MenuAction>
          <Link.MenuAction icon="trash" onPress={() => alert("删除")} destructive>
            删除
          </Link.MenuAction>
        </Link.Menu>
        <Link.Trigger>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>长按查看图标菜单</Text>
          </View>
        </Link.Trigger>
      </Link>

      {/* 带副标题的菜单示例 */}
      <Link style={styles.linkWrapper}>
        <Link.Menu title="详细菜单">
          <Link.MenuAction
            subtitle="添加新项目到列表"
            onPress={() => alert("添加")}
          >
            添加项目
          </Link.MenuAction>
          <Link.MenuAction
            subtitle="从列表中移除项目"
            onPress={() => alert("移除")}
            destructive
          >
            移除项目
          </Link.MenuAction>
          <Link.MenuAction
            subtitle="打开设置面板"
            onPress={() => alert("设置")}
            state="on"
          >
            设置
          </Link.MenuAction>
        </Link.Menu>
        <Link.Trigger>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>长按查看详细菜单</Text>
          </View>
        </Link.Trigger>
      </Link>

      {/* 嵌套菜单示例 */}
      <Link style={styles.linkWrapper}>
        <Link.Menu title="嵌套菜单">
          <Link.MenuAction onPress={() => alert("快速操作")}>快速操作</Link.MenuAction>
          <Link.Menu title="更多选项...">
            <Link.MenuAction onPress={() => alert("选项 1")}>选项 1</Link.MenuAction>
            <Link.MenuAction onPress={() => alert("选项 2")}>选项 2</Link.MenuAction>
            <Link.MenuAction onPress={() => alert("选项 3")}>选项 3</Link.MenuAction>
          </Link.Menu>
        </Link.Menu>
        <Link.Trigger>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>长按查看嵌套菜单</Text>
          </View>
        </Link.Trigger>
      </Link>

      {/* 带禁用项的菜单 */}
      <Link style={styles.linkWrapper}>
        <Link.Menu title="混合状态菜单">
          <Link.MenuAction onPress={() => alert("可用操作")}>可用操作</Link.MenuAction>
          <Link.MenuAction onPress={() => alert("禁用操作")} disabled>
            禁用操作
          </Link.MenuAction>
          <Link.MenuAction onPress={() => alert("隐藏操作")} hidden>
            隐藏操作
          </Link.MenuAction>
          <Link.MenuAction onPress={() => alert("删除")} destructive>
            删除
          </Link.MenuAction>
        </Link.Menu>
        <Link.Trigger>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>长按查看混合状态菜单</Text>
          </View>
        </Link.Trigger>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  linkWrapper: {
    width: "100%",
  },
  linkBox: {
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
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
