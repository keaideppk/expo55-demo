import {
  GlassContainer,
  GlassView,
  isGlassEffectAPIAvailable,
  isLiquidGlassAvailable,
} from 'expo-glass-effect';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, Text as RNText, ScrollView, StyleSheet, View } from 'react-native';

export default function GlassEffectExample() {
  const [isLiquidAvailable, setIsLiquidAvailable] = useState(isLiquidGlassAvailable());
  const [isAPIAvailable, setIsAPIAvailable] = useState(isGlassEffectAPIAvailable());

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Availability Check */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>Availability Check</RNText>
        <View style={styles.statusContainer}>
          <RNText style={styles.statusText}>
            Liquid Glass Available: {isLiquidAvailable ? 'Yes' : 'No'}
          </RNText>
          <RNText style={styles.statusText}>
            Glass Effect API Available: {isAPIAvailable ? 'Yes' : 'No'}
          </RNText>
        </View>
      </View>

      {/* Example 1: Basic GlassView */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>1. Basic GlassView (regular)</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.glassView}>
            <RNText style={styles.text}>Glass Effect</RNText>
          </GlassView>
        </View>
      </View>

      {/* Example 2: GlassView with clear style */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>2. GlassView (clear style)</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.glassView} glassEffectStyle="clear">
            <RNText style={styles.text}>Clear Glass</RNText>
          </GlassView>
        </View>
      </View>

      {/* Example 3: GlassView with tint color */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>3. GlassView with tint color</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.glassView} tintColor="#FF6B6B">
            <RNText style={styles.text}>Tinted Glass</RNText>
          </GlassView>
        </View>
      </View>

      {/* Example 4: GlassView with color scheme */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>4. GlassView color schemes</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.smallGlassView} colorScheme="light">
            <RNText style={styles.smallText}>Light</RNText>
          </GlassView>
          <GlassView style={styles.smallGlassView} colorScheme="dark">
            <RNText style={styles.smallText}>Dark</RNText>
          </GlassView>
          <GlassView style={styles.smallGlassView} colorScheme="auto">
            <RNText style={styles.smallText}>Auto</RNText>
          </GlassView>
        </View>
      </View>

      {/* Example 5: Interactive GlassView with icons */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>5. Interactive Glass Buttons with Icons</RNText>
        <RNText style={styles.sectionDescription}>
          isInteractive 让玻璃效果可以正确响应触摸事件
        </RNText>
        <View style={[styles.exampleContainer, styles.rowContainer]}>
          {/* 玻璃按钮 - 带 isInteractive */}
          <Pressable onPress={() => console.log('Like pressed')}>
            <GlassView style={styles.iconGlassButton} isInteractive>
              <SymbolView name="heart.fill" size={30} colors="#FF3B30" />
              <RNText style={styles.iconButtonText}>Like</RNText>
            </GlassView>
          </Pressable>

          <Pressable onPress={() => console.log('Share pressed')}>
            <GlassView style={styles.iconGlassButton} isInteractive>
              <SymbolView name="square.and.arrow.up.fill" size={30} colors="#007AFF" />
              <RNText style={styles.iconButtonText}>Share</RNText>
            </GlassView>
          </Pressable>

          <Pressable onPress={() => console.log('Bookmark pressed')}>
            <GlassView style={styles.iconGlassButton} isInteractive>
              <SymbolView name="bookmark.fill" size={30} colors="#FF9500" />
              <RNText style={styles.iconButtonText}>Save</RNText>
            </GlassView>
          </Pressable>
        </View>
      </View>

      {/* Example 6: GlassContainer */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>6. GlassContainer (merged effect)</RNText>
        <View style={styles.exampleContainer}>
          <GlassContainer spacing={10} style={styles.glassContainer}>
            <GlassView style={styles.glass1} isInteractive />
            <GlassView style={styles.glass2} />
            <GlassView style={styles.glass3} />
          </GlassContainer>
        </View>
      </View>

      {/* Example 7: Glass card with content and icon */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>7. Glass Card with Icon</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.glassCard}>
            <View style={styles.cardHeader}>
              <SymbolView name="doc.fill" size={28} colors="#007AFF" />
              <RNText style={styles.cardTitle}>Glass Card</RNText>
            </View>
            <RNText style={styles.cardText}>
              This is a glass effect card with content inside.
            </RNText>
            <Pressable
              style={styles.cardButton}
              onPress={() => console.log('Card button pressed!')}>
              <SymbolView name="arrow.right.circle.fill" size={20} colors="#fff" />
              <RNText style={styles.cardButtonText}>Action</RNText>
            </Pressable>
          </GlassView>
        </View>
      </View>

      {/* Example 8: Multiple layered glass views */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>8. Layered Glass Views</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.layeredGlass1} />
          <GlassView style={styles.layeredGlass2} />
          <GlassView style={styles.layeredGlass3}>
            <RNText style={styles.smallText}>Top Layer</RNText>
          </GlassView>
        </View>
      </View>

      {/* Example 9: GlassView with rounded corners */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>9. Different border radius</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={[styles.glassView, { borderRadius: 0 }]}>
            <RNText style={styles.text}>No radius</RNText>
          </GlassView>
          <GlassView style={[styles.glassView, { borderRadius: 8 }]}>
            <RNText style={styles.text}>8px radius</RNText>
          </GlassView>
          <GlassView style={[styles.glassView, { borderRadius: 20 }]}>
            <RNText style={styles.text}>20px radius</RNText>
          </GlassView>
          <GlassView style={[styles.glassView, { borderRadius: 50 }]}>
            <RNText style={styles.text}>50px radius</RNText>
          </GlassView>
        </View>
      </View>

      {/* Example 10: Glass navigation bar with icons */}
      <View style={styles.section}>
        <RNText style={styles.sectionTitle}>10. Glass Navigation Bar with Icons</RNText>
        <View style={styles.exampleContainer}>
          <GlassView style={styles.navBar}>
            <Pressable style={styles.navItem} onPress={() => console.log('Home')}>
              <SymbolView name="house.fill" size={22} colors="#007AFF" />
              <RNText style={styles.navText}>Home</RNText>
            </Pressable>
            <Pressable style={styles.navItem} onPress={() => console.log('Search')}>
              <SymbolView name="magnifyingglass" size={22} colors="#007AFF" />
              <RNText style={styles.navText}>Search</RNText>
            </Pressable>
            <Pressable style={styles.navItem} onPress={() => console.log('Notifications')}>
              <SymbolView name="bell.fill" size={22} colors="#007AFF" />
              <RNText style={styles.navText}>Alerts</RNText>
            </Pressable>
            <Pressable style={styles.navItem} onPress={() => console.log('Profile')}>
              <SymbolView name="person.fill" size={22} colors="#007AFF" />
              <RNText style={styles.navText}>Profile</RNText>
            </Pressable>
          </GlassView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  statusContainer: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#333',
  },
  exampleContainer: {
    gap: 12,
  },
  sectionDescription: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconGlassButton: {
    width: 80,
    height: 90,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  iconButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  glassView: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  smallGlassView: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  glassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  glass1: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  glass2: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  glass3: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassCard: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    gap: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  cardButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  layeredGlass1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 150,
    height: 80,
    borderRadius: 12,
  },
  layeredGlass2: {
    position: 'absolute',
    top: 20,
    left: 30,
    width: 150,
    height: 80,
    borderRadius: 12,
  },
  layeredGlass3: {
    position: 'absolute',
    top: 40,
    left: 60,
    width: 150,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  navItem: {
    padding: 8,
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});
