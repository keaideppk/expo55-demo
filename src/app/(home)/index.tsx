import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Pressable
        onPress={() => router.push("/(home)/headerBotton")}
        style={({ pressed }) => ({
          paddingVertical: 12,
          paddingHorizontal: 24,
          backgroundColor: pressed ? "#0056b3" : "#007AFF",
          borderRadius: 8,
        })}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
          Go to Header Button
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/(home)/bottomToolbar")}
        style={({ pressed }) => ({
          paddingVertical: 12,
          paddingHorizontal: 24,
          backgroundColor: pressed ? "#0056b3" : "#007AFF",
          borderRadius: 8,
        })}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
          Go to Bottom Toolbar
        </Text>
      </Pressable>
    </View>
  );
}
