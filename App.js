import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenBuah from './screens/HomeScreenBuah';
import BuahScreen from './screens/BuahScreen';
import SayurScreen from './screens/SayurScreen';
import MenuUtama from './screens/MenuUtama';
import AboutScreen from './screens/AboutScreen';

const navigator = createStackNavigator({
  Buah: BuahScreen,
  Sayur: SayurScreen,
  Home: HomeScreenBuah,
  Menu: MenuUtama,
  About: AboutScreen
},{
  initialRouteName: 'Menu',
  defaultNavigationOptions: {
    headerTitle: 'TaniBisnisShop',
    headerStyle: {
      backgroundColor: '#4682B4'
    }
  } 
});

export default createAppContainer(navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
