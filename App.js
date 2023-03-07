import * as React from 'react';
import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Main from './navigate';
import 'react-native-gesture-handler';

const fonts = () => Font.loadAsync({
   'zapfino-extra-lt': require('./assets/fonts/ZapfinoExtraLT-Four.ttf'),
   'zapfino-extra-lt-pro': require('./assets/fonts/ZapfinoForteLTPro.ttf'),
});

export default function App() {
    const [font, setFont] = useState(false);
    if(font) {
        return (
                <Main />
        );
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        );
    }
// } else {
//     const [font, setFont] = useState(false);
//     if (font) {
//     return (
//         <Main />
//     );
//     } else {
//         return (
//             <AppLoading
//                 startAsync={fonts}
//                 onFinish={() => setFont(true)}
//                 onError={console.warn}
//             />
//         );
//     }
// }

}


// const styles = StyleSheet.create({
//   mainBlock: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: '#F4F3F3',
//
//   },
//   box: {
//     width: '100%',
//     height: 50,
//     textAlign: 'center'
//   },
//   tinyLogo: {
//     width: Platform.OS === "ios" ? '71%' : '62%',
//     height: Platform.OS === "ios" ? '40%' : '30%',
//     top: '1%'
//   },
//   boxFinger: {
//     flex: 0.3,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: '#F4F3F3',
//     width: '100%'
//   },
//   boxFingerTextLeft: {
//     width: Platform.OS === "ios" ? 100 : 130,
//     height: Platform.OS === "ios" ? 47 : 98,
//     top: Platform.OS === "ios" ? -35 : 40,
//     textAlign: 'center',
//   },
//   boxFingerTextRight: {
//     width: Platform.OS === "ios" ? 100 : 140,
//     height: Platform.OS === "ios" ? 47 : 98,
//     top: Platform.OS === "ios" ? -35 : 40,
//     left: 10,
//     textAlign: 'center',
//   },
//   boxFingerImageButton: {
//     width: Platform.OS === "ios" ? 60 : 90,
//     height: Platform.OS === "ios" ? '52%' : '72%',
//     // bottom: Platform.OS === "ios" ? '20%' : 10,
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth
//   },
//
// });
