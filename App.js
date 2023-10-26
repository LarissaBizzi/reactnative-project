import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View
        style={appStyles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuItems />
      </View>
      <View style={appStyles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footerContainer: {
    backgroundColor: '#495E57'
  },
});