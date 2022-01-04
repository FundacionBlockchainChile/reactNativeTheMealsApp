import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import Colors from '../constants/Colors'
import React from 'react'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

const CategoryMealScreen = ({ navigation, route }: any) => {
  const { categoryName, categoryId } = route.params

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  )

  const renderItem = ({ item }: any) => (
    <MealItem
      title={item.title}
      onSelectMeal={() =>
        navigation.push('MealDetailScreen', {
          mealId: item.id,
          mealName: item.title,
        })
      }
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      image={item.imageUrl}
    />
  )

  return (
    <View style={styles.screen}>
      <Text style={styles.categoryTitle}>{categoryName}</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={displayMeals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '95%',
  },
  categoryTitle: {
    fontFamily: 'ariana',
    fontSize: 40,
    color: Colors.primaryColor,
  },
  // title: {
  //   fontSize: 32,
  //   color: Colors.secondaryColor,
  // },
})

export default CategoryMealScreen
