import { View, Text, StyleSheet, Button } from 'react-native'

import React from 'react'

const FavoritesScreen = ({ navigation }: any) => {
  return (
    <View style={styles.screen}>
      <Text>The FavoritesScreen</Text>
      {/* <Button
        title="Go to CategoryMealScreen"
        onPress={() => navigation.push('CategoryMealScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
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

export default FavoritesScreen
