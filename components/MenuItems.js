import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, SectionList, Pressable } from 'react-native';

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  {
    title: 'appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'main dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Separator = () => <View style={menuStyles.separator}></View>

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = ({navigation}) => {

  const [showMenu, setshowMenu] = useState(false);

  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

    return (
        <View style={menuStyles.container}>
        {!showMenu && (
        <Text style={menuStyles.infoSection}>
          View our menu to explore our cuisine and daily specials.
        </Text>
        )}
        <Pressable
        style={menuStyles.button}
        onPress={() => {
          setshowMenu(!showMenu);
        }}>
          <Text style={menuStyles.buttonText}>{showMenu ? 'Home' : 'View menu'}</Text>
        </Pressable>
      {showMenu && (
        <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        />
      )}
      <Pressable onPress={() => navigation.goBack() }>
        <Text style={menuStyles.buttonText}>Go back</Text>
      </Pressable>
      </View>
    )
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
      flex: 1,
      },
      innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      itemText: {
        color: '#495E57',
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#F4CE14',
      },
      sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 12
      },
      buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
      },
      infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
      },
      separator: {
        borderBottomWidth: 5,
        borderColor: '#495E57',
      }
});
