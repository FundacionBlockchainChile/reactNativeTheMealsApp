import { View, Text, StyleSheet } from 'react-native'

import React from 'react'

const FilterScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The FilterScreen</Text>
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
})

export default FilterScreen
