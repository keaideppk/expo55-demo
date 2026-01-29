import { Link, router } from "expo-router";
import { SymbolView } from 'expo-symbols';
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type MenuItem = {
  id: string;
  title: string;
  route: any;
  color: string;
  pressedColor: string;
  icon: any;
  special?: 'appleZoom';
};

const menuItems: MenuItem[] = [
  { id: '1', title: 'Header Button', route: '/(home)/headerBotton', color: '#007AFF', pressedColor: '#0056b3', icon: 'chevron.right' },
  { id: '2', title: 'ContextMenu + Picker', route: '/(home)/context-menu-picker', color: '#007AFF', pressedColor: '#0056b3', icon: 'chevron.right' },
  { id: '3', title: 'GlassEffect', route: '/(home)/glass-effect', color: '#007AFF', pressedColor: '#0056b3', icon: 'chevron.right' },
  { id: '4', title: 'Native Tabs', route: '/(home)/native-tabs', color: '#007AFF', pressedColor: '#0056b3', icon: 'chevron.right' },
  { id: '5', title: 'Apple Zoom', route: '/(home)/apple-zoom-target', color: '#FF6B6B', pressedColor: '#c92a2a', icon: 'chevron.right', special: 'appleZoom' },
  { id: '6', title: 'Link.Menu', route: '/(home)/link-menu', color: '#74C69D', pressedColor: '#55a630', icon: 'chevron.right' },
  { id: '7', title: 'Link.Preview', route: '/(home)/link-preview', color: '#a855f7', pressedColor: '#9333ea', icon: 'chevron.right' },
  { id: '8', title: 'Stack.Header', route: '/(home)/stack-header', color: '#f59e0b', pressedColor: '#b45309', icon: 'chevron.right' },
  { id: '9', title: 'Stack.Screen', route: '/(home)/stack-screen', color: '#06b6d4', pressedColor: '#0891b2', icon: 'chevron.right' },
  { id: '10', title: 'Stack.SearchBar', route: '/(home)/stack-search-bar', color: '#818cf8', pressedColor: '#6366f1', icon: 'chevron.right' },
  { id: '11', title: 'Stack.Toolbar', route: '/(home)/stack-toolbar', color: '#ef4444', pressedColor: '#dc2626', icon: 'chevron.right' },
  { id: '12', title: 'Toolbar Props', route: '/(home)/stack-toolbar-props', color: '#ec4899', pressedColor: '#be185d', icon: 'chevron.right' },
  { id: '13', title: 'Toolbar Components', route: '/(home)/stack-toolbar-components', color: '#f97316', pressedColor: '#ea580c', icon: 'chevron.right' },
];

export default function HomeScreen() {
  const renderItem = ({ item }: { item: MenuItem }) => {
    if (item.special === 'appleZoom') {
      // AppleZoom 特殊处理
      return (
        <Link href={item.route} asChild>
          <Pressable style={({ pressed }) => [
            styles.item,
            { backgroundColor: pressed ? item.pressedColor : item.color }
          ]}>
            <Link.AppleZoom alignmentRect={{ x: 0, y: 0, width: 350, height: 60 }}>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <SymbolView name={item.icon!} size={20} colors="#fff" />
              </View>
            </Link.AppleZoom>
          </Pressable>
        </Link>
      );
    }

    return (
      <Pressable
        onPress={() => router.push(item.route)}
        style={({ pressed }) => [
          styles.item,
          { backgroundColor: pressed ? item.pressedColor : item.color }
        ]}
      >
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <SymbolView name={item.icon!} size={20} colors="#fff" />
        </View>
      </Pressable>
    );
  };

  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Expo Router 55 示例</Text>
      <Text style={styles.headerSubtitle}>选择一个示例查看详情</Text>
    </View>
  );

  return (
    <FlatList
      data={menuItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeader}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    minHeight: 60,
    justifyContent: 'center',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
  separator: {
    height: 12,
  },
});
