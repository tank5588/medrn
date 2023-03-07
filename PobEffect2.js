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
    ActivityIndicator,
    LayoutAnimation,
    UIManager,
} from 'react-native';
import {gStyle} from "./styles/style";
import { AntDesign, Entypo, Ionicons, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import News from './components/News';
import { FlashList } from '@shopify/flash-list';

const gray = "#91A1BD";

// сюда подгружать динамические данные пока будут статические
const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Секция 1',
        subcategory: [
            {
                id: 1,
                val: 'Текст секции 1 ',
                subcategory_name: 'Подкатегория1',
            },
            {
                id: 2,
                val: 'Текст секции 2',
                subcategory_name: 'Подкатегория2',
            },
        ]
    },
    // {
    //     isExpanded: false,
    //     category_name: 'Циклофосфамид',
    //     subcategory: [
    //         {
    //             id: 3,
    //             val: 'Фармакологическое действие: ',
    //         },
    //         {
    //             id: 4,
    //             val: 'Фармакокинетика: ',
    //         },
    //     ]
    // },
    // {
    //     isExpanded: false,
    //     category_name: 'Фосфамид',
    //     subcategory: [
    //         {
    //             id: 5,
    //             val: 'Фармакологическое действие: ',
    //         },
    //         {
    //             id: 6,
    //             val: 'Фармакокинетика: ',
    //         },
    //     ]
    // }
];

// Выпадающий список
const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setlayoutHeight] = useState(0);
    useEffect(() => { item.isExpanded ? setlayoutHeight(null) : setlayoutHeight(0), [item.isExpanded] });

    return (
        <View>
            <TouchableOpacity style={styles.item} onPress={onClickFunction}>
                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View style={{height: layoutHeight, overflow: 'hidden'}}>
                {
                    item.subcategory.map((item, key) => (
                        <TouchableOpacity key={key} style={styles.content}>
                            <Text style={styles.text_bold}>
                                {item.val}
                            </Text>
                            <Text style={styles.text_bold}>
                                {item.subcategory_name }
                            </Text>
                            <View style={styles.separatorr}/>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
    }


export default function PobEffect2({ navigation }) { //  { navigation }
    // Выпадающий список
    const [multiSelect, setmultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(CONTENT);
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
                    : (array[placeindex]['isExpanded']) = false
            );
        }
        setlistDataSource(array)
    }


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

    const [news, setNews] = useState([
        { name: 'Health & Air', phoneNumber: '89119115555', key: '1', img: 'https://krot.info/uploads/posts/2021-03/1614877965_17-p-fon-gori-art-kartinki-17.jpg' },
        { name: 'Health & Air', phoneNumber: '89119115555', key: '2', img: 'https://krot.info/uploads/posts/2021-03/1614877965_17-p-fon-gori-art-kartinki-17.jpg' },
        { name: 'Health & Air', phoneNumber: '89119115555', key: '3', img: 'https://krot.info/uploads/posts/2021-03/1614877965_17-p-fon-gori-art-kartinki-17.jpg' },
    ]);
    const addArticleKartaPreparatov = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
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


    return(
        <SafeAreaView style={gStyle.container}>
            <View style={gStyle.box11}>
                <View style={styles.container_main_menu}>

                    <View style={styles.container_kartapreparatov}>
                        <View style={styles.container_row_table}>
                            <ScrollView style={[styles.scrollView ,styles.topShadow_list, styles.bottomShadow_list,]}>

                                <View style={styles.container_pobochka_main}>
                                    <View style={styles.header_pobochka_main}>
                                        <TouchableOpacity onPress={() => setmultiSelect(!multiSelect)} >
                                            <Foundation name="list-number" size={31} color="gray" style={styles.headerButton2} />
                                            <Text style={styles.headerButton}>
                                                {
                                                    multiSelect
                                                        ? 'Список'
                                                        : 'Списки'
                                                }
                                            </Text>
                                        </TouchableOpacity>
                                    </View>


                                    <ScrollView style={styles.scrollViewHeight}>

                                        {/*<View style={styles.header_pobochka_main}>*/}
                                        {/*    <TouchableOpacity onPress={() => setmultiSelect(!multiSelect)} >*/}
                                        {/*        <Foundation name="list-number" size={31} color="gray" style={styles.headerButton2} />*/}
                                        {/*        <Text style={styles.headerButton}>*/}
                                        {/*            {*/}
                                        {/*                multiSelect*/}
                                        {/*                    ? '  СПИСОК'*/}
                                        {/*                    : '  СПИСКИ'*/}
                                        {/*            }*/}
                                        {/*        </Text>*/}
                                        {/*    </TouchableOpacity>*/}
                                        {/*</View>*/}

                                        {
                                            listDataSource.map((item, key) => (
                                                <ExpandableComponent
                                                    key={item.category_name}
                                                    item={item}
                                                    onClickFunction={() => { updateLayout(key) }}
                                                    style={[styles.topShadow_list, styles.bottomShadow_list]}
                                                />
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.container_row_text}>
                            <Text style={styles.text_konsult}> * Вам необходимо проконсультироваться с лечащим врачом </Text>
                        </View>

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
                                <Image source={require('./assets/fotoLayer.png')} style={styles.imageFotoLayer} />
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
    text_bold: {
        fontSize: 16,
        padding: 10,
        color: '#8579A3',

        fontWeight: 'bold',
    },

    text_normal: {
        fontSize: 16,
        padding: 10,
        color: '#8579A3',
    },

    scrollViewHeight: {

    },

    separatorr: {
        height: 0.5,
        backgroundColor: '#c8c8c8',
        width: '100%'
    },
    text: {
        fontSize: 16,
        padding: 10,
        color: '#8579A3',
    },
    content: {
        paddingLeft: 2,
        paddingRight: 10,
        backgroundColor: '#fff',

        flex: .5,
        width: 330,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    item: {
        padding: 20,
        borderWidth: Platform.OS === 'ios' ? '1' : '2',
        borderColor: Platform.OS === 'ios' ? 'white' : 'white',

        shadowOffset: {
            width: -6,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF"
    },
    itemText: {
        flexDirection: 'row',
        fontSize: 18,
        color: '#8579A3'
    },
    container_text_pobocka: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '30%',
        top: Platform.OS === "ios" ? '-1%' : '3%',
    },
    text_Pobocka: {
        color: '#8579A3',
        fontSize: Platform.OS === "ios" ? 22 : 20,
    },
    container_row_table: {
        flex: 1,
        justifyContent: 'center',
        // !!!ВРЕМЕННО!!!!
        top: '10%',
    },

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
    container_pobochka_main: {
        // flexDirection: 'column',
        flex: 1,
        // top: '-1%',
    },
    header_pobochka_main: {
        flexDirection: 'row',
        // padding: 10,
        top: -12,
        left: -1,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        borderColor: 'white',
        padding: -5,
        width: '43%',
        height: 38,

        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#B7C4DD"
    },
    headerButton: {
        flexDirection: 'row',
        fontSize: 25,
        color: '#8579A3',
        left: 38,
        top: -28,
    },
    headerButton2: {
        padding: -1,
        top: 2,
        left: 7,
    },
    container_row_text: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 85,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
        color: '#8579A3',
    },

    // компонент текст в карточке препарата
    text_konsult: {
        flexWrap: 'wrap',
        color: '#8579A3',
        fontSize: Platform.OS === "ios" ? 14 : 12,
        textAlign: "left",
        padding: 20,
        top: '10%',
    },
    // компонент карточка препарата
    scrollView: {
        marginHorizontal: 1,
        marginVertical: Platform.OS === "ios" ? -65 : -153,
        top: Platform.OS === "ios" ? 85 : 15,
        flex: 1,
        padding: 20,
    },
    container_kartapreparatov: {
        flex: 1,
        flexDirection: 'column',
        padding: -1,
    },
    container_find_form: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container_find_btn: {
        flex: 1,
        justifyContent: 'space-between',
        top: Platform.OS === "ios" ? '-45%' : '-29%',
    },
    container_find_table: {
        flex: 1,
        justifyContent: 'space-between',
        top: Platform.OS === "ios" ? '-24%' : '-42%',
    },
    text_find: {
        flexWrap: 'wrap',
        color: '#8579A3',
        fontSize: Platform.OS === "ios" ? 12 : 14,
    },
    textCalendarMainMenuVersion: {
        top: Platform.OS === "ios" ? '25%' : '50%',
    },
    // блок сепараторов
    separatorMainMenuProfile: {
        paddingVertical: Platform.OS === "ios" ? '2%' : '2%',
        left: Platform.OS === "ios" ? '0%' : '0%',
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

    },
    imageFotoLayer: {
        backgroundColor: "#8579A3",
        borderRadius: 25,
        width: '65%',
        height: '46%',
        left: '0%',
        marginTop: Platform.OS === "ios" ? '-16.5%' : '-12.5%',

    },
    buttonNext: {

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
    },
    box11_100: {

        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box11_100_calendar: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    box11_100_calendar_text: {
        fontSize: 15,
        color: 'white',
        top: -30,
    },
    inner_1_contain: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
    tinyLogo: {
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

