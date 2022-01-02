import { View, Text, StyleSheet, Button } from 'react-native'
import Colors from '../constants/Colors'

import React from 'react'

const CategoryMealScreen = ({ navigation, route }: any) => {
  const { categoryName } = route.params

  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen</Text>
      <Text style={styles.categoryTitle}>{categoryName}</Text>
      {/* <Button
        title="Go Meal Details"
        onPress={() =>
          navigation.navigate('MealDetailScreen', {
            mealId: 21,
            info: 'lorem ipsum seclorum...',
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="popToTop" onPress={() => navigation.popToTop()} />
      <Button
        title="replace"
        onPress={() => navigation.replace('FiltersScreen')}
      />
      <Button
        title="Go to Meals"
        onPress={() => navigation.push('CategoryMealScreen')}
      />
      <Button
        title="Go to Categories"
        onPress={() => navigation.push('CategoriesScreen')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontFamily: 'ariana',
    fontSize: 40,
    color: Colors.secondaryColor,
  },
})

export default CategoryMealScreen
