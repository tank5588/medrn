import * as React from 'react';
import {useRef, useState} from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    View,
    Button,
    TextInput,
    SafeAreaView,
    Modal,
    Text,
    FlatList,
    Animated,
    TouchableOpacity, ScrollView
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {gStyle} from "../styles/style";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import slides from "../slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import FormChemistry from './FormChemistry';
import pins from "../pins";
import Pin from "./Pin";


const gray = "#91A1BD";

export default function Chemistry({ navigation }) { //  { navigation }
    const loadSceneBaseDate = () => {
        // navigation.navigate('BaseDate')
        navigation.navigate('MainMenu')
    }
    const loadSceneBack = () => {
        navigation.navigate('Contacts')
    }
    const [text, onChangeText] = React.useState('Виды химиотерапии');
    const Separator = () => <View style={gStyle.separator} />;
    const [checked, setChecked] = React.useState('first');
    const data = [
        {
            label: 'предоперационная',
            accessibilityLabel: 'Your label'
        },
        {
            label: 'послеоперационная',
            accessibilityLabel: 'Your label'
        },
        {
            label: 'химиотерапия линий',
            accessibilityLabel: 'Your label'
        }
    ];
    const addArticleChemistry = (article) => {
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

        return(
            <SafeAreaView style={gStyle.container}>
                <View style={gStyle.box11111}>
                    <ScrollView>
                        <View style={styles.container}>
                            {/*первая колонка*/}
                            <View style={styles.column1}>
                                {pins
                                    .filter((_, index) => index % 2 === 0)
                                    .map( (item) => (<Pin item={item} key={item.id} />) )
                                }
                            </View>
                            {/*вторая колонка*/}
                            <View style={styles.column2}>
                                {pins
                                    .filter((_, index) => index % 2 === 1)
                                    .map( (item) => (<Pin item={item} key={item.id} />) )
                                }
                            </View>
                        </View>
                    </ScrollView>
                {/*    <FlatList*/}
                {/*        data={slides}*/}
                {/*        renderItem={ ({ item }) => <OnboardingItem item={item} />}*/}
                {/*        horizontal*/}
                {/*        showsHorizontalScrollIndicator*/}
                {/*        pagingEnabled*/}
                {/*        bounces={false}*/}
                {/*        keyExtractor={(item) => item.id}*/}
                {/*        onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX } } }], {*/}
                {/*            useNativeDriver: false,*/}
                {/*        })}*/}
                {/*        scrollEventThrottle={32}*/}
                {/*        viewabilityConfig={viewConfig}*/}
                {/*    />*/}
                {/*    <View style={gStyle.paginatorNumberCircleContact1}>*/}
                {/*        <Paginator data={slides} scrollX={scrollX}   />*/}
                {/*    </View>*/}
                {/*    /!*<Paginator data={slides} scrollX={scrollX} style={gStyle.paginatorNumberCircle}  />*!/*/}
                {/*</View>*/}
                {/*<View style={gStyle.box222222}>*/}
                {/*    <FormChemistry addArticleChemistry={addArticleChemistry}/>*/}

                {/*    <RadioButtonRN*/}
                {/*        data={data}*/}
                {/*        selectedBtn={(e) => console.log(e)}*/}
                {/*        icon={*/}
                {/*            <Icon*/}
                {/*                name="check-circle"*/}
                {/*                size={26}*/}
                {/*                color="#2c9dd1"*/}
                {/*            />*/}
                {/*        }*/}
                {/*        style={styles.justifyContent}*/}
                {/*    />*/}



                    {/*нижнее меню*/}
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
                    {/*<AntDesign name="questioncircleo" size={36} color="black" style={styles.buttonNext} onPress={() => setModalWindow(true)} />*/}

                    {/*<Button*/}
                    {/*    style={[styles.fixToText, styles.buttonNext ]}*/}
                    {/*    title="Далее"*/}
                    {/*    color="#f194ff"*/}
                    {/*    onPress={loadSceneBaseDate}*/}
                    {/*/>*/}
                        <TouchableOpacity
                            onPress={() => setModalWindow(true)}
                        >
                            <NeuMorph size={40}>
                                <AntDesign name="questioncircleo" size={25} color={gray} />
                            </NeuMorph>
                        </TouchableOpacity>
                    {/*<AntDesign name="questioncircleo" size={36} color="black" style={styles.buttonQuest} onPress={() => setModalWindow(true)} />*/}
                        <TouchableOpacity
                            onPress={loadSceneBaseDate}
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
    container: {
        padding: 10,
        flexDirection: 'row',
    },

    column1: {
        flex: 1,

    },
    column2: {
        flex: 1,
        top: 50,
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
    // baseTextLine: {
    //     color: '#B78DBE',
    // },
    paragraph: {
        fontSize: Platform.OS === "ios" ? 15 : 18,
        top: Platform.OS === "ios" ? 5 : 3,
        left: Platform.OS === "ios" ? 10 : 12,
    },
    // checkbox: {
    //     margin: 8,
    //     top: Platform.OS === "ios" ? 10 : 9,
    //     left: Platform.OS === "ios" ? 8 : 10,
    // },
    // wrapper: {
    //     display: "flex",
    //     flexDirection: "row",
    //     alignContent: "center",
    //     paddingVertical: 15,
    // },
    // text: {
    //     lineHeight: 30,
    //     marginLeft: 10,
    // },
    // section: {
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    // },
    separator: {
        marginVertical: 8,
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
    justifyContent: {
        flex: Platform.OS === "ios" ? 3.8 : 1.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
    contentColor: {
        color: '#6C7A93'
    },
    buttonQuestion: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginTop: Platform.OS === "ios" ? '10%' : '50%',
        // left: Platform.OS === "ios" ? '-10%' : '-50%',
        // flexBasis: 100,
    },
    buttonNext: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: Platform.OS === "ios" ? '30%' : '50%'
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


