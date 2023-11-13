import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/* import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; */
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';

// const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
  <Image
    source={require('./img/logo.png')}
    style={{
      height: 40,
      width: 300,
      resizeMode: 'contain',
      alignSelf: 'center'
  }} />
)};

export default function App() {
  return (
    <>
    <NavigationContainer>
    <View style={appStyles.container}>
        {/* <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName =  'ios-list';
          } else if (route.name === 'Login') {
            iconName = 'ios-enter';
          }
          else if (route.name === 'Feedback') {
            iconName = 'ios-bookmarks';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}> */}
      <Drawer.Navigator
          useLegacyImplementation
          screenOptions={{ drawerPosition: 'left' }}
          initialRouteName="Login">
        <Drawer.Screen
          options={{ title: "Home", headerTitle: (props) => <LogoTitle {...props} /> }}
          name="Welcome"
          component={WelcomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Feedback" component={FeedbackForm} />
        <Drawer.Screen name="Menu" component={MenuItems} />
      </Drawer.Navigator>
        {/* </Tab.Navigator> */}
      </View>
      <View style={appStyles.footerContainer}>
        <LittleLemonFooter />
      </View>
      </NavigationContainer>
      </>

  );
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#495E57'
  },
});