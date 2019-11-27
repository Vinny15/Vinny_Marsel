import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';

const MenuUtama = ({ navigation }) => {
    return (
        <ImageBackground 
            source={{uri: 'http://hintergrundbild.org/wallpaper/full/1/4/e/52984-einfarbige-hintergrundbilder-2048x2048-fuer-ipad-2.jpg'}}
            style={{width: 400, height: 800}}
        >
            <View style={styles.listContainer}>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#00BFFF'}]} onPress={() => navigation.navigate('Home')} >
                    <Image style={styles.cardImage} source={{uri:"https://americanmdcenter.com/wp-content/uploads/2019/06/fruits-and-vegetables.png"}}/>
                </TouchableOpacity>
                <Text>Menu Buah dan Sayur</Text>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#87CEEB'}]} onPress={() => navigation.navigate('About')} >
                <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/000000/name.png"}}/>
                </TouchableOpacity>
                <Text>Ebout</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    listContainer:{
      alignItems:'center'
    },
    card:{
      shadowColor: '#474747',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
      marginVertical: 20,
      marginHorizontal: 40,
      backgroundColor:"#e2e2e2",
      //flexBasis: '42%',
      width:120,
      height:120,
      borderRadius:60,
      alignItems:'center',
      justifyContent:'center'
    },
    cardImage:{
      height: 70,
      width: 70,
      alignSelf:'center'
    }
  });

export default MenuUtama;