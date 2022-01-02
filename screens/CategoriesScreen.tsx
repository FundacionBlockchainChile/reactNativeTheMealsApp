import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

import React from 'react'

const CategoriesScreen = ({ navigation }: any) => {
  const renderGridItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.push('CategoryMealScreen', {
            categoryName: item.title,
          })
        }
        style={styles.gridItem}
      >
        <View>
          <Text style={styles.gridItemText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
    />
    // <View style={styles.screen}>
    //   <Text>The Cateories Screen</Text>
    // </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 15,
    height: 150,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 20,
  },
  gridItemText: {
    color: Colors.secondaryColor,
    fontFamily: 'ariana',
    fontSize: 30,
  },
})

export default CategoriesScreen
