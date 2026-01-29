import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="headerBotton" />
      <Stack.Screen name="context-menu-picker" options={{ title: 'ContextMenu + Picker' }} />
      <Stack.Screen name="glass-effect" options={{ title: 'GlassEffect' }} />
      <Stack.Screen name="native-tabs" options={{ headerShown: false }} />
      <Stack.Screen name="apple-zoom-target" options={{ title: 'Apple Zoom' }} />
      <Stack.Screen name="link-menu" options={{ title: 'Link.Menu' }} />
      <Stack.Screen name="link-preview" options={{ title: 'Link.Preview' }} />
      <Stack.Screen name="link-preview-detail" options={{ title: 'Preview Detail' }} />
      <Stack.Screen
        name="stack-header"
        options={{
          title: 'Stack.Header',
        }}
      />
      <Stack.Screen
        name="stack-screen"
        options={{
          title: 'Stack.Screen',
          headerTintColor: '#007AFF',
        }}
      />
      <Stack.Screen
        name="stack-search-bar"
        options={{
          title: 'Stack.SearchBar',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="stack-toolbar"
        options={{
          title: 'Stack.Toolbar',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="stack-toolbar-props"
        options={{
          title: 'Toolbar Props',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="stack-toolbar-components"
        options={{
          title: 'Toolbar Components',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
