import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function AppleZoomTargetScreen() {
  return (
    <View style={styles.container}>
      <Link.AppleZoomTarget>
        <View style={styles.targetBox}>
          <Text style={styles.emoji}>🚀</Text>
        </View>
      </Link.AppleZoomTarget>
      <Text style={styles.title}>Apple Zoom Transition</Text>
      <Text style={styles.description}>
        This is the target screen with a zoom transition effect from the home
        screen.
      </Text>
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
  },
  targetBox: {
    width: 200,
    height: 200,
    backgroundColor: "#FF6B6B",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  emoji: {
    fontSize: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 32,
    lineHeight: 24,
  },
});
