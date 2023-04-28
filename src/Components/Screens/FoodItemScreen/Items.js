import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Items() {
  return (
    <View style={styles.Container}>
      <Text>Items de comida</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})