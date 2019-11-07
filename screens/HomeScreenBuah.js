import React from 'react';
import { Text, Button, View } from 'react-native';

const HomeScreenBuah = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Buah-buahan"
                onPress={() => navigation.navigate('Buah')}
            />
            <Button
                title="Sayur-sayuran"
                onPress={() => navigation.navigate('Sayur')}
            />
        </View>
    );
};

export default HomeScreenBuah;