import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Products() {
  return (
    <View style={styles.Container}>
      <Text>Productos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})