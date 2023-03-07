import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, Button, Platform, TouchableOpacity} from 'react-native';
import { gStyle } from '../styles/style';
import {AntDesign} from "@expo/vector-icons";

const gray = "#91A1BD";

export default function Main({ navigation }) {
        const loadScene = () => {
            navigation.navigate('Contacts')
        }

        const NeuMorph = ({children, size, style}) => {
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View
                        style={[
                            styles.inner,
                            {width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2},
                            style
                        ]}
                    >
                        {children}
                    </View>
                </View>
            </View>
            )
        }

        const Hello = () => {
            return (
                <View style={gStyle.boxContainerMain}>

                    <View style={gStyle.boxMain}>
                        <View style={gStyle.innerMain}>
                            <Image style={[styles.tinyLogo, {backgroundColor: '#E4EBF5'}]} source={require('../assets/tinyLogo.png')}/>
                            <Text style={[styles.box, gStyle.titleOnco, ]}>OncoAssist</Text>
                            <Text style={[styles.box, gStyle.h2, ]}>приветствует вас</Text>
                            <Text style={[styles.box, gStyle.h3, ]}>приложение для пациентов</Text>
                            <Text style={[styles.box, gStyle.h4, ]}>получающих противоопухолевую терапию</Text>
                            <View style={[styles.boxFinger, ]}>
                                <Text style={[styles.boxFingerTextLeft, gStyle.h5, ]}>приложите палец</Text>
                                <TouchableOpacity
                                    onPress={loadScene}
                                    style={styles.verticalAlign}
                                >
                                    <NeuMorph size={80}>
                                        {/*<AntDesign name="rightcircle" size={50} color={gray}  />*/}
                                        <Image style={styles.imgFinger} source={require('../assets/finger.png')}/>
                                    </NeuMorph>
                                </TouchableOpacity>
                                {/*<Button*/}
                                {/*    style={{ fontSize: 10, color: 'white' }}*/}
                                {/*    title="Finger"*/}
                                {/*    color="#A88EC1"*/}
                                {/*    containerStyle={{  borderRadius: '50%', background: '#e0e0e0' }}*/}
                                {/*    disabledContainerStyle={{backgroundColor: 'grey'}}*/}
                                {/*    onPress={loadScene}*/}
                                {/*/>*/}
                                <Text style={[styles.boxFingerTextRight, gStyle.h5, ]}>дальше мы сами</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }

        return (
        <SafeAreaView style={[gStyle.container]}>
                <Hello/>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 70,
        textAlign: 'center'
    },
    tinyLogo: {
        width: Platform.OS === "ios" ? '68%' : '71%',
        height: Platform.OS === "ios" ? '41%' : '39%',
        top: '5%',
        left: Platform.OS === "ios" ? '15%' : '15%',
    },
    imgFinger: {
        width: Platform.OS === "ios" ? '65%' : '65%',
        height: Platform.OS === "ios" ? '88%' : '88%',
    },
    boxFinger: {
        // flex: Platform.OS === "ios" ? .02 : 0.5,
        // flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        //
        //заблокировал для перехода на flex
        // width: Platform.OS === "ios" ? '100%' : '100%',
        // height: Platform.OS === "ios" ? '17%' : '17%',
        // top: Platform.OS === "ios" ? '-8%' : '-5%',
        // left: Platform.OS === "ios" ? '-1.5%' : '2%',
    },
    verticalAlign: {
        marginVertical: Platform.OS === "ios" ? '-20%' : '3%',
    },
    boxFingerTextLeft: {
        width: Platform.OS === "ios" ? 110 : 130,
        height: Platform.OS === "ios" ? 47 : 98,
        top: Platform.OS === "ios" ? -35 : 40,
        left: Platform.OS === "ios" ? -12 : -15,
        textAlign: 'center',
        flexWrap: "wrap",
    },
    boxFingerTextRight: {
        width: Platform.OS === "ios" ? 100 : 140,
        height: Platform.OS === "ios" ? 47 : 98,
        top: Platform.OS === "ios" ? -35 : 40,
        left: 10,
        textAlign: 'center',
        flexWrap: "wrap",
    },
    boxFingerImageButton: {
        // width: Platform.OS === "ios" ? 45 : 90,
        // height: Platform.OS === "ios" ? '45%' : '70%',
        // top: Platform.OS === "ios" ? '-45%' : 50,

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    inner: {
        backgroundColor: "#DEE9F7",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#E2ECFD",
        borderWidth: 1
    },
    topShadow: {
        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF"
    },
    bottomShadow: {
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#B7C4DD"
        // shadowColor: "#ZB7C4DD"
    },

});
