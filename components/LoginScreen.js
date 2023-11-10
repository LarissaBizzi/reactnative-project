import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loggedIn, onLogin] = useState(false);

    return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {/* {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}
      {!loggedIn && ( */}
      <>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={styles.inputBox}
        placeholder='email'
        keyboardType={'email-address'}
        clearButtonMode='always' />
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={onChangePassword}
        style={styles.inputBox}
        placeholder='password'
        keyboardType={'default'}
        clearButtonMode='always' />
      <Pressable
        onPress={() => navigation.navigate("Welcome")}
        // onPress={() => onLogin(!loggedIn)}
        style={styles.button}>
         <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
    </>
    {/* )} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
headerText: {
    padding: 40,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#495E57',
    textAlign: 'center',
},
regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#495E57',
    textAlign: 'center',
},
inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
},
button: {
  fontSize: 22,
  padding: 10,
  marginVertical: 8,
  margin: 100,
  backgroundColor: '#F4CE14',
  borderColor: '#F4CE14',
  borderWidth: 2,
  borderRadius: 50,
},
buttonText: {
  color: 'black',
  textAlign: 'center',
  fontSize: 25,
},
});