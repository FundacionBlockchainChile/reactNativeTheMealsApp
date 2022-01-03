import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTitle from '../components/CategoryGridTitle'

import React from 'react'

const CategoriesScreen = ({ navigation }: any) => {
  const renderGridItem = ({ item }: any) => {
    return <CategoryGridTitle item={item} navigation={navigation} />
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default CategoriesScreen
