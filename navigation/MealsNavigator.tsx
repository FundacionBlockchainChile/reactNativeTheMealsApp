import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View, Platform } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MealsNavigator = () => {
  const stackNavigator = () => {
    return (
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
          options={({ route }: any) => ({
            headerTitle: route.params.categoryName,
          })}
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
          options={({ route }: any) => ({
            headerTitle: route.params.mealName,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName="star"
                  onPress={() => {
                    console.log('Mark as favorite')
                  }}
                />
                <Item
                  title="Favorite"
                  iconName="home"
                  onPress={() => {
                    console.log('Mark as favorite')
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'CategoriesScreen') {
                iconName = focused ? 'restaurant' : 'restaurant-outline'
              } else if (route.name === 'FavoritesScreen') {
                iconName = focused ? 'star' : 'star-outline'
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={30}
                  color={Colors.primaryColor}
                />
              )
            },
            tabBarActiveTintColor: Colors.primaryColor,
            tabBarInactiveTintColor: 'gray',
          })}
          // screenOptions={{
          //   headerStyle: {
          //     backgroundColor:
          //       Platform.OS === 'android' ? Colors.primaryColor : '',
          //   },
          //   headerTintColor:
          //     Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
        >
          <Tab.Screen
            name="CategoriesScreen"
            options={{
              headerShown: false,
              tabBarActiveTintColor: Colors.primaryColor,
              tabBarInactiveTintColor: 'gray',
            }}
            component={stackNavigator}
          />
          <Tab.Screen
            name="FavoritesScreen"
            options={{
              headerShown: false,
              tabBarActiveTintColor: Colors.primaryColor,
              tabBarInactiveTintColor: 'gray',
            }}
            component={FavoritesScreen}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navBtn: {
    marginRight: 100,
  },
  headerBtnContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
})

export default MealsNavigator
