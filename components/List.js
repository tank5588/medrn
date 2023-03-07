// List.js
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
} from "react-native";


const Item = ({ name, details }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
    </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
            return <Item name={item.name} details={item.details} />;
        }
        // filter of the name
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details} />;
        }
        // filter of the description
        if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details} />;
        }
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View onStartShouldSetResponder={() => { setClicked(false); }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    refreshing={true}
                    style={styles.view__container}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    view__container: {
        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF",

        color: 'white',
    },

    list__container: {
        margin: 5,
        height: "110%",
        width: "90%",
        borderWidth: .5,
        borderColor: '#ffffff',


        shadowColor: "#000fff",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
        color: '#8579A3',
    },
    details: {
        color: '#8579A3',
    }
});