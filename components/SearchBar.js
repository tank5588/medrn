// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
// import  {useState, useEffect} from 'react';
// import List from './List';
// import KartaPreparatov from "./KartaPreparatov";

export default function SearchBar({clicked, setClicked, searchPhrase, setSearchPhrase})  {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color= "#8579A3"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Поиск"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => setClicked(true)}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color="#8579A3" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }}/>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View style={styles.top}>
                    <Button
                        title="Отмена"
                        color= '#8579A3'

                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};
// export default SearchBar;

// styles
const styles = StyleSheet.create({
    top: {
        top: 10,
    },
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },
    searchBar__unclicked: {
        padding: 5,
        flexDirection: "row",
        width: "99%",
        // backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",

        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 16,
        shadowColor: "#FBFFFF",

        borderBottomWidth: .5,
        borderBottomColor: '#B7C4DD',
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,

    },
    searchBar__clicked: {
        top: 10,

        padding: 10,
        flexDirection: "row",
        width: "75%",
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",

        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#B7C4DD"
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "70%",
        color: '#8579A3',
    },
});