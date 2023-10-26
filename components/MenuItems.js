import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, ScrollView } from 'react-native';

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
' Hummus \n Falafel \n Kafta \n Lentil Burger \n Lentil Soupe \n Pita Bread \n Potato Salad \n Baklava \n Ceasar Salad \n Rice \n Panna Cota'
];

const MenuItems = () => {
    return (
        <View style={menuStyles.container}>
            <ScrollView
            indicatorStyle={'white'}
            style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>View Menu</Text>
                <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75
    },
    innerContainer: {
        padding: 40,
        backgroundColor: green
    },
    headerText: {
        paddingBottom: 20,
        fontSize: 40,
        flexWrap: 'wrap',
        color: 'white'
    },
    itemText : {
        color: yellow,
        fontSize: 36
    }
});
