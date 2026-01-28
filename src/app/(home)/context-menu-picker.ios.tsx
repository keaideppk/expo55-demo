import { useState } from 'react';
import { Host, ContextMenu, Button, Text, Picker } from '@expo/ui/swift-ui';
import { pickerStyle, tag } from '@expo/ui/swift-ui/modifiers';
import { View, ScrollView } from 'react-native';

export default function ContextMenuWithPickerExample() {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);
  const [selectedSize, setSelectedSize] = useState('Medium');

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
      <Host matchContents>
        <ContextMenu>
          <ContextMenu.Items>
            <Button label="Action" onPress={() => console.log('Action')} />
            <Picker
              label="Size"
              modifiers={[pickerStyle('menu')]}
              selection={selectedIndex}
              onSelectionChange={(index) => {
                setSelectedIndex(index);
                setSelectedSize(['Small', 'Medium', 'Large'][index ?? 0]);
              }}>
              {['Small', 'Medium', 'Large'].map((option, index) => (
                <Text key={index} modifiers={[tag(index)]}>
                  {option}
                </Text>
              ))}
            </Picker>
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <View
              style={{
                paddingVertical: 16,
                paddingHorizontal: 32,
                backgroundColor: '#007AFF',
                borderRadius: 12,
              }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                Long press me
              </Text>
            </View>
          </ContextMenu.Trigger>
        </ContextMenu>
      </Host>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, color: '#666' }}>
          Selected Size: {selectedSize}
        </Text>
        <Text style={{ fontSize: 14, color: '#999', textAlign: 'center', marginTop: 20 }}>
          Long press the blue button to see the context menu with picker
        </Text>
      </View>
    </ScrollView>
  );
}
