import React, { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Text, Modal, Platform, TouchableOpacity} from 'react-native';
import { gStyle } from '../styles/style';
import {Formik} from "./formik";
//import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign, Entypo} from '@expo/vector-icons';

// import { Button } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';
//import Icon from 'react-native-vector-icons/FontAwesome';

const gray = "#91A1BD";

export default function FormNumberCicle({ addArticleChemistry }) {

    // const Separator = () => <View style={styles.separator} />;
    // const [modalWindow, setModalWindow] = useState(false);
    // const NeuMorph = ({children, size, style}) => {
    //     return (
    //         <View style={styles.topShadow}>
    //             <View style={styles.bottomShadow}>
    //                 <View
    //                     style={[
    //                         styles.inner,
    //                         {width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2},
    //                         style
    //                     ]}
    //                 >
    //                     {children}
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }

    return (
        <View>
            <Formik
                initialValues={{name: '', phoneNumber: '', img: ''}}
                onSubmit={(values, action) =>{
                    addArticleChemistry(values);
                    action.resetForm();
                    console.log(values);
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            value={props.values.name}
                            multiline
                            placeholder='Количество циклов '
                            placeholderTextColor='#6C7A93'
                            textAlignVertical={'center'}
                            fontSize={11}

                            onChangeText={props.handleChange('name')}
                            onBlur={props.handleBlur('name')}
                            style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArt]}
                        />
                    </View>
                )}
            </Formik>
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginBottom: Platform.OS === "ios" ? -1 : 2,
        padding: Platform.OS === "ios" ? 11 : 10,
        paddingTop: Platform.OS === "ios" ? 11 : 10,
        color: '#6C7A93',
        backgroundColor: '#FBFFFF',
        borderRadius: Platform.OS === "ios" ? 12 : 10,
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
        // marginVertical: 1,
        // alignItems: "center",
        // top: '5%',
    },
    songArt: {
        // width: 200,
        height: 40,
        borderRadius: 11,
        borderColor: "#D7E1F3",
        borderWidth: 3,
        // padding: 5,
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
    separator: {
        marginVertical: 16,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})


