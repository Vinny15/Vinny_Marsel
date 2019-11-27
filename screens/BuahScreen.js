import React from 'react';
import { Text, StyleSheet, FlatList, View, Image } from 'react-native';

const buah = [
    {name: 'Pisang', image: 'https://i0.wp.com/alatfitnessbali.com/wp-content/uploads/2017/10/gambar-buah-pisang-cavendish_www.buahaz.com_.jpg'},
    {name: 'Mangga', image: 'https://higaragro.com/wp-content/uploads/2019/03/Pusat-Distributor-Grosir-Eceran-Jual-Bibit-Tanaman-Buah-Mangga-Arumanis-Murah-online-di-kota-kabupaten.3.jpg'}
];

const BuahScreen = () => {
    return (
        <FlatList 
            data={buah}
            renderItem={({ item }) =>
                <View>
                    <Image 
                        source={{uri: item.image}}
                        style={{width: 300, height: 200, alignSelf: 'center'}} 
                    />
                    <Text style={{alignSelf: 'center'}}>
                        {item.name}
                    </Text>
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};

export default BuahScreen;