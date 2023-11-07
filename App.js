import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <View
        style={appStyles.container}>
        <LittleLemonHeader />
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerStyle: { backgroundColor: "gray" } }}>
        <Stack.Screen
          options={{ title: "Home" }}
          name="welcome"
          component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="feedback" component={FeedbackForm} />
        <Stack.Screen name="menu" component={MenuItems} />
        </Stack.Navigator>
      </View>
      <View style={appStyles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
   </>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#495E57'
  },
});