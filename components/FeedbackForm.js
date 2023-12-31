import React from 'react';
import { Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert, Pressable } from 'react-native';

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    const [message, onChangeMessage] = React.useState('');


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView keyboardDismissMode='on-drag'>
            <Text style={styles.headingSection}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                We would love to hear your experience with us!
            </Text>
            <TextInput
                value={firstName}
                onChangeText={onChangeFirstName}
                style={styles.input}
                placeholder='first name'
                onFocus={() => Alert.alert("First name is focussed")}
                clearButtonMode='always' />
            <TextInput
                value={lastName}
                onChangeText={onChangeLastName}
                style={styles.input}
                placeholder='last name'
                clearButtonMode='always' />
            <TextInput
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                style={styles.input}
                placeholder='Phone Number'
                keyboardType='phone-pad' />
            <TextInput
                value={message}
                onChangeText={onChangeMessage}
                style={styles.messageInput}
                placeholder='Please leave feedback'
                multiline={false}
                maxLength={250}
                clearButtonMode='always' />
            <Pressable
                onPress={() => {Alert.alert('Thank you for your feedback!')}}
                style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#495E57'
    },

    input: {
       height: 40,
       margin: 12,
       borderWidth: 1,
       padding: 10,
       fontSize: 16,
       borderColor: 'EDEFEE',
       backgroundColor: 'white'
    },

    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
      },

    infoSection: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57'
    },

    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57'
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
