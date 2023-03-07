import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import salon from '../config/data/salon';
import { height, SPACING, width } from '../config/theme';

export const ITEM_HEIGHT = height * 0.18;

export default function SalonList({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={salon}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ padding: SPACING }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('SalonListDetails', { item } ) }} style={{marginBottom: SPACING, height: ITEM_HEIGHT }} >
                            <View style={{flex: 1, padding: SPACING}}>
                                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]}/>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                                <Image source={{uri: item.image}} style={styles.image}/>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});