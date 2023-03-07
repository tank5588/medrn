import React, { useState, useRef } from "react";
import {View, StyleSheet, FlatList, Animated, SafeAreaView} from 'react-native';

import OnboardingItem from '../components/OnboardingItem';
import slides from "../slides";
import Paginator from './Paginator';

import { gStyle } from '../styles/style';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const Carousel = () => {
        return (
            <>
                <View style={styles.container}>
                    <View style={{ flex: 3 }}>
                        <FlatList
                            data={slides}
                            renderItem={ ({ item }) => <OnboardingItem item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        scrollEventThrottle={32}
                        // onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        // ref={slidesRef}
                        />
                    </View>
                    <Paginator data={slides} scrollX={scrollX} />
                </View>
            </>
        )
    }

    return (
        <SafeAreaView style={[gStyle.container]}>
            <Carousel/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


