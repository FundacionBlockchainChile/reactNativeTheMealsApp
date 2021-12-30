import { View, Text, StyleSheet } from 'react-native'

import React from 'react'

const CategoryMealScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen</Text>
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

export default CategoryMealScreen
