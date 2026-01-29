import { useState } from 'react';
import { View, Text as RNText } from 'react-native';
import {
  Host,
  ContextMenu,
  Button,
  Text,
  Picker,
  Section,
  Divider,
  VStack,
} from '@expo/ui/swift-ui';
import { pickerStyle, tag } from '@expo/ui/swift-ui/modifiers';

export default function ContextMenuPickerExample() {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  return (
    <Host matchContents>
      <VStack spacing={40}>
        {/* Example 1: Basic ContextMenu */}
        <Text>1. Basic ContextMenu</Text>
        <ContextMenu>
          <ContextMenu.Items>
            <Button label="Edit" onPress={() => console.log('Edit')} />
            <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Text>Long press me</Text>
          </ContextMenu.Trigger>
        </ContextMenu>

        {/* Example 2: ContextMenu with Images (System Icons) */}
        <Text>2. ContextMenu with System Icons</Text>
        <ContextMenu>
          <ContextMenu.Items>
            <Button
              label="Share"
              systemImage="square.and.arrow.up"
              onPress={() => console.log('Share')}
            />
            <Button label="Favorite" systemImage="heart" onPress={() => console.log('Favorite')} />
            <Button
              label="Delete"
              systemImage="trash"
              role="destructive"
              onPress={() => console.log('Delete')}
            />
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Text>Long press me</Text>
          </ContextMenu.Trigger>
        </ContextMenu>

        {/* Example 3: ContextMenu with Preview */}
        <Text>3. ContextMenu with Preview</Text>
        <ContextMenu>
          <ContextMenu.Items>
            <Button label="Edit" onPress={() => console.log('Edit')} />
            <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Text>Long press me</Text>
          </ContextMenu.Trigger>
          <ContextMenu.Preview>
            <View style={{ width: 200, height: 100, backgroundColor: '#f0f0f0', padding: 16 }}>
              <RNText>Preview Content</RNText>
            </View>
          </ContextMenu.Preview>
        </ContextMenu>

        {/* Example 4: ContextMenu with Picker */}
        <Text>4. ContextMenu with Picker</Text>
        <ContextMenu>
          <ContextMenu.Items>
            <Button label="Action" onPress={() => console.log('Action')} />
            <Picker
              label="Size"
              modifiers={[pickerStyle('menu')]}
              selection={selectedIndex}
              onSelectionChange={setSelectedIndex}>
              {['Small', 'Medium', 'Large'].map((option, index) => (
                <Text key={index} modifiers={[tag(index)]}>
                  {option}
                </Text>
              ))}
            </Picker>
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Text>Long press me</Text>
          </ContextMenu.Trigger>
        </ContextMenu>

        {/* Example 5: ContextMenu with Sections */}
        <Text>5. ContextMenu with Sections</Text>
        <ContextMenu>
          <ContextMenu.Items>
            <Section title="Actions">
              <Button label="Edit" onPress={() => console.log('Edit')} />
              <Button label="Duplicate" onPress={() => console.log('Duplicate')} />
            </Section>
            <Divider />
            <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Text>Long press me</Text>
          </ContextMenu.Trigger>
        </ContextMenu>

        {/* Example 6: Nested ContextMenu */}
        <Text>6. Nested ContextMenu</Text>
        <ContextMenu>
          <ContextMenu.Items>
            <Button label="Action" onPress={() => console.log('Action')} />
            <ContextMenu>
              <ContextMenu.Items>
                <Button label="Sub Action 1" onPress={() => console.log('Sub 1')} />
                <Button label="Sub Action 2" onPress={() => console.log('Sub 2')} />
              </ContextMenu.Items>
              <ContextMenu.Trigger>
                <Button label="More Options" />
              </ContextMenu.Trigger>
            </ContextMenu>
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Text>Long press me</Text>
          </ContextMenu.Trigger>
        </ContextMenu>
      </VStack>
    </Host>
  );
}
