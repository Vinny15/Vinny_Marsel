import React from 'react';
import { Text, StyleSheet, FlatList, View, Image } from 'react-native';

const sayuran = [
    {name: 'Kangkung', image: 'http://ibudanmama.com/wp-content/uploads/2015/02/4-Manfaat-Kangkung-Bagi-Kesehatan-Anak.jpg'},
    {name: 'Brokoli', image: 'http://4.bp.blogspot.com/-1lzBLd5B28o/VEPKr5KP3-I/AAAAAAAABEo/OD3s9j8XXVE/s1600/brokoli-super-food.jpg'}
];

const SayurScreen = () => {
    return (
        <FlatList 
            data={sayuran}
            renderItem={({ item }) =>
                <View>
                    <Text style={{alignSelf: 'center'}}>
                        {item.name}
                    </Text>
                    <Image 
                        source={{uri: item.image}}
                        style={{width: 300, height: 200, alignSelf: 'center'}} 
                    />
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};


export default SayurScreen;