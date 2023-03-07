import React from "react";
import {View, Text, StyleSheet, Image, useWindowDimensions, Button, Platform} from 'react-native';


export default function OnboardingItem({ item }) {
    const { width } = useWindowDimensions();
    return (
        <>
            <View style={[styles.container, { width }]}>
                <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // top: Platform.OS === "ios" ? '45%': '45%',
        // height: Platform.OS === "ios" ? '120%': '98%',
        left: Platform.OS === "ios" ? '0%': '0%',
    },
    // image: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     left: -7,
    // },
    title: {
        fontWeight: '800',
        fontSize: 28,
        top: 35,
        left: -20,
        marginBottom: -1,
        color: '#493d8a',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
        top: 35,
        left: -20,
    }
})
