import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
' Hummus \n Falafel \n Kafta \n Lentil Burger \n Lentil Soupe \n Pita Bread \n Potato Salad \n Baklava \n Ceasar Salad \n Rice \n Panna Cota'
];

const MenuItems = () => {
    return (
        <View style={{ flex: 0.75 }}>
            <ScrollView
            indicatorStyle={'white'}
            style={{
                padding: 40,
                backgroundColor: green
            }}>
                <Text style={{ paddingBottom: 20, fontSize: 40, flexWrap: 'wrap', color: 'white' }}>View Menu</Text>
                <Text style={{ color: yellow }}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
};

export default MenuItems;
