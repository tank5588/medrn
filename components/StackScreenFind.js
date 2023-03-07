import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    View,
    Button,
    TextInput,
    SafeAreaView,
    Image,
    Modal,
    Text,
    TouchableOpacity,
    Animated,
    Keyboard,
    SectionList,
    ScrollView,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {gStyle} from "../styles/style";
import {Formik} from "./formik";
import { AntDesign, Entypo, Ionicons, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import FormBaseDate from "./FormBaseDate";
import {Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {ArrowBackIcon, ArrowForwardIcon} from "native-base";
import {useNavigation} from "@react-navigation/native";
import { FlashList } from '@shopify/flash-list';
import DATA from "../data";


const gray = "#91A1BD";



export default function StackScreenFind({ navigation }) { //  { navigation }

    const loadSceneBack = () => {
        navigation.navigate('Kontrolnoe')
    }
    const loadSceneMainMenu = () => {
        navigation.navigate('MainMenu')
    }
    const loadSceneNews = () => {
        navigation.navigate('News')
    }
    const loadSceneKalendar = () => {
        navigation.navigate('Kalendar')
    }
    const loadScenePobocka = () => {
        navigation.navigate('Pobocka')
    }
    const loadSceneKartaPreparatov = () => {
        navigation.navigate('KartaPreparatov')
    }
    const loadScenePomoschnik = () => {
        navigation.navigate('Pomoschnik')
    }
    const loadSceneMain = () => {
        navigation.navigate('Main')
    }
    const loadSceneThemess = () => {
        navigation.navigate('Themess')
    }
    const loadSceneShemaTerapii = () => {
        navigation.navigate('ShemaTerapii')
    }
    const stackScreen = () => {
        navigation.navigate('StackScreenFind')
    }

    const [modalWindow, setModalWindow] = useState(false);
    const Separator = () => <View style={styles.separatorMainMenu} />;
    const SeparatorBottom = () => <View style={styles.separatorCalendarMainMenu} />;
    const SeparatorProfile = () => <View style={styles.separatorMainMenuProfile} />;
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

    // const newTaskData = [{
    //     title: "New Tasks",
    //     data: [
    //         {
    //             id: "1",
    //             task: "Buy groceries"
    //         },
    //         {
    //             id: "2",
    //             task: "Feed Cat"
    //         },
    //         {
    //             id: "3",
    //             task: "Sleep for 3 hours"
    //         },
    //         {
    //             id: "4",
    //             task: "Water Plants"
    //         },
    //         {
    //             id: "5",
    //             task: "Drink Water"
    //         },
    //     ]
    // }];
    // const completedTaskData = [{
    //     title: "Completed Tasks",
    //     data: [
    //         {
    //             id: "6",
    //             task: "Make a section list tutorial"
    //         },
    //         {
    //             id: "7",
    //             task: "Share this tutorial"
    //         },
    //         {
    //             id: "8",
    //             task: "Ask doubt in the Comments"
    //         },
    //         {
    //             id: "9",
    //             task: "Subscribe to logrocket"
    //         },
    //         {
    //             id: "10",
    //             task: "Read next Article"
    //         },
    //         {
    //             id: "11",
    //             task: "Read next Article 2"
    //         },
    //         {
    //             id: "12",
    //             task: "Read next Article 3"
    //         },
    //         {
    //             id: "13",
    //             task: "Read next Article 4"
    //         },
    //         {
    //             id: "14",
    //             task: "Read next Article 5"
    //         },
    //         {
    //             id: "15",
    //             task: "Read next Article 6"
    //         },
    //         {
    //             id: "16",
    //             task: "Read next Article 7"
    //         },
    //         {
    //             id: "17",
    //             task: "Read next Article 8"
    //         },
    //         {
    //             id: "18",
    //             task: "Read next Article 9"
    //         },
    //         {
    //             id: "19",
    //             task: "Read next Article 10"
    //         },
    //     ]
    // }];
    // const DATA = [
    //     {
    //         title: "First Item",
    //     },
    //     {
    //         title: "Second Item",
    //     },
    // ];

    // const MyList = () => {
    //     return (
    //         <FlashList
    //             data={DATA}
    //             renderItem={({ item }) => <Text>{item.title}</Text>}
    //             estimatedItemSize={200}
    //         />
    //     );
    // };

    return(
        <SafeAreaView style={gStyle.container}>
            <View style={gStyle.box11}>
                <View style={styles.container_main_menu}>
                    {/*<TouchableOpacity*/}
                    {/*    onPress={stackScreen}*/}
                    {/*    style={{*/}
                    {/*        backgroundColor: "purple",*/}
                    {/*        padding: 10,*/}
                    {/*        marginTop: "1%",*/}
                    {/*        width: "20%",*/}
                    {/*        alignSelf: "center",*/}
                    {/*        borderRadius: 10,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Text*/}
                    {/*        style={{*/}
                    {/*            fontSize: 15,*/}
                    {/*            textAlign: "center",*/}
                    {/*            color: "white",*/}
                    {/*        }}*/}
                    {/*    >Stack Screen</Text>*/}
                    {/*</TouchableOpacity>*/}

                    {/*/!*точка входа*!/*/}
                    {/*<View style={styles.containerSectionList}>*/}
                    {/*<SectionList*/}
                    {/*    sections={[...newTaskData, ...completedTaskData]}*/}
                    {/*    renderItem={({item})=>(*/}
                    {/*        <Text style={styles.taskItem}>{item.task}</Text>*/}
                    {/*    )}*/}
                    {/*    renderSectionHeader={({section})=>(*/}
                    {/*        <Text style={styles.taskTitle}>{section.title}</Text>*/}
                    {/*    )}*/}
                    {/*    keyExtractor={item=>item.id}*/}
                    {/*    stickySectionHeadersEnabled*/}
                    {/*/>*/}
                    {/*/!*точка входа*!/*/}

                    {/*/!*точка входа*!/*/}
                    {/*</View>*/}

                    {/*<ScrollView >*/}
                    {/*    <MyList/>*/}
                    {/*</ScrollView>*/}
                    <View style={styles.testStyles}>
                        <Text style={styles.testText}>
                            Тестовое сообщение
                        </Text>
                        {/*<FlashList*/}
                        {/*    data={DATA}*/}
                        {/*    renderItem={({item}) => (*/}
                        {/*        <TouchableOpacity style={{marginTop: 20}}>*/}
                        {/*            <View>*/}
                        {/*                <Text>{item.title}</Text>*/}
                        {/*                <Text>{item.description}</Text>*/}
                        {/*            </View>*/}
                        {/*        </TouchableOpacity>*/}
                        {/*    )}*/}
                        {/*/>*/}



                    </View>


                </View>
            </View>
            <View style={gStyle.box22}>
                <Separator />
                <View style={styles.fixToText}>
                    {/*Главная*/}
                    <TouchableOpacity onPress={loadSceneMainMenu} >
                        <NeuMorph size={40}>
                            <Ionicons name="home-outline" size={25} color={gray}  />
                        </NeuMorph>
                    </TouchableOpacity>

                    {/*Новости*/}
                    <TouchableOpacity onPress={loadSceneNews} >
                        <NeuMorph size={40}>
                            <Ionicons name="newspaper-outline" size={25} color={gray} />
                        </NeuMorph>
                    </TouchableOpacity>

                    {/*Menu start*/}
                    {/*Menu start*/}
                    <Modal style={[styles.buttonNext, styles.inner, styles.topShadow, styles.bottomShadow]} visible={modalWindow}>
                        <View style={gStyle.main_menu} >
                            <TouchableOpacity onPress={() => setModalWindow(false)} style={styles.buttonNext1} >
                                <NeuMorph size={40}>
                                    <Ionicons
                                        name="close"
                                        size={25}
                                        color={gray}
                                    />
                                </NeuMorph>
                            </TouchableOpacity>

                            <View style={styles.fotoLayer}>
                                <Image source={require('../assets/fotoLayer.png')} style={styles.imageFotoLayer} />
                                <Text style={styles.textNameMainMenu}>
                                    Тел.: 8 911 955 33 88
                                </Text>
                                <Text style={styles.textPhoneMainMenu}>
                                    Профиль: Пациент №
                                </Text>
                                <SeparatorProfile />
                            </View>

                            {/*пункты меню*/}
                            <View style={styles.boxMainMenuBlockLink}>
                                <TouchableOpacity onPress={loadSceneKalendar} style={styles.boxCalendarMainMenu}>
                                    <MaterialIcons name="table-chart" size={20} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Календарь </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadScenePobocka} style={styles.boxCalendarMainMenu}>
                                    <AntDesign name="filter" size={20} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Побочные эффекты </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneKartaPreparatov} style={styles.boxCalendarMainMenu}>
                                    <AntDesign name="table" size={20} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Карта препаратов </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadScenePomoschnik} style={styles.boxCalendarMainMenu}>
                                    {/*<FontAwesome name="circle" size={24} color="#8579A3" />*/}
                                    <FontAwesome5 name="brain" size={18} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Помощник </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneShemaTerapii} style={styles.boxCalendarMainMenu}>
                                    {/*<FontAwesome name="circle" size={24} color="#8579A3" />*/}
                                    <MaterialIcons name="backup-table" size={20} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Схема химиотерапии </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneMain} style={styles.boxCalendarMainMenu}>
                                    <AntDesign name="retweet" size={24} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenuTop}> Пройти опрос заново </Text>
                                    <Text style={styles.textCalendarMainMenuSmall}> * Если у вас отменена химиотерапия, или изменена схема </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneThemess} style={styles.boxCalendarMainMenu}>
                                    <MaterialCommunityIcons name="theme-light-dark" size={24} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Тема </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneBack} style={styles.boxCalendarMainMenu}>
                                    <MaterialIcons name="animation" size={24} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Анимации </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneBack} style={styles.boxCalendarMainMenu}>
                                    <AntDesign name="setting" size={24} color="#8579A3" />
                                    <Text style={styles.textCalendarMainMenu}> Настройки </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={loadSceneBack} style={styles.boxCalendarMainMenu}>
                                    <SeparatorBottom />
                                    {/*<FontAwesome name="circle" size={24} color="#8579A3" />*/}
                                    <Text style={styles.textCalendarMainMenuVersion}> Version 1.0 </Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => setModalWindow(true)} >
                        <NeuMorph size={40}>
                            <Ionicons name="menu" size={25} color={gray} />
                        </NeuMorph>
                    </TouchableOpacity>
                    {/*Menu end*/}
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    testStyles: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    testText: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
    },

    containerSectionList: {
        flex: 1,
        backgroundColor: '#eafffe'
    },

    taskItem:{
        padding: 10,
        marginVertical: 15,
        fontSize: 16
    },
    taskTitle:{
        backgroundColor: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        elevation: 4,
        margin: 10,
        marginBottom: 0,
        borderRadius: 10
    },


    textCalendarMainMenuVersion: {
        top: Platform.OS === "ios" ? '25%' : '50%',
        // left: Platform.OS === "ios" ? '25%' : '20%',
    },
    // блок сепараторов
    separatorMainMenuProfile: {
        paddingVertical: Platform.OS === "ios" ? '2%' : '2%',
        left: Platform.OS === "ios" ? '0%' : '0%',
        // borderBottomColor: '#737373',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    separatorCalendarMainMenu: {
        paddingVertical: Platform.OS === "ios" ? '2%' : '10%',
        left: Platform.OS === "ios" ? '-3%' : '-3%',
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    separatorMainMenu: {
        // top: Platform.OS === "ios" ? '2%' : '5%',
        marginVertical: Platform.OS === "ios" ? 10 : 7,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    // блок коррекции ссылок главного меню
    boxMainMenuBlockLink: {
        top: Platform.OS === "ios" ? '4%' : '-1%',
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: -45,
    },
    // настройки каждого пункта меню
    boxCalendarMainMenu: {
        top: Platform.OS === "ios" ? '-23%' : '-23%',
        left: Platform.OS === "ios" ? '3%' : '3%',
    },
    textCalendarMainMenu: {
        fontSize: Platform.OS === "ios" ? 14 : 18,
        left: Platform.OS === "ios" ? '10%' : '10%',
        top: Platform.OS === "ios" ? '-50%' : '-50%',
        color: '#8579A3',
    },
    textCalendarMainMenuTop: {
        fontSize: Platform.OS === "ios" ? 14 : 18,
        left: Platform.OS === "ios" ? '10%' : '10%',
        top: Platform.OS === "ios" ? '-25%' : '-30%',
        color: '#8579A3',
    },
    //
    textCalendarMainMenuSmall: {
        fontSize: Platform.OS === "ios" ? 10 : 14,
        left: Platform.OS === "ios" ? '10%' : '10%',
        top: Platform.OS === "ios" ? '-25%' : '-30%',
        color: '#8579A3',
        width: 200,
    },
    textNameMainMenu: {
        fontSize: Platform.OS === "ios" ? 14 : 18,
        left: Platform.OS === "ios" ? '3%' : '3%',
        top: Platform.OS === "ios" ? '2%' : '2%',
        color: '#8579A3',
    },
    textPhoneMainMenu: {
        fontSize: Platform.OS === "ios" ? 12 : 18,
        left: Platform.OS === "ios" ? '3%' : '3%',
        top: Platform.OS === "ios" ? '1%' : '2%',
        color: '#8579A3',
    },
    fotoLayer: {
        // top: Platform.OS === "ios" ? '.5%' : '-.5%',
        // left: Platform.OS === "ios" ? '0%' : '0%',
        // backgroundColor: '#DEE9FD',
    },
    imageFotoLayer: {
        backgroundColor: "#8579A3",
        borderRadius: 25,
        width: '65%',
        height: '46%',
        left: '0%',
        // top: '-17%',
        marginTop: Platform.OS === "ios" ? '-16.5%' : '-12.5%',

    },
    buttonNext: {
        // top: Platform.OS === "ios" ? '.5%' : '-.5%',
        // left: Platform.OS === "ios" ? '0%' : '0%',
        // backgroundColor: "#DEE9F7",
    },
    buttonNext1: {
        top: Platform.OS === "ios" ? '2.2%' : '1%',
        left: Platform.OS === "ios" ? '73%' : '83%',
    },

    // стили 4х окон_кнопок_начало
    container_main_menu: {
        width: '100%',
        height: '100%',
        padding: '5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // flexWrap: 'wrap',
        top: '1.5%',
    },
    box11_1: {
        width: '50%',
        height: '50%',
        padding: 10,
        // backgroundColor: 'magenta',
    },
    box11_100: {

        width: '100%',
        height: '100%',
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        // padding: 5,
        // backgroundColor: 'magenta',
    },
    box11_100_calendar: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        // flexDirection: 'space-around',

    },
    box11_100_calendar_text: {
        fontSize: 15,
        // bottom: '24%',
        // left: '10%',
        color: 'white',
        top: -30,
        // textAlignVertical: 'center',
    },
    inner_1_contain: {
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'blue',
        // borderRadius: 25,

    },
    // стили 4х окон_кнопок_конец
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
        margin: 12,
        marginBottom: Platform.OS === "ios" ? 1 : 2,
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
    fixToText: {
        // flex: Platform.OS === "ios" ? 0.2 : 0.09,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        // backgroundColor: "#D9C5FA",
    },
    tinyLogo: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        width: Platform.OS === "ios" ? '91.5%' : '92%',
        height: Platform.OS === "ios" ? '70%' : '60%',

        top: Platform.OS === "ios" ? '5%' : '3%',
        left: Platform.OS === "ios" ? '3.2%' : '2.5%',
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
    // buttonNext1: {
    //     top: Platform.OS === "ios" ? '2.2%' : '1%',
    //     left: Platform.OS === "ios" ? '73%' : '83%',
    // },
    // // стили 4х окон_кнопок_начало
    // container_main_menu: {
    //     width: '100%',
    //     height: '100%',
    //     padding: 10,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     top: '1.5%',
    // },
    // box11_1: {
    //     width: '50%',
    //     height: '50%',
    //     padding: 10,
    //     // backgroundColor: 'magenta',
    // },
    // box11_100: {
    //
    //     width: '100%',
    //     height: '100%',
    //     // flex: 1,
    //     // flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //
    //     // padding: 5,
    //     // backgroundColor: 'magenta',
    // },
    // box11_100_calendar: {
    //     width: '100%',
    //     height: '100%',
    //     borderRadius: 25,
    //     // flexDirection: 'space-around',
    //
    // },
    // box11_100_calendar_text: {
    //     fontSize: 15,
    //     // bottom: '24%',
    //     // left: '10%',
    //     color: 'white',
    //     top: -30,
    //     // textAlignVertical: 'center',
    // },
    // inner_1_contain: {
    //     flex: 1,
    //     // backgroundColor: 'yellow',
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    //     // borderWidth: 1,
    //     // borderColor: 'blue',
    //     // borderRadius: 25,
    //
    // },
    // // стили 4х окон_кнопок_конец
    // full: {
    //     fontFamily: 'zapfino-extra-lt-pro',
    //     fontSize: 50,
    //     textAlign: 'center'
    // },
    // header: {
    //     textAlign: 'center'
    // },
    // input: {
    //     height: 40,
    //     margin: 12,
    //     marginBottom: Platform.OS === "ios" ? 1 : 2,
    //     borderWidth: 1,
    //     padding: 10,
    //     color: '#6E5573',
    //     borderColor: '#6E5573'
    // },
    // colorPlaceholder : {
    //     color: '#6E5573',
    // },
    // paragraph: {
    //     fontSize: Platform.OS === "ios" ? 15 : 18,
    //     top: Platform.OS === "ios" ? 5 : 3,
    //     left: Platform.OS === "ios" ? 10 : 12,
    // },
    // separator: {
    //     marginVertical: 16,
    //     borderBottomColor: '#737373',
    //     borderBottomWidth: StyleSheet.hairlineWidth,
    // },
    // fixToText: {
    //     // flex: Platform.OS === "ios" ? 0.2 : 0.09,
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 14,
    // },
    // tinyLogo: {
    //     // flex: 1,
    //     flexDirection: "row",
    //     justifyContent: 'center',
    //     width: Platform.OS === "ios" ? '91.5%' : '92%',
    //     height: Platform.OS === "ios" ? '70%' : '60%',
    //
    //     top: Platform.OS === "ios" ? '5%' : '3%',
    //     left: Platform.OS === "ios" ? '3.2%' : '2.5%',
    // },
    // inner: {
    //     backgroundColor: "#DEE9F7",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     borderColor: "#E2ECFD",
    //     borderWidth: 1
    // },
    // topShadow: {
    //     shadowOffset: {
    //         width: -6,
    //         height: -6
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 6,
    //     shadowColor: "#FBFFFF"
    // },
    // bottomShadow: {
    //     shadowOffset: {
    //         width: 6,
    //         height: 6,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 6,
    //     shadowColor: "#B7C4DD"
    // },
})

{/*<TouchableOpacity onPress={loadSceneMainMenu} >*/}
{/*    <NeuMorph size={40}>*/}
{/*        <AntDesign name="home" size={25} color={gray}  />*/}
{/*    </NeuMorph>*/}
{/*</TouchableOpacity>*/}

{/*<TouchableOpacity onPress={loadSceneNews} >*/}
{/*    <NeuMorph size={40}>*/}
{/*        <Ionicons name="newspaper-outline" size={24} color="gray" />*/}
{/*    </NeuMorph>*/}
{/*</TouchableOpacity>*/}


{/*<TouchableOpacity onPress={loadSceneMainMenu} >*/}
{/*    <NeuMorph size={40}>*/}
{/*        <Ionicons name="menu" size={24} color="gray" />*/}
{/*    </NeuMorph>*/}
{/*</TouchableOpacity>*/}