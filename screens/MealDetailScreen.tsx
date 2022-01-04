import { View, Text, StyleSheet, Button } from 'react-native'

import React, { useState, useEffect } from 'react'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ route, navigation }: any) => {
  const [meal, setmeal]: [meal: any, setmeal: any] = useState()
  const { mealId, mealName } = route.params

  useEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId)
    setmeal(meal)
  }, [])

  if (meal) {
    return (
      <View style={styles.screen}>
        <Text>The MealDetailScreen</Text>
        <Text>{meal.id}</Text>
        <Text>{meal.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetailScreen
