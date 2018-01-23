import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class ReceiveScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Receive</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
