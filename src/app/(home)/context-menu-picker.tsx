import { View, ScrollView, Text } from 'react-native';

export default function ContextMenuWithPickerExample() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 30,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>
        ContextMenu with Picker Example
      </Text>

      <View style={{ alignItems: 'center', gap: 20, width: '100%' }}>
        <View
          style={{
            padding: 24,
            backgroundColor: '#FFF3CD',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#FFC107',
          }}>
          <Text style={{ fontSize: 16, color: '#856404', textAlign: 'center' }}>
            This component is only available on iOS.
          </Text>
          <Text style={{ fontSize: 14, color: '#856404', textAlign: 'center', marginTop: 8 }}>
            @expo/ui/swift-ui requires iOS platform to use native SwiftUI components.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
