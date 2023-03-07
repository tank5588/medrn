import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Modal, Platform, TouchableOpacity } from 'react-native';
import {Formik} from "./formik";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = "#91A1BD";

export default function FormKontrolnoe({ addArticleKontrolnoe }) {

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

    return (
        <View>
            <Formik
                initialValues={{name: '', phoneNumber: '', img: ''}}
                onSubmit={(values, action) =>{
                    addArticleKontrolnoe(values);
                    action.resetForm();
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            value={props.values.phoneNumber}
                            multiline
                            placeholder=''
                            onChangeText={props.handleChange('phoneNumber')}
                            onBlur={props.handleBlur('phoneNumber')}
                            style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}
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
        marginBottom: Platform.OS === "ios" ? 1 : 2,
        padding: Platform.OS === "ios" ? 11 : 10,
        paddingTop: Platform.OS === "ios" ? 11 : 10,
        color: '#6C7A93',
        backgroundColor: '#FBFFFF',
        borderRadius: Platform.OS === "ios" ? 12 : 10,
    },
    placeholderFormColor : {
        color: '#6E5573',
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
        height: 40,
        borderRadius: 11,
        borderColor: "#D7E1F3",
        borderWidth: 3
    },
})


