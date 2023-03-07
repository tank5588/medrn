import {Image, StyleSheet, Text, View, Pressable, Platform, useWindowDimensions, TouchableOpacity,} from "react-native";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import {gStyle} from "../styles/style";
import React, {useState, useRef, useEffect } from 'react';

export default function Pin ({ item })  {
    const { width } = useWindowDimensions();
    const [ratio, setRatio] = useState(1);
    const onLike = () => {};

    return (
            <View style={[styles.container, { width }]}>
                <Image source={item.image} style={[styles.image, { aspectRatio: ratio } ]} />
                    <TouchableOpacity onPress={onLike} style={styles.heartBtn}>
                        <AntDesign name="hearto" size={16} color="black"/>
                    </TouchableOpacity>
                    <Text style={[ styles.followStyle ]}>
                        №:
                        { ' ' + item.id }
                        { ' ' + item.description}
                    </Text>
            </View>
    );
}




const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 5,
        // marginLeft: 2,
        left: '-57%',
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        padding: 4,
    },
    image: {
        backgroundColor: '#E4EBF5',
        // width:  Platform.OS === "ios" ? '40%': '40%',
        width:  Platform.OS === "ios" ? '100%': '100%',
        height: 140,
        borderRadius: 25,
        // aspectRatio: 1,
    },
    heartBtn: {
        backgroundColor: '#E4EBF5',
        position: 'absolute',
        borderRadius: 50,
        bottom: 14,
        padding: 5,

        // left: 60,
    },
    followStyle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'white',
        // position: 'absolute',
        bottom: 40,
        padding: 3,
        left: '1%',
        justifyContent: 'center',
        alignItems: 'center',

        // margin: 10,
    },
});













{/*<Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />*/}

// export default Pin;

{/*<Image source={{ uri: image, }} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}

{/*<Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Image</Text>*/}

// console.log(props);
// const image = props.image;
// const title = props.title;
// const { image, title } = props;
// {children};

import pin from '../pins';

// Image.getSize(imageProp, (width, height) => setRatio(width / height));
// useEffect(() => {
//     if (image) {
//         Image.getSize(image, (width, height) => setRatio(width / height));
//     }
// }, [image]);