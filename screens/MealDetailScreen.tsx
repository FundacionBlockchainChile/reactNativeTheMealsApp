import { View, Text, StyleSheet, Button } from 'react-native'

import React from 'react'

const MealDetailScreen = ({ route, navigation }: any) => {
  // const { mealId, info } = route.params

  // const [count, setCount] = React.useState(0)

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <View style={styles.btnContainer}>
  //         <View style={styles.btn}>
  //           <Button onPress={() => setCount((c) => c + 1)} title="Add" />
  //         </View>
  //         <View style={styles.btn}>
  //           <Button onPress={() => setCount((c) => c - 1)} title="Substract" />
  //         </View>
  //       </View>
  //     ),
  //   })
  // }, [navigation])

  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen</Text>
      {/* <Text>mealiId: {mealId}</Text>
      <Text>info: {info}</Text>
      <Text>Count: {count}</Text>
      <Button title="Go to popToTop" onPress={() => navigation.popToTop()} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    marginHorizontal: 5,
  },
})

export default MealDetailScreen
