import * as React from 'react';
import  {useState, useEffect} from 'react';
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
    ScrollView,
    LayoutAnimation,
    UIManager,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {gStyle} from "../styles/style";
import {Formik} from "./formik";
import { AntDesign, Entypo, Ionicons, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import FormBaseDate from "./FormBaseDate";
import {Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {ArrowBackIcon, ArrowForwardIcon} from "native-base";
import News from './News';
import SearchBar from "./SearchBar";
import List from "./List";
import slides from "../slides";
import pobochkafind from "../pobochkafind";

const gray = "#91A1BD";


export default function Pobocka({ navigation }) { //  { navigation }

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

    // ВНИМАНИЕ -> перенос кода !!!
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
    // const setClicked = useState(false);
    // const [fakeData, setFakeData] = useState();

    // реализовать через useEffect c data setFakeData -> setFakeData(data)


    // useEffect(() => {

        // const getData = async () => {
        //     const apiResponse = await fetch(
        //         "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
        //     );
        //     const data = await apiResponse.json();
        //     setFakeData(data);
        // };
        // getData();
    // }, []);
    // }, );
    // ВНИМАНИЕ -> перенос кода !!!

    return(
        <SafeAreaView style={gStyle.container}>
            <View style={gStyle.box11}>
                <View style={styles.container_main_menu}>

                    <View style={styles.container_column}>
                        {/*<View style={styles.container_row}>*/}
                        {/*    /!*<View style={styles.container_text_pobocka}>*!/*/}
                        {/*    /!*    <Text style={styles.text_Pobocka}>Побочные эффекты</Text>*!/*/}
                        {/*    /!*</View>*!/*/}
                        {/*    <View style={styles.container_add_pobocka}>*/}
                        {/*        /!*<TouchableOpacity onPress={loadSceneMainMenu} >*!/*/}
                        {/*        /!*    <NeuMorph size={40}>*!/*/}
                        {/*        /!*        <AntDesign name="plus" size={33} color="#8579A3" />*!/*/}
                        {/*        /!*    </NeuMorph>*!/*/}
                        {/*        /!*</TouchableOpacity>*!/*/}
                        {/*    </View>*/}
                        {/*    <View style={styles.container_view_table}>*/}
                        {/*        <TouchableOpacity onPress={loadSceneMainMenu} >*/}
                        {/*            <NeuMorph size={40}>*/}
                        {/*                <AntDesign name="table" size={28} color="#8579A3" />*/}
                        {/*            </NeuMorph>*/}
                        {/*        </TouchableOpacity>*/}
                        {/*    </View>*/}
                        {/*</View>*/}



                        {/*список побочных эффектов*/}
                        {/*<View style={styles.container_row_table}>*/}
                        {/*    <ScrollView style={[styles.scrollView ,styles.topShadow_list, styles.bottomShadow_list,]}>*/}
                        {/*        <View style={styles.container_pobochka_main}>*/}
                        {/*            <View style={styles.header_pobochka_main}>*/}
                        {/*                <TouchableOpacity*/}
                        {/*                    onPress={() => setmultiSelect(!multiSelect)}*/}
                        {/*                >*/}
                        {/*                    <Text style={styles.headerButton}>*/}
                        {/*                        {*/}
                        {/*                            multiSelect*/}
                        {/*                            ? 'Показать один список'*/}
                        {/*                            : 'Показать несколько списков'*/}
                        {/*                        }*/}
                        {/*                    </Text>*/}
                        {/*                </TouchableOpacity>*/}
                        {/*            </View>*/}
                        {/*            <ScrollView>*/}
                        {/*                {*/}
                        {/*                    listDataSource.map((item, key) => (*/}
                        {/*                        <ExpandableComponent*/}
                        {/*                            key={item.category_name}*/}
                        {/*                            item={item}*/}
                        {/*                            onClickFunction={() => {*/}
                        {/*                                updateLayout(key)*/}
                        {/*                            }}*/}
                        {/*                            style={[styles.topShadow_list, styles.bottomShadow_list]}*/}
                        {/*                        />*/}
                        {/*                    ))*/}
                        {/*                }*/}
                        {/*            </ScrollView>*/}
                        {/*        </View>*/}
                        {/*    </ScrollView>*/}
                        {/*</View>*/}

                        {/*<View style={styles.container_row_text}>*/}
                        {/*    <Text style={styles.text_konsult}> * Вам необходимо проконсультироваться с лечащим врачом </Text>*/}
                        {/*</View>*/}

                        {/*// ВНИМАНИЕ -> перенос кода !!!*/}
                        <View style={styles.container_find_btn}>
                            {/*<FormKartaPreparatov addArticle={addArticleKartaPreparatov}/>*/}

                            <SafeAreaView style={styles.root}>
                                {!clicked && <Text style={styles.title}>Побочные эффекты</Text>}
                                <SearchBar
                                    searchPhrase={searchPhrase}
                                    setSearchPhrase={setSearchPhrase}
                                    clicked={clicked}
                                    setClicked={setClicked}
                                />
                                {(
                                    <List
                                        searchPhrase={searchPhrase}
                                        // data={fakeData}
                                        data={pobochkafind}
                                        setClicked={setClicked}
                                    />
                                )}
                            </SafeAreaView>
                        </View>
                        {/*// ВНИМАНИЕ -> перенос кода !!!*/}

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
    // ВНИМАНИЕ -> перенос кода !!!
    container_find_btn: {
        flex: 1,
        justifyContent: 'space-between',
        top: Platform.OS === "ios" ? '-25%' : '-29%',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
    },
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "90%",
        marginTop: 85,
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: "5%",
        color: '#8579A3',
    },
    // ВНИМАНИЕ -> перенос кода !!!

    topShadow_list: {
        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF"
    },
    bottomShadow_list: {
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#B7C4DD"
    },
    separatorr: {
        height: 0.5,
        backgroundColor: '#c8c8c8',
        width: '100%'
    },
    text: {
        fontSize: 16,
        padding: 3,
        color: '#8579A3',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 2,
        paddingRight: 10,
        backgroundColor: '#fff',

        flex: .5,
        width: 350,
        // height: 350,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    item: {
        // backgroundColor: 'green',
        padding: 20,
        borderWidth: Platform.OS === 'ios' ? '1' : '2',
        borderColor: Platform.OS === 'ios' ? 'white' : 'white',

        // flex: 1,
        // justifyContent: 'space-between',
        // flexDirection: 'column',
        // flex: 1,
        // justifyContent: 'space-around',
        // flexDirection: 'row',

        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF"
    },
    itemText: {
        // flex: 1,
        flexDirection: 'row',
        // textAlign: 'center',
        // justifyContent: 'space-between',
        fontSize: 18,
        color: '#8579A3'
    },
    headerButton: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        // color: 'white',
        color: '#8579A3',
        left: -10,
    },
    titleText_pobochka_main: {
        flex: 1,
        fontSize: 22,
        color: 'white'
    },
    header_pobochka_main: {
        flexDirection: 'row',
        padding: 10,
    },
    container_pobochka_main: {
        flex: 1,
    },
    scrollView: {
        // backgroundColor: '#8579A3',
        marginHorizontal: 10,
        marginVertical: Platform.OS === "ios" ? -90 : -210,
        top: Platform.OS === "ios" ? 5 : 15,
    },

    container_column: {
        flex: 1,
        flexDirection: 'column',
        padding: -1,
    },
    container_row_text: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container_row_table: {
        flex: 1,
        justifyContent: 'center',
    },
    container_row: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text_konsult: {
        flexWrap: 'wrap',
        color: '#8579A3',
        fontSize: Platform.OS === "ios" ? 11 : 12,
    },
    container_view_table: {
        flex: 1,
        flexDirection: 'column',
    },
    container_add_pobocka: {
        flex: 1,
        flexDirection: 'column',
        left: Platform.OS === "ios" ? '-5%' : '-5%',
    },
    container_text_pobocka: {
        flexDirection: 'column',
        width: '70%',
        left: Platform.OS === "ios" ? '40%' : '2%',
        top: Platform.OS === "ios" ? '3%' : '3%',
    },
    text_Pobocka: {
        color: '#8579A3',
        fontSize: Platform.OS === "ios" ? 22 : 20,
        // left: Platform.OS === "ios" ? '15%' : '10%',
        // top: Platform.OS === "ios" ? '-50%' : '-50%',
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
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
})

