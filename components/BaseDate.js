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
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import FormBaseDate from "./FormBaseDate";
import {Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {ArrowBackIcon, ArrowForwardIcon} from "native-base";

const gray = "#91A1BD";

export default function BaseDate({ navigation }) { //  { navigation }
    const loadScene = () => {
        navigation.navigate('NumberCicle')
    }
    const loadSceneBack = () => {
        navigation.navigate('Chemistry')
    }
    const [number1, onChangeNumber1] = React.useState('Дата первого цикла системной терапии');
    const [number2, onChangeNumber2] = React.useState('Сегодня 4 марта 2022');
    const [modalWindow, setModalWindow] = useState(false);
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
                <FormBaseDate />

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

                {/*<CalendarList*/}
                {/*    // Callback which gets executed when visible months change in scroll view. Default = undefined*/}
                {/*    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}*/}
                {/*    // Max amount of months allowed to scroll to the past. Default = 50*/}
                {/*    pastScrollRange={50}*/}
                {/*    // Max amount of months allowed to scroll to the future. Default = 50*/}
                {/*    futureScrollRange={50}*/}
                {/*    // Enable or disable scrolling of calendar list*/}
                {/*    scrollEnabled={true}*/}
                {/*    // Enable or disable vertical scroll indicator. Default = false*/}
                {/*    showScrollIndicator={true}*/}


                {/*    style={{*/}
                {/*        top: 5,*/}
                {/*        borderWidth: 1,*/}
                {/*        borderColor: 'white',*/}
                {/*        height: 350*/}
                {/*    }}*/}
                {/*    // Specify theme properties to override specific styles for calendar parts. Default = {}*/}
                {/*    theme={{*/}
                {/*        backgroundColor: '#ffffff',*/}
                {/*        calendarBackground: '#ffffff',*/}
                {/*        textSectionTitleColor: '#b6c1cd',*/}
                {/*        textSectionTitleDisabledColor: '#d9e1e8',*/}
                {/*        selectedDayBackgroundColor: '#00adf5',*/}
                {/*        selectedDayTextColor: '#ffffff',*/}
                {/*        todayTextColor: '#00adf5',*/}
                {/*        dayTextColor: '#2d4150',*/}
                {/*        textDisabledColor: '#d9e1e8',*/}
                {/*        dotColor: '#00adf5',*/}
                {/*        selectedDotColor: '#ffffff',*/}
                {/*        arrowColor: 'orange',*/}
                {/*        disabledArrowColor: '#d9e1e8',*/}
                {/*        monthTextColor: 'blue',*/}
                {/*        indicatorColor: 'blue',*/}
                {/*        textDayFontFamily: 'monospace',*/}
                {/*        textMonthFontFamily: 'monospace',*/}
                {/*        textDayHeaderFontFamily: 'monospace',*/}
                {/*        textDayFontWeight: '300',*/}
                {/*        textMonthFontWeight: 'bold',*/}
                {/*        textDayHeaderFontWeight: '300',*/}
                {/*        textDayFontSize: 16,*/}
                {/*        textMonthFontSize: 16,*/}
                {/*        textDayHeaderFontSize: 16*/}
                {/*    }}*/}
                {/*    // Initially visible month. Default = now*/}
                {/*    initialDate={'2016-05-10'}*/}
                {/*    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined*/}
                {/*    minDate={'2016-05-10'}*/}
                {/*    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined*/}
                {/*    maxDate={'2070-05-30'}*/}
                {/*    onDayPress={day => {*/}
                {/*        console.log('selected day', day);*/}
                {/*    }}*/}
                {/*    enableSwipeMonths={true}*/}
                {/*    markingType={'multi-dot'}*/}
                {/*    markedDates={{*/}
                {/*        '2017-01-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},*/}
                {/*        '2017-01-26': {dots: [massage, workout], disabled: true}*/}
                {/*    }}*/}
                {/*    renderArrow={(direction) => direction === 'left' ?*/}
                {/*        <NeuMorph size={40}>*/}
                {/*            <AntDesign name="leftcircle" size={25} color={gray} />*/}
                {/*        </NeuMorph>*/}
                {/*        :*/}
                {/*        <NeuMorph size={40}>*/}
                {/*            <AntDesign name="rightcircle" size={25} color={gray} />*/}
                {/*        </NeuMorph>*/}
                {/*    }*/}
                {/*/>*/}


                {/*<Agenda*/}
                {/*    items={{*/}
                {/*        '2012-05-22': [{name: 'item 1 - any js object'}],*/}
                {/*        '2012-05-23': [{name: 'item 2 - any js object', height: 80}],*/}
                {/*        '2012-05-24': [],*/}
                {/*        '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]*/}
                {/*    }}*/}
                {/*    // Callback that gets called when items for a certain month should be loaded (month became visible)*/}
                {/*    loadItemsForMonth={month => {*/}
                {/*        console.log('trigger items loading');*/}
                {/*    }}*/}
                {/*    // Callback that fires when the calendar is opened or closed*/}
                {/*    onCalendarToggled={calendarOpened => {*/}
                {/*        console.log(calendarOpened);*/}
                {/*    }}*/}
                {/*    // Callback that gets called on day press*/}
                {/*    onDayPress={day => {*/}
                {/*        console.log('day pressed');*/}
                {/*    }}*/}
                {/*    // Callback that gets called when day changes while scrolling agenda list*/}
                {/*    onDayChange={day => {*/}
                {/*        console.log('day changed');*/}
                {/*    }}*/}
                {/*    // Initially selected day*/}
                {/*    selected={'2012-05-16'}*/}
                {/*    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined*/}
                {/*    minDate={'2012-05-10'}*/}
                {/*    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined*/}
                {/*    maxDate={'2012-05-30'}*/}
                {/*    // Max amount of months allowed to scroll to the past. Default = 50*/}
                {/*    pastScrollRange={50}*/}
                {/*    // Max amount of months allowed to scroll to the future. Default = 50*/}
                {/*    futureScrollRange={50}*/}
                {/*    // Specify how each item should be rendered in agenda*/}
                {/*    renderItem={(item, firstItemInDay) => {*/}
                {/*        return <View />;*/}
                {/*    }}*/}
                {/*    // Specify how each date should be rendered. day can be undefined if the item is not first in that day*/}
                {/*    renderDay={(day, item) => {*/}
                {/*        return <View />;*/}
                {/*    }}*/}
                {/*    // Specify how empty date content with no items should be rendered*/}
                {/*    renderEmptyDate={() => {*/}
                {/*        return <View />;*/}
                {/*    }}*/}
                {/*    // Specify how agenda knob should look like*/}
                {/*    renderKnob={() => {*/}
                {/*        return <View />;*/}
                {/*    }}*/}
                {/*    // Specify what should be rendered instead of ActivityIndicator*/}
                {/*    renderEmptyData={() => {*/}
                {/*        return <View />;*/}
                {/*    }}*/}
                {/*    // Specify your item comparison function for increased performance*/}
                {/*    rowHasChanged={(r1, r2) => {*/}
                {/*        return r1.text !== r2.text;*/}
                {/*    }}*/}
                {/*    // Hide knob button. Default = false*/}
                {/*    hideKnob={true}*/}
                {/*    // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false*/}
                {/*    showClosingKnob={false}*/}
                {/*    // By default, agenda dates are marked if they have at least one item, but you can override this if needed*/}
                {/*    markedDates={{*/}
                {/*        '2012-05-16': {selected: true, marked: true},*/}
                {/*        '2012-05-17': {marked: true},*/}
                {/*        '2012-05-18': {disabled: true}*/}
                {/*    }}*/}
                {/*    // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false*/}
                {/*    disabledByDefault={true}*/}
                {/*    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly*/}
                {/*    onRefresh={() => console.log('refreshing...')}*/}
                {/*    // Set this true while waiting for new data from a refresh*/}
                {/*    refreshing={false}*/}
                {/*    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView*/}
                {/*    refreshControl={null}*/}
                {/*    // Agenda theme*/}
                {/*    theme={{*/}

                {/*        agendaDayTextColor: 'yellow',*/}
                {/*        agendaDayNumColor: 'green',*/}
                {/*        agendaTodayColor: 'red',*/}
                {/*        agendaKnobColor: 'blue'*/}
                {/*    }}*/}
                {/*    // Agenda container style*/}
                {/*    style={{}}*/}
                {/*/>*/}

                {/*<Image style={*/}
                {/*    [*/}
                {/*        styles.tinyLogo,*/}
                {/*        {*/}
                {/*            backgroundColor: '#F4F3F3'*/}
                {/*        }*/}
                {/*     ]*/}
                {/*}*/}
                {/*       source={*/}
                {/*           require('../assets/calendar.jpg')*/}
                {/*       }*/}
                {/*/>*/}

            </View>
            <View style={gStyle.box22}>
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
                            <AntDesign name="close" size={24} color="black" style={styles.buttonNext} onPress={() => setModalWindow(false)} />
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
                </View>
            </View>
        </SafeAreaView>
    )
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

{/*<TextInput*/}
{/*    style={[styles.input, styles.colorPlaceholder]}*/}
{/*    onChangeText={onChangeNumber1}*/}
{/*    value={number1}*/}
{/*    // placeholder="Введите номер телефона"*/}
{/*    keyboardType="numeric"*/}
{/*/>*/}

{/*<TextInput*/}
{/*    style={[styles.input, styles.colorPlaceholder]}*/}
{/*    onChangeText={onChangeNumber2}*/}
{/*    value={number2}*/}
{/*    // placeholder="Введите номер телефона"*/}
{/*    keyboardType="numeric"*/}
{/*/>*/}

{/*<Button*/}
{/*    style={[styles.fixToText, styles.buttonQuestion]}*/}
{/*    title="?"*/}
{/*    color="#f194ff"*/}
{/*    onPress={() => Alert.alert('Button with adjusted color pressed')}*/}
{/*/>*/}


{/*<Modal style={styles.buttonNext} visible={modalWindow}>*/}
{/*    <View style={gStyle.main} >*/}
{/*        <AntDesign name="close" size={24} color="black" style={styles.buttonNext} onPress={() => setModalWindow(false)} />*/}
{/*        <Text style={gStyle.title}>Инструкция по заполнению</Text>*/}
{/*    </View>*/}
{/*</Modal>*/}
{/*<AntDesign name="questioncircleo" size={36} color="black" style={styles.buttonNext} onPress={() => setModalWindow(true)} />*/}

{/*<Button*/}
{/*    style={[styles.fixToText, styles.buttonNext]}*/}
{/*    title="Далее"*/}
{/*    color="#f194ff"*/}
{/*    onPress={loadScene}*/}
{/*/>*/}