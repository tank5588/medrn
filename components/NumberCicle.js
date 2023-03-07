import * as React from 'react';
import {useRef, useState} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Modal,
    TouchableOpacity,
    Animated,
    FlatList
} from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import {gStyle} from "../styles/style";
import FormNumberCircle from './FormNumberCicle';
import slides from "../slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

const gray = "#91A1BD";

export default function NumberCicle({ navigation }) { //  { navigation }
    const loadScene = () => {
        navigation.navigate('Karta')
    }
    const loadSceneBack = () => {
        navigation.navigate('BaseDate')
    }
    const [number1, onChangeNumber1] = React.useState('');
    const [modalWindow, setModalWindow] = useState(false);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const Separator = () => <View style={gStyle.separator} />;
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
            <>
                <View style={[gStyle.container]}>
                    <View style={gStyle.box111}>
                        <View style={gStyle.boxContainer1}>
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
                            viewabilityConfig={viewConfig}
                        />
                        <Paginator data={slides} scrollX={scrollX} style={gStyle.paginatorNumberCircle} />
                        </View>

                        <View style={gStyle.boxContainer2}>
                            <Text style={styles.baseTextLine}> Сколько планируется циклов системной терапии?</Text>
                            <FormNumberCircle/>
                            <Text style={styles.baseTextLine}> * Введите необходимое количество циклов системной
                            терапии</Text>
                            <Text style={styles.baseTextLine}> (2,4,6,8,12, не знаю)</Text>
                        </View>
                    </View>

                    <View style={gStyle.box222}>


                        {/*<View style={styles.mainBlockButtonGroup}>*/}

                        {/*    <Modal style={styles.buttonNext} visible={modalWindow}>*/}
                        {/*        <View style={gStyle.main}>*/}
                        {/*            <AntDesign name="close" size={24} color="black" style={styles.buttonNext}*/}
                        {/*                       onPress={() => setModalWindow(false)}/>*/}
                        {/*            <Text style={gStyle.title}>Инструкция по заполнению</Text>*/}
                        {/*        </View>*/}
                        {/*    </Modal>*/}
                        {/*    <AntDesign name="questioncircleo" size={36} color="black" style={styles.buttonNext}*/}
                        {/*               onPress={() => setModalWindow(true)}/>*/}

                        {/*    <Button*/}
                        {/*        style={styles.buttonNext}*/}
                        {/*        title="Далее"*/}
                        {/*        color="#f194ff"*/}
                        {/*        onPress={loadScene}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        <Separator />

                        <View style={styles.fixToText}>
                            <TouchableOpacity
                                onPress={loadSceneBack}
                            >
                                <NeuMorph size={40}>
                                    <AntDesign name="leftcircle" size={25} color={gray}  />
                                </NeuMorph>
                            </TouchableOpacity>

                            <Modal style={styles.buttonNext} visible={modalWindow}>
                                <View style={gStyle.main} >
                                    <AntDesign
                                        name="close"
                                        size={24}
                                        color="black"
                                        style={styles.buttonNext}
                                        onPress={() => setModalWindow(false)} />
                                    <Text style={gStyle.title}>Инструкция по заполнению</Text>
                                </View>
                            </Modal>
                            <TouchableOpacity
                                onPress={() => setModalWindow(true)}
                            >
                                <NeuMorph size={40}>
                                    <AntDesign name="questioncircleo" size={25} color={gray} />
                                </NeuMorph>
                            </TouchableOpacity>
                            {/*<AntDesign name="questioncircleo" size={36} color="black" style={styles.buttonQuest} onPress={() => setModalWindow(true)} />*/}
                            <TouchableOpacity
                                onPress={loadScene}
                            >
                                <NeuMorph size={40}>
                                    <AntDesign name="rightcircle" size={25} color={gray}  />
                                </NeuMorph>
                            </TouchableOpacity>
                            {/*<Button*/}
                            {/*    style={styles.buttonNext}*/}
                            {/*    title="Далее"*/}
                            {/*    color="#f194ff"*/}
                            {/*    onPress={loadScene}*/}
                            {/*/>*/}
                        </View>
                    </View>
                </View>
            </>
        )
    

    // return (
    //     <SafeAreaView style={[gStyle.container]}>
    //         <NumberCicle />
    //     </SafeAreaView>
    // );
}


const styles = StyleSheet.create({
    full: {
        fontFamily: 'zapfino-extra-lt-pro',
        fontSize: 50,
        textAlign: 'center'
    },
    header: {
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: '80%',
        margin: 18,
        marginBottom: Platform.OS === "ios" ? 1 : 20,
        borderWidth: 1,
        padding: 10,
        color: '#6E5573',
        borderColor: '#6E5573'
    },
    colorPlaceholder : {
        color: '#6E5573',
    },
    paragraph: {
        fontSize: Platform.OS === "ios" ? 15 : 18,
        top: Platform.OS === "ios" ? 5 : 3,
        left: Platform.OS === "ios" ? 10 : 12,
    },
    separator: {
        marginVertical: 16,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    // fixToText: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    // },
    fixToText: {
        // flex: Platform.OS === "ios" ? 0.2 : 0.09,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
    tinyLogo: {
        width: Platform.OS === "ios" ? '65%' : '65%',
        height: Platform.OS === "ios" ? '44%' : '38%',
        top: '5%'
    },
    // baseTextLine: {
    //     color: '#B78DBE',
    //     fontSize: Platform.OS === "ios" ? 15 : 18,
    //     fontWeight: Platform.OS === "ios" ? "400" : "600",
    //     top: '20%',
    //     // marginLeft: Platform.OS === "ios" ? 2 : 5,
    //     flex: 1,
    //     justifyContent: 'space-evenly',
    //     flexDirection: 'row',
    //     flexWrap: "wrap",
    //     alignItems: 'center',
    //     // textAlignVertical: 'bottom',
    //
    // },
    baseTextLine: {
        color: '#B78DBE',
        // color: '#6C7A93',
        // color: 'gray',
        // color: 'white',
        width: Platform.OS === "ios" ? '100%' : '90%',
        fontSize: Platform.OS === "ios" ? 11 : 12,
        fontWeight: '600',
        top: Platform.OS === "ios" ? 7 : 5,
        left: Platform.OS === "ios" ? 14 : 12,
        // bottom: Platform.OS === "ios" ? 14 : 12,

    },
    mainBlockNumberCicle: {
        flex: .4,
        flexGrow: .4,
        flexBasis: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    mainBlockButtonGroup: {
        flex: 1,
        flexGrow: .22,
        flexBasis: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    buttonQuestion: {
        // marginTop: Platform.OS === "ios" ? '10%' : '40%',
        // top: 40,
        // justifyContent: 'flex-start',
    },
    buttonNext: {
        width: 100,
        // top: '50%',
        // justifyContent: 'flex-end',
        // right: 50,
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
})


