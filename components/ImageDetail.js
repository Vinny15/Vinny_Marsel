import React from 'react';
import { View, Text, Image} from 'react-native';

const ImageDetail = ({imageSource, title,}) => {
    return(
        <View>
            <Image
                style={{width: 100, height: 100}} 
                source = {imageSource}
            />
            <Text>{title}</Text>
        </View>
    );
};

export default ImageDetail;