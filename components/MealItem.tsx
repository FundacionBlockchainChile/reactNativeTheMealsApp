import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import Colors from '../constants/Colors'

// const Item = ({ title }: any) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// )

const MealItem = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  affordability,
  image,
}: any) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground source={{ uri: image }} style={[styles.bgImage]}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetails]}>
            <Text style={styles.text}>{duration} min</Text>
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'black',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  mealHeader: {
    height: 180,
  },
  mealDetails: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'ariana',
    fontSize: 40,
    color: 'white',
  },
  text: {
    color: Colors.secondaryColor,
  },
})

export default MealItem
