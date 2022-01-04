import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    ariana: require('./assets/fonts/ArianaVioleta-dz2K.ttf'),
    debrosee: require('./assets/fonts/Debrosee-ALPnL.ttf'),
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  // const LogoTitle = () => (
  //   <Image
  //     style={{ width: 50, height: 50 }}
  //     source={{
  //       uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png',
  //     }}
  //   />
  // )

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return <MealsNavigator />
}

export default App
