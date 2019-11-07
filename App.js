import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenBuah from './screens/HomeScreenBuah';
import BuahScreen from './screens/BuahScreen';
import SayurScreen from './screens/SayurScreen';

const navigator = createStackNavigator({
  Buah: BuahScreen,
  Sayur: SayurScreen,
  Home: HomeScreenBuah
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'TaniBisnisShop',
    headerStyle: {
      backgroundColor: 'green'
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
