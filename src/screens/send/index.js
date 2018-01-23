import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class SendScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Send</Text>
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
