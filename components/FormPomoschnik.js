import React, { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Text, Modal, Platform, TouchableOpacity} from 'react-native';
import { gStyle } from '../styles/style';
import {Formik} from "./formik";
import {AntDesign, Entypo} from '@expo/vector-icons';

const gray = "#91A1BD";

export default function FormPomoschnik({ addArticle }) {

    const Separator = () => <View style={styles.separator} />;
    const [modalWindow, setModalWindow] = useState(false);
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
    const bool = true;

    return (
        <View>
            <Formik
                initialValues={{name: '', phoneNumber: '', img: ''}}
                onSubmit={(values, action) =>{
                    addArticle(values);
                    action.resetForm();
                    console.log(values);
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            value={props.values.name}
                            multiline
                            placeholder='Введите имя'
                            placeholderTextColor='#6C7A93'
                            textAlign='center'
                            onChangeText={props.handleChange('name')}
                            onBlur={props.handleBlur('name')}
                            autoCapitalize='words'
                            autoCompleteType='off'
                            enablesReturnKeyAutomatically={bool}
                            style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}
                        />
                        <View style={styles.rowElement}>

                            <TouchableOpacity onPress={props.handleSubmit}>
                                <NeuMorph size={40}>
                                    <AntDesign name="plus" size={25} color={gray} />
                                </NeuMorph>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={props.resetForm}>
                                <NeuMorph size={40}>
                                    <AntDesign name="delete" size={25} color={gray} />
                                </NeuMorph>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    rowElement: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: 'space-around',
        // paddingHorizontal: Platform.OS === "ios" ? 85 : -5,
        // right: Platform.OS === "ios" ? 78 : 30,
        // right: Platform.OS === "ios" ? '35%' : 30,
        // width: 480,
    },
    input: {
        height: 40,
        margin: 12,
        marginBottom: Platform.OS === "ios" ? 1 : 2,
        // borderWidth: 1,
        padding: Platform.OS === "ios" ? 11 : 10,
        paddingTop: Platform.OS === "ios" ? 11 : 10,
        // color: '#DEE9F7',
        color: '#6C7A93',
        backgroundColor: '#FBFFFF',
        // borderColor: '#6E5573',
        borderRadius: Platform.OS === "ios" ? 12 : 10,
        // borderBottomWidth: 1,
    },
    placeholderFormColor : {
        color: '#6E5573',
    },
    // цвет фона кнопки
    buttonAddBackgroundcolor: {
        backgroundColor: "#ff0000",
    },
    // цвет текста кнопки
    buttonAddTextProperty: {
        color: "white",
        fontSize: Platform.OS === "ios" ? 12 : 12,
    },
    textButtonNeomoph: {
        color: gray,
        fontWeight: "800"
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
    },
    songArtContainer: {
        marginVertical: 12,
        alignItems: "center",
    },
    songArt: {
        // width: 200,
        height: 40,
        borderRadius: 11,
        borderColor: "#D7E1F3",
        borderWidth: 3
    },
    buttonStyle: {
        // fontSize: Platform.OS === "ios" ? 18 : '10%',
        // textDecorationColor: '#ff0000',
        // textShadowColor: '#ff0000',
        color: '#ff0000',
    },
    whatNext: {
        // flex: .1,
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        width: '80%',
        // height: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        top: Platform.OS === "ios" ? 30 : 30, // явное указание из-за разницы между шрифтами
        left: Platform.OS === "ios" ? '15%' : '10%',
        textAlign: 'center',
    },
})


