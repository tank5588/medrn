import * as React from 'react';
import  {useState} from 'react';
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
    Animated
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {gStyle} from "../styles/style";
import {Formik} from "./formik";
import { AntDesign, Entypo, Ionicons, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import FormBaseDate from "./FormBaseDate";
import {Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {ArrowBackIcon, ArrowForwardIcon} from "native-base";
import News from './News';


const gray = "#91A1BD";

export default function Kalendar({ navigation }) { //  { navigation }

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

    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};
    LocaleConfig.locales['fr'] = {
        monthNames: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ],
        monthNamesShort: ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Нояб.', 'Дек.'],
        dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
        today: "Прекрасный день"
    };
    LocaleConfig.defaultLocale = 'fr';

    return(
        <SafeAreaView style={gStyle.container}>
            <View style={gStyle.box11}>
                <View style={styles.container_main_menu}>

                    <Calendar
                        // Specify style for calendar container element. Default = {}
                        style={{
                            top: 5,
                            borderWidth: 1,
                            borderColor: 'white',
                            height: 350
                        }}
                        // Specify theme properties to override specific styles for calendar parts. Default = {}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            disabledArrowColor: '#d9e1e8',
                            monthTextColor: 'blue',
                            indicatorColor: 'blue',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                        // Initially visible month. Default = now
                        initialDate={'2016-05-10'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2016-05-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2070-05-30'}
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        enableSwipeMonths={true}
                        markingType={'multi-dot'}
                        markedDates={{
                            '2017-01-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                            '2017-01-26': {dots: [massage, workout], disabled: true}
                        }}
                        renderArrow={(direction) => direction === 'left' ?
                            <NeuMorph size={40}>
                                <AntDesign name="leftcircle" size={25} color={gray} />
                            </NeuMorph>
                            :
                            <NeuMorph size={40}>
                                <AntDesign name="rightcircle" size={25} color={gray} />
                            </NeuMorph>
                        }
                    />

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

