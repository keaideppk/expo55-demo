import { View, Text as RNText } from 'react-native';

/**
 * Fallback component for platforms that don't support GlassEffect (iOS only)
 * This file is required by expo-router when using platform-specific files (.ios.tsx)
 */
export default function GlassEffectExample() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <RNText style={{ fontSize: 18, textAlign: 'center', color: '#666' }}>
        GlassEffect is only available on iOS 26+
      </RNText>
      <RNText style={{ fontSize: 14, textAlign: 'center', color: '#999', marginTop: 10 }}>
        Please run this example on an iOS device/simulator with iOS 26 or later.
      </RNText>
    </View>
  );
}
