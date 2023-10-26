import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create( {
  container: {
    flex: 0.30,
    backgroundColor: '#F4CE14'
  },
  headerText: {
    padding: 60,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
})
