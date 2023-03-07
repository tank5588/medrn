import { AntDesign } from '@expo/vector-icons';
import React from "react";
import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import { height, SPACING, width } from '../config/theme';
import detailsIcons from './salon';

import { ITEM_HEIGHT } from "./SalonList";
const TOP_HEADER_HEIGHT = height * 0.3;

const SalonListDetails = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <AntDesign
                name="arroeleft"
                size={28}
                style={{
                    padding: 12,
                    position: 'absolute',
                    top: SPACING * 2,
                    lfet: SPACING,
                    zIndex: 2,
                }}
                color={'#333'}
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 0, height: TOP_HEADER_HEIGHT + 32, }]}/>
            <Text style={styles.name}>{item.name}</Text>
            {/*<Text style={styles.jobTitle}>{item.jobTitle}</Text>*/}
            <Image source={{uri: item.image}} style={styles.image}/>
            <View style={styles.bg}>
                <ScrollView style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    {detailsIcons.map((detail, index) => {
                        return (
                            <View key={`${detail.icon}-${index}`} style={{backgroundColor: detail.color, height: 42, width: 42, borderRadius: 32, alignItems: 'center', justifyContent: 'center' }}>
                                <AntDesign name={detail.icon} size={22} color={'white'} />
                            </View>
                        )
                    })}
                    <View>
                        {item.categories.map(category => {
                            return <View key={category.key}>
                                <Text style={styles.title}>{category.title}</Text>
                                {category.subcats.map((subcat, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{height: 6, width: 6, borderRadius: 3, backgroundColor: 'gold'}} />
                                            <Text>{subcat}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 20,
        position: 'absolute',
        // регулируем высоту карточки
        top: TOP_HEADER_HEIGHT - SPACING * 3,
        left: SPACING,
    },
    image: {
        width: ITEM_HEIGHT * .8,
        height: ITEM_HEIGHT * .8,
        resizeMode: 'contain',
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8,
        right: SPACING,
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'white',
        transform: [{ translateY: TOP_HEADER_HEIGHT }],
        borderRadius: 32,
        padding: SPACING,
        paddingTop: 32 + SPACING,
    },
});

export default SalonListDetails;