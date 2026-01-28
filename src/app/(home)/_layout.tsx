import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="headerBotton" />
      <Stack.Screen name="bottomToolbar" />
      <Stack.Screen name="context-menu-picker" options={{ title: 'ContextMenu + Picker' }} />
    </Stack>
  );
}
