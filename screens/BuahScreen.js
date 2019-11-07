import React from 'react';
import { Text, View, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const BuahScreen = () => {
    return (
        <View>
            <Image 
                title="Pisang"
                ImageSource={require('../assets/pisang.jpg')}
            />
            <Image
                title="Mangga" 
                ImageSource={require('../assets/mangga.jpg')}
            />
        </View>
    );
};

export default BuahScreen;