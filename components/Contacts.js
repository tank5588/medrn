import Checkbox from 'expo-checkbox';
import * as React from 'react';
import { useState, useRef } from "react";
import {
    Modal,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    useWindowDimensions,
    Image,
    FlatList,
    Animated,
    TouchableOpacity, TextInput
} from 'react-native';
import { gStyle } from '../styles/style';
import Form from './Form';
import * as Font from 'expo-font';
import OnboardingItem from '../components/OnboardingItem';
import slides from "../slides";
import Paginator from './Paginator';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import {Formik} from "./formik";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';



const gray = "#91A1BD";

export default function Contacts({ navigation, item, addArticleChemistry }) { //  { navigation }
    const [news, setNews] = useState([
        { name: 'Health & Air', phoneNumber: '89119115555', key: '1', img: 'https://krot.info/uploads/posts/2021-03/1614877965_17-p-fon-gori-art-kartinki-17.jpg' },
        { name: 'Health & Air', phoneNumber: '89119115555', key: '2', img: 'https://krot.info/uploads/posts/2021-03/1614877965_17-p-fon-gori-art-kartinki-17.jpg' },
        { name: 'Health & Air', phoneNumber: '89119115555', key: '3', img: 'https://krot.info/uploads/posts/2021-03/1614877965_17-p-fon-gori-art-kartinki-17.jpg' },
    ]);
    const loadScene = () => {
        navigation.navigate('Chemistry')
    }
    const loadSceneBack = () => {
        navigation.navigate('Main')
    }
    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }
    const { width } = useWindowDimensions();
    const [text, onChangeText] = React.useState('Введите имя');
    const [number, onChangeNumber] = React.useState('Введите номер телефона');
    const [isChecked, setChecked] = useState(false);
    const Separator = () => <View style={gStyle.separator} />;
    const [modalWindow, setModalWindow] = useState(false);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
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

        const ContactForm = () => {
            return (
                <>
                    {/*<View style={gStyle.box1}>*/}
                    {/*            <FlatList*/}
                    {/*                data={slides}*/}
                    {/*                renderItem={ ({ item }) => <OnboardingItem item={item} />}*/}
                    {/*                horizontal*/}
                    {/*                showsHorizontalScrollIndicator*/}
                    {/*                pagingEnabled*/}
                    {/*                bounces={false}*/}
                    {/*                keyExtractor={(item) => item.id}*/}
                    {/*                onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX } } }], {*/}
                    {/*                    useNativeDriver: false,*/}
                    {/*                })}*/}
                    {/*                scrollEventThrottle={32}*/}
                    {/*                viewabilityConfig={viewConfig}*/}
                    {/*            />*/}
                    {/*            <View style={gStyle.paginatorNumberCircleContact}>*/}
                    {/*                <Paginator data={slides} scrollX={scrollX}   />*/}
                    {/*            </View>*/}
                    {/*</View>*/}

                    <View style={gStyle.box2}>

                             {/*Введите имя  , введите номер телефона - 2формы*/}
                            <Form addArticle={addArticle}/>

                        {/*виды химиотерапии*/}
                        <Formik
                            initialValues={{name: '', phoneNumber: '', img: ''}}
                            onSubmit={(values, action) =>{
                                addArticleChemistry(values);
                                action.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput
                                        // icon='mail'
                                        value={props.values.name}
                                        multiline
                                        placeholder='Виды химиотерапии'
                                        fontSize={11}
                                        // placeholderTextColor='#6E5573'
                                        // placeholderTextColor='gray'
                                        placeholderTextColor='#6C7A93'
                                        textAlign='center'
                                        onChangeText={props.handleChange('name')}
                                        onBlur={props.handleBlur('name')}
                                        style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}
                                    />

                                </View>
                            )}
                        </Formik>

                        {/*дата первого цикла системной терапии*/}
                        <Formik
                            initialValues={{name: '', phoneNumber: '', img: ''}}
                            onSubmit={(values, action) =>{
                                addArticleChemistry(values);
                                action.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput
                                        // icon='mail'
                                        value={props.values.name}
                                        multiline
                                        placeholder='Дата первого цикла системной терапии'
                                        fontSize={11}
                                        // placeholderTextColor='#6E5573'
                                        // placeholderTextColor='gray'
                                        placeholderTextColor='#6C7A93'
                                        textAlign='center'
                                        onChangeText={props.handleChange('name')}
                                        onBlur={props.handleBlur('name')}
                                        style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}
                                    />
                                    {/*<TextInput*/}
                                    {/*    value={props.values.phoneNumber}*/}
                                    {/*    placeholder='Сегодня 1 июля 2022'*/}
                                    {/*    // placeholderTextColor='#6E5573'*/}
                                    {/*    // placeholderTextColor='#6F94C8'*/}
                                    {/*    placeholderTextColor='#6C7A93'*/}
                                    {/*    textAlign='center'*/}
                                    {/*    textBreakStrategy="highQuality"*/}
                                    {/*    onChangeText={props.handleChange('phoneNumber')}*/}
                                    {/*    onBlur={props.handleBlur('phoneNumber')}*/}
                                    {/*    // style={[styles.input, styles.placeholderFormColor]}*/}
                                    {/*    style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}*/}
                                    {/*/>*/}
                                </View>
                            )}
                        </Formik>

                        {/*количество циклов системной терапии*/}
                        <Formik
                            initialValues={{name: '', phoneNumber: '', img: ''}}
                            onSubmit={(values, action) =>{
                                addArticleChemistry(values);
                                action.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput
                                        value={props.values.name}
                                        multiline
                                        placeholder='Количество циклов системной терапии'
                                        // placeholderTextColor='#6E5573'
                                        // placeholderTextColor='gray'
                                        placeholderTextColor='#6C7A93'
                                        fontSize={11}
                                        textAlign='center'
                                        onChangeText={props.handleChange('name')}
                                        onBlur={props.handleBlur('name')}
                                        style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}
                                    />

                                </View>
                            )}
                        </Formik>

                        {/*после какого цикла запланировано контролное обследование                        */}
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
                                        placeholder='Контрольное обследование после'
                                        fontSize={11}
                                        placeholderTextColor='#6C7A93'
                                        onChangeText={props.handleChange('phoneNumber')}
                                        onBlur={props.handleBlur('phoneNumber')}
                                        style={[styles.input, styles.topShadow, styles.bottomShadow, styles.songArtContainer, styles.songArt]}
                                    />
                                </View>
                            )}
                        </Formik>

                            {/*<Form addArticle={addArticle}/>*/}
                            {/*<Form addArticle={addArticle}/>*/}




                            <Text style={styles.baseTextLine}>    * Для того чтобы начать пользоваться приложением</Text>
                            <Text style={styles.baseTextLine}>      нужно пройти опрос, это займет несколько минут</Text>
                            <Text style={styles.baseTextLine}>    * Номер телефона необходим нам для</Text>
                            <Text style={styles.baseTextLine}>      идентификации вас в приложении</Text>
                            <View style={styles.section}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#4630EB' : undefined}
                                />
                                <Text style={styles.paragraph}>Даю согласие на обработку персональных данных</Text>
                            </View>

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
                                        <Ionicons
                                            name="close-circle-outline"
                                            style={styles.buttonNext}
                                            onPress={() => setModalWindow(false)}
                                            size={45}
                                        />

                                        {/*<AntDesign*/}
                                        {/*    name="close"*/}
                                        {/*    size={24}*/}
                                        {/*    // color="black"*/}
                                        {/*    style={styles.buttonNext}*/}
                                        {/*    onPress={() => setModalWindow(false)} />*/}
                                        <Text style={gStyle.title}>
                                            Инструкция по заполнению
                                        </Text>
                                        <Text style={gStyle.title}>
                                            1. Введите имя в поле "Введите имя"
                                        </Text>
                                        <Text style={gStyle.title}>
                                            2. Введите телефон в поле "+7(___)___-__-__"
                                        </Text>
                                        <Text style={gStyle.title}>
                                            3. Нажмите значок + под полем ввода телефона
                                        </Text>
                                        <Text style={gStyle.title}>
                                            4. Нажмите кнопку вперед со стрелочкой вправо
                                        </Text>
                                        <Text style={gStyle.title}>
                                            * кнопка располагается в крайнем нижем правом углу
                                        </Text>
                                    </View>
                                </Modal>
                                <TouchableOpacity
                                    onPress={() => setModalWindow(true)}
                                >
                                    <NeuMorph size={40}>
                                        <AntDesign name="questioncircleo" size={25} color={gray} />
                                    </NeuMorph>
                                </TouchableOpacity>

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
                </>
            )
        }

        const ContactSlider = () => {
            return (
                <>
                    {/*слайдеры*/}
                    <View style={gStyle.inner}>
                        <View style={{ flex: 3 }}>
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
                        </View>
                        <Paginator data={slides} scrollX={scrollX} />
                    </View>
                    {/*слайдеры*/}
                </>
            )
        }

        return (
        <SafeAreaView style={[gStyle.container]}>
            <ContactForm />
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    songArtContainer: {
        marginVertical: 2,
        alignItems: "center",
    },

    songArt: {
        // width: 200,
        height: 40,
        borderRadius: 11,
        borderColor: "#D7E1F3",
        borderWidth: 3,
        color: "white",
    },


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
        margin: 10,
        marginBottom: Platform.OS === "ios" ? '1%' : '2%',
        // borderWidth: 1,
        padding: 10,
        color: '#6E5573',
        borderColor: '#6E5573',
        backgroundColor: '#FBFFFF',
        // textAlignVertical: 'top',
    },
    colorPlaceholder : {
        color: '#6E5573',
    },
    baseTextLine: {
        color: '#B78DBE',
        // color: '#6C7A93',
        // color: 'gray',
        // color: 'white',
        width: Platform.OS === "ios" ? '100%' : '90%',
        fontSize: Platform.OS === "ios" ? 9 : 12,
        fontWeight: '600',
    },
    paragraph: {
        fontSize: Platform.OS === "ios" ? 10 : 14,
        top: Platform.OS === "ios" ? '2.7%' : '2%',
        left: Platform.OS === "ios" ? 10 : 12,
        width: Platform.OS === "ios" ? '90%' : '90%',
        color: '#B78DBE',
    },
    checkbox: {
        margin: 8,
        top: Platform.OS === "ios" ? -1 : 1,
        left: Platform.OS === "ios" ? 8 : 10,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        paddingVertical: 15,
    },
    text: {
        lineHeight: 30,
        marginLeft: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    separator: {
        marginVertical: 7,
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
    buttonQuestion: {
        // left: Platform.OS === "ios" ? '-10%' : '-50%',
        // flexBasis: 200,
    },
    buttonNext: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '10%',
        left: '45%',
    },
    buttonQuest: {
        marginHorizontal: Platform.OS === "ios" ? 1 : '4%',
    },
    // container1: {
    //     flexDirection: 'row',
    //     padding: 16,
    //     alignItems: 'center',
    //     // marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    // },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        marginRight: 16,
    },
    username: {
        color: 'white',
        fontSize: 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // image: {
    //     flex: 1,
    //     justifyContent: 'center',
    //
    // },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
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


