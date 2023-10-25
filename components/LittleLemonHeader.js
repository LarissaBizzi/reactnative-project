import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.30, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 60,
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
