import React from 'react';
import { Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
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
            <TextInput value={firstName} onChangeText={onChangeFirstName} style={styles.input} placeholder='first name' />
            <TextInput value={lastName} onChangeText={onChangeLastName} style={styles.input} placeholder='last name' />
            <TextInput value={message} onChangeText={onChangeMessage} style={styles.messageInput} placeholder='enter your message' />
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
       backgroundColor: '#F4CE14'
    },

    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
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
    }
});
