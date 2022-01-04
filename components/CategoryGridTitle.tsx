import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const CategoryGridTitle = ({ item, navigation }: any) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('CategoryMealScreen', {
          categoryName: item.title,
          categoryId: item.id,
        })
      }
      style={styles.gridItem}
    >
      <View>
        <Text style={[styles.gridItemText, { color: item.color }]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
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
    shadowColor: Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.6,
    shadowRadius: 9.51,

    elevation: 15,
  },
  gridItemText: {
    color: Colors.secondaryColor,
    fontFamily: 'ariana',
    fontSize: 30,
  },
})

export default CategoryGridTitle
