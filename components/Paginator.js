import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import {gStyle} from "../styles/style";


export default function Paginator({ data, scrollX }) {
    // const loadScene = () => {
    //     navigation.navigate('OnboardingItem')
    // }
    const { width } = useWindowDimensions();

    return (
        <>
            <View style={ gStyle.paginatorNumberCircle }>
                {data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 20],
                        extrapolate: 'clamp',
                    });

                    const opacity = scrollX.interpolate({
                       inputRange,
                       outputRange: [0.3, 1, 1],
                       extrapolate: 'clamp',
                    });

                    return <Animated.View
                        style={[
                            styles.dot,
                            {
                                width: dotWidth,
                                opacity,
                            },
                        ]}
                        key={i.toString()} />;
                })}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    dot: {
        height: 2,
        // borderRadius: 5,
        // backgroundColor: '#493d8a',
        backgroundColor: 'white',
        marginHorizontal: 3,
    }
})
