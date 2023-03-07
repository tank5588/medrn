import * as React from 'react';
import {Image, Alert, Platform, StyleSheet, View, Button, TextInput, SafeAreaView, Text, Modal, Slider} from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = "#91A1BD";

export default function Neom({ navigation }) { //  { navigation }
    const loadScene = () => {
        navigation.navigate('Slider')
    }
    // const [number1, onChangeNumber1] = React.useState('');
    // const [modalWindow, setModalWindow] = useState(false);

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

    return(
        <>
            <View style={styles.container}>
                <SafeAreaView style={{ alignSelf: "stretch" }}>
                    <View style={{ marginHorizontal: 32, marginTop: 32 }}>
                        <View style={styles.topContainer}>
                            <NeuMorph size={48}>
                                <AntDesign name="arrowleft" size={20} color={gray} />
                            </NeuMorph>
                            <View>
                                <Text style={styles.playing}>PLAYING NOW</Text>
                            </View>
                            <NeuMorph size={48}>
                                <Entypo name="menu" size={24} color={gray} />
                            </NeuMorph>
                        </View>
                        <View style={styles.songArtContainer}>
                            <NeuMorph size={200}>
                                <Image
                                    source={require("../assets/pic2.jpg")}
                                    style={styles.songArt}
                                />
                            </NeuMorph>
                        </View>

                        <View style={styles.songContainer}>
                            <Text style={styles.title}>Lost it</Text>
                            <Text style={styles.artist}>Song</Text>
                        </View>

                        <View style={styles.trackContainer}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={styles.time}>1:21</Text>
                                <Text style={styles.time}>3:46</Text>
                            </View>

                            <Slider
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#8AAAFF"
                                maximumTrackTintColor="#DAE6F4"
                                thumbTintColor="#7B9BFF"
                            />
                        </View>

                        <View style={styles.controlsContainer}>
                            <NeuMorph size={80}>
                                <Ionicons name="ios-rewind" size={24} color={gray} />
                            </NeuMorph>

                            <NeuMorph size={80} style={{ backgroundColor: "#8AAAFF" }}>
                                <Ionicons name="ios-pause" size={24} color={gray} />
                            </NeuMorph>

                            {/*<NeuMorph size={80}>*/}
                            {/*    <Ionicons name="ios-fastforward" size={24} color={gray} />*/}
                            {/*</NeuMorph>*/}
                            <Button
                                style={styles.buttonNext}
                                title="Далее"
                                color="#f194ff"
                                onPress={loadScene}
                            />
                        </View>

                    </View>
                </SafeAreaView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DEE9FD",
        alignItems: "center"
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        shadowColor: "#ZB7C4DD"
    },
    playing: {
        color: gray,
        fontWeight: "800"
    },
    songArtContainer: {
        marginVertical: 16,
        alignItems: "center",
    },
    songArt: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: "#D7E1F3",
        borderWidth: 10
    },
    songContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        color: "#6C7A93",
        fontWeight: "600",
    },
    artist: {
        fontSize: 14,
        marginTop: 6,
        color: gray,
        fontWeight: "500",
    },
    trackContainer: {
        marginTop: 32,
        marginBottom: 24,
    },
    time: {
        fontSize: 10,
        color: gray,
        fontWeight: "700",
    },
    controlsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})








