import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={welcomescreenStyles.container}>
      <Text
        style={welcomescreenStyles.headerText}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={welcomescreenStyles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment.
        </Text>
    </View>
  );
}

const welcomescreenStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
})