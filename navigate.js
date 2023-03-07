import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Platform} from "react-native";
import {gStyle} from "./styles/style";

import Main from './components/Main';
import Contacts from './components/Contacts';
import Chemistry from './components/Сhemistry';
import BaseDate from './components/BaseDate';
import NumberCicle from './components/NumberCicle';
import Karta from './components/Karta';
import Kontrolnoe from './components/Kontrolnoe';
import Neom from "./components/Neom";
import Slider from "./components/Slider";
import MainMenu from "./components/MainMenu";
import News from "./components/News";
import Kalendar from "./components/Kalendar";
import Pobocka from "./components/Pobocka";
import KartaPreparatov from "./components/KartaPreparatov";
import Pomoschnik from "./components/Pomoschnik";
import Themess from "./components/Themess";
import ShemaTerapii from "./components/ShemaTerapii";
import StackScreenFind from "./components/StackScreenFind";
import PobEffect from "./components/PobEffect";

import Peretta from "./components/Peretta";
import Cyclophosphamide from "./components/Cyclophosphamide";
import Paclitaxel from "./components/Paclitaxel";
import Docetaxel from "./components/Docetaxel";
import Carboplatin from "./components/Carboplatin";
import Trastuzumab from "./components/Trastuzumab";
import Pertuzumab from "./components/Pertuzumab";
import Capecitabin from "./components/Capecitabin";
import Trastuzumabemtansine from "./components/Trastuzumabemtansine";
import Fluorouracil from "./components/Fluorouracil";
import Methotrexate from "./components/Methotrexate";


const Stack = createStackNavigator();

export default function Navigate() {

    return <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Group screenOptions={
                        {
                            headerStyle: { backgroundColor: '#E4EBF5' },
                        }
                    }>
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={
                            {
                                title: '',
                                headerTitleStyle: gStyle.screenMainHeader,
                                // headerShown: 'false',
                            }
                        }
                    />
                    <Stack.Screen
                        name="Contacts"
                        component={Contacts}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                },
                                width: '100%',
                                height: '15%',
                                // alignItems: 'right',
                                // justifyContent: 'center',
                                headerTitleAlign: 'center',
                                // headerShown: 'false'
                            }
                        }

                    />
                    <Stack.Screen
                        name="Chemistry"
                        component={Chemistry}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="BaseDate"
                        component={BaseDate}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="NumberCicle"
                        component={NumberCicle}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Karta"
                        component={Karta}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Kontrolnoe"
                        component={Kontrolnoe}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="MainMenu"
                        component={MainMenu}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                    },
                            }
                        }
                    />
                        <Stack.Screen
                            name="News"
                            component={News}
                            // options={
                            //     {
                            //         searchBarOptions: {
                            //             placeholder: "Search",
                            //         },
                            //     }
                            // }
                            // options={
                            //     {
                            //         title: 'OncoAssist',
                            //         headerTitleStyle: {
                            //             fontWeight: "400",
                            //             fontFamily: 'zapfino-extra-lt-pro',
                            //             fontSize: Platform.OS === "ios" ? 38 : 48,
                            //             height: Platform.OS === "ios" ? 45 : 58,
                            //         },
                            //     }
                            // }
                        />
                        <Stack.Screen
                            name="Kalendar"
                            component={Kalendar}
                            options={
                                {
                                    title: 'OncoAssist',
                                    headerTitleStyle: {
                                        fontWeight: "400",
                                        fontFamily: 'zapfino-extra-lt-pro',
                                        fontSize: Platform.OS === "ios" ? 38 : 48,
                                        height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                        />
                        <Stack.Screen
                            name="Pobocka"
                            component={Pobocka}
                            options={
                                {
                                    title: 'OncoAssist',
                                    headerTitleStyle: {
                                        fontWeight: "400",
                                        fontFamily: 'zapfino-extra-lt-pro',
                                        fontSize: Platform.OS === "ios" ? 38 : 48,
                                        height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                        />
                        <Stack.Screen
                            name="KartaPreparatov"
                            component={KartaPreparatov}
                            options={
                                {
                                    title: 'OncoAssist',
                                    headerTitleStyle: {
                                        fontWeight: "400",
                                        fontFamily: 'zapfino-extra-lt-pro',
                                        fontSize: Platform.OS === "ios" ? 38 : 48,
                                        height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                        />
                        <Stack.Screen
                            name="Pomoschnik"
                            component={Pomoschnik}
                            options={
                                {
                                    title: 'OncoAssist',
                                    headerTitleStyle: {
                                        fontWeight: "400",
                                        fontFamily: 'zapfino-extra-lt-pro',
                                        fontSize: Platform.OS === "ios" ? 38 : 48,
                                        height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                        />
                        <Stack.Screen
                            name="Themess"
                            component={Themess}
                            options={
                                {
                                    title: 'OncoAssist',
                                    headerTitleStyle: {
                                        fontWeight: "400",
                                        fontFamily: 'zapfino-extra-lt-pro',
                                        fontSize: Platform.OS === "ios" ? 38 : 48,
                                        height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                        />
                        <Stack.Screen
                            name="ShemaTerapii"
                            component={ShemaTerapii}
                            options={
                                {
                                    title: 'OncoAssist',
                                    headerTitleStyle: {
                                        fontWeight: "400",
                                        fontFamily: 'zapfino-extra-lt-pro',
                                        fontSize: Platform.OS === "ios" ? 38 : 48,
                                        height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                        />
                    <Stack.Screen
                        name="Neom"
                        component={Neom}
                        options={
                             {
                                 title: 'OncoAssist',
                                 headerTitleStyle: {
                                    fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                    />
                    <Stack.Screen
                        name="Slider"
                        component={Slider}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                fontWeight: "400",
                                    fontFamily: 'zapfino-extra-lt-pro',
                                    fontSize: Platform.OS === "ios" ? 38 : 48,
                                    height: Platform.OS === "ios" ? 45 : 58,
                                    },
                                }
                            }
                    />
                   <Stack.Screen
                        name="StackScreenFind"
                        component={StackScreenFind}
                        options={
                            {
                                title: 'OncoAssist',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 38 : 48,
                                height: Platform.OS === "ios" ? 45 : 58,
                                searchBarOptions: {
                                    placeholder: "Search",
                                },
                                },
                            }
                        }

                    />
                    <Stack.Screen
                        name="PobEffect"
                        component={PobEffect}
                        options={
                            {
                                title: 'Побочные эффекты',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Peretta"
                        component={Peretta}
                        options={
                            {
                                title: 'Циклофосфамид',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Cyclophosphamide"
                        component={Cyclophosphamide}
                        options={
                            {
                                title: 'Паклитаксел',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Paclitaxel"
                        component={Paclitaxel}
                        options={
                            {
                                title: 'Паклитаксел',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Docetaxel"
                        component={Docetaxel}
                        options={
                            {
                                title: 'Доцетаксел',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Carboplatin"
                        component={Carboplatin}
                        options={
                            {
                                title: 'Карбоплатин',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Trastuzumab"
                        component={Trastuzumab}
                        options={
                            {
                                title: 'Трастузумаб',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Pertuzumab"
                        component={Pertuzumab}
                        options={
                            {
                                title: 'Пертузумаб',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />

                    <Stack.Screen
                        name="Capecitabin"
                        component={Capecitabin}
                        options={
                            {
                                title: 'Капецитабин',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />

                    <Stack.Screen
                        name="Trastuzumabemtansine"
                        component={Trastuzumabemtansine}
                        options={
                            {
                                title: 'Трастузумаб Эмтанзин',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Fluorouracil"
                        component={Fluorouracil}
                        options={
                            {
                                title: 'Фторурацил',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />
                    <Stack.Screen
                        name="Methotrexate"
                        component={Methotrexate}
                        options={
                            {
                                title: 'Метотрексат',
                                headerTitleStyle: {
                                fontWeight: "400",
                                fontFamily: 'zapfino-extra-lt-pro',
                                fontSize: Platform.OS === "ios" ? 16 : 28,
                                height: Platform.OS === "ios" ? 25 : 58,
                                },
                            }
                        }
                    />

                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>;

}
