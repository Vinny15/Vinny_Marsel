import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenBuah from './screens/HomeScreenBuah';
import BuahScreen from './screens/BuahScreen';
import SayurScreen from './screens/SayurScreen';
import MenuUtama from './screens/MenuUtama';
import Profile from './screens/Profile';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';

const navigator = createStackNavigator({
  Buah: BuahScreen,
  Sayur: SayurScreen,
  Home: HomeScreenBuah,
  Menu: MenuUtama,
  Profile: Profile,
  About: AboutScreen,
  Login: LoginScreen
},{
  initialRouteName: 'Login',
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
