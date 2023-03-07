import * as React from 'react';
import  {useState, useRef } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Button,
    Image,
    SafeAreaView,
    Text,
    Modal,
    Animated,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {gStyle} from "../styles/style";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Pin from '../components/Pin';
import pins from "../pins";

const gray = "#91A1BD";

export default function Karta({ navigation }) { //  { navigation }
    const loadScene = () => {
        navigation.navigate('Kontrolnoe')
    }
    const loadSceneBack = () => {
        navigation.navigate('NumberCicle')
    }
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

    return(
        <>
            <View style={gStyle.container}>
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

                    {/*рабочий вариант*/}
                    {/*<View style={{ flex: 3 }}>*/}
                    {/*<FlatList*/}
                    {/*    data={pins}*/}
                    {/*    renderItem={ ({ item }) => <Pin item={item} />}*/}
                    {/*    numColumns={2}*/}
                    {/*    vertical*/}
                    {/*    showsVerticalScrollIndicator*/}
                    {/*    bounces={true}*/}
                    {/*    keyExtractor={(item) => item.id}*/}
                    {/*    // scrollEventThrottle={32}*/}
                    {/*    viewabilityConfig={viewConfig}*/}
                    {/*/>*/}
                    {/*</View>*/}
                </View>
                <View style={gStyle.box22222}>
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

                        <TouchableOpacity
                            onPress={loadScene}
                        >
                            <NeuMorph size={40}>
                                <AntDesign name="rightcircle" size={25} color={gray}  />
                            </NeuMorph>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    column1: {
        flex: 1,

    },
    column2: {
        flex: 1,
        top: 50,
    },
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    scrollView: {
        backgroundColor: '#DEE9F7',
        marginHorizontal: 10,
    },
    heartBtn: {
        backgroundColor: '#DEE9F7',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
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
        width: '80%',
        margin: 18,
        marginBottom: Platform.OS === "ios" ? 1 : 20,
        borderWidth: 1,
        padding: 10,
        color: '#6E5573',
        borderColor: '#6E5573'
    },
    paragraph: {
        fontSize: Platform.OS === "ios" ? 15 : 18,
        top: Platform.OS === "ios" ? 5 : 3,
        left: Platform.OS === "ios" ? 10 : 12,
    },
    baseTextLine: {
        color: '#B78DBE',
        width: Platform.OS === "ios" ? '100%' : '90%',
        fontSize: Platform.OS === "ios" ? 11 : 12,
        fontWeight: '600',
        top: Platform.OS === "ios" ? 7 : 5,
        left: Platform.OS === "ios" ? 14 : 12,
    },
    fixToText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
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

{/*компонент карта препаратов*/}
{/*<Pin*/}
{/*    pin={{*/}
{/*        title: "Doksiciklin",*/}
{/*        image: "../assets/pic2.jpg"*/}
{/*    }}*/}
{/*/>*/}

{/*<Pin title={"Горы"} image={"../assets/stories/pic2.jpg"} />*/}

{/*<View styles={gStyle.pin}>*/}
{/*    <Image source={require('../assets/pic2.jpg')} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}
{/*    <Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Горы</Text>*/}
{/*</View>*/}
{/*<View styles={gStyle.pin}>*/}
{/*     <Image source={require('../assets/pic2.jpg')} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}
{/*     <Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Горы</Text>*/}
{/*</View>*/}
{/*<View styles={gStyle.pin}>*/}
{/*    <Image source={require('../assets/pic2.jpg')} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}
{/*     <Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Горы</Text>*/}
{/*</View>*/}
{/*<View styles={gStyle.pin}>*/}
{/*    <Image source={require('../assets/pic2.jpg')} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}
{/*    <Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Горы</Text>*/}
{/*</View>*/}
{/*<View styles={gStyle.pin}>*/}
{/*    <Image source={require('../assets/pic2.jpg')} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}
{/*    <Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Горы</Text>*/}
{/*</View>*/}
{/*<View styles={gStyle.pin}>*/}
{/*    <Image source={require('../assets/pic2.jpg')} style={[gStyle.imagePreparatStyle1, {backgroundColor: '#E4EBF5'}]} />*/}
{/*    <Text style={[gStyle.textGorStyle1, {backgroundColor: '#E4EBF5'}]}>Горы</Text>*/}
{/*</View>*/}
