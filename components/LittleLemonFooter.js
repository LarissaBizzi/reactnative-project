import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
        <View
          style={footerStyles.container}>
          <Text
            style={footerStyles.headerText}>
            All rights reserved by <Text style={footerStyles.innerText}>Little Lemon</Text>, 2022{' '}
          </Text>
        </View>
      );
}

const footerStyles = StyleSheet.create ({
  container: {
    backgroundColor: '#F4CE14',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight:'bold'
  },
})
