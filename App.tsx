import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import CategoryMealScreen from './screens/CategoryMealScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import FiltersScreen from './screens/FiltersScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Colors from './constants/Colors'

const fetchFonts = () => {
  return Font.loadAsync({
    ariana: require('./assets/fonts/ArianaVioleta-dz2K.ttf'),
    debrosee: require('./assets/fonts/Debrosee-ALPnL.ttf'),
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const Stack = createNativeStackNavigator()

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  const LogoTitle = () => (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png',
      }}
    />
  )

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android' ? Colors.primaryColor : '',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              headerTitle: 'Categories',
            }}
          />
          <Stack.Screen
            name="CategoryMealScreen"
            component={CategoryMealScreen}
            options={{
              headerTitle: 'Meal Categories',
            }}
          />
          <Stack.Screen
            name="FavoritesScreen"
            component={FavoritesScreen}
            options={{
              headerTitle: 'Favorites',
            }}
            // options={{ headerTitle: () => <LogoTitle /> }}
          />
          <Stack.Screen
            name="FiltersScreen"
            component={FiltersScreen}
            options={{
              headerTitle: 'Filters',
            }}
          />
          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
            options={{
              headerTitle: 'Meal Details',
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navBtn: {
    marginRight: 100,
  },
})
