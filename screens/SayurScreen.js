import React from 'react';
import { Text, StyleSheet, FlatList, View, Image } from 'react-native';

const sayuran = [
    {name: 'Kangkung', image: 'https://i0.wp.com/alatfitnessbali.com/wp-content/uploads/2017/10/gambar-sayuran-pisang-cavendish_www.sayuranaz.com_.jpg'},
    {name: 'Brokoli', image: 'https://higaragro.com/wp-content/uploads/2019/03/Pusat-Distributor-Grosir-Eceran-Jual-Bibit-Tanaman-sayuran-Mangga-Arumanis-Murah-online-di-kota-kabupaten.3.jpg'}
];

const SayurScreen = () => {
    return (
        <FlatList 
            data={sayuran}
            renderItem={({ item }) =>
                <View>
                    <Text>
                        {item.name}
                    </Text>
                    <Image 
                        source={{uri: item.image}}
                        style={{width: 100, height: 100}} 
                    />
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textstyle: {
        marginVertical: 80
    }
});

export default SayurScreen;