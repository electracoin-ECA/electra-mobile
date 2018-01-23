import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class TransactionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Transactions</Text>
        <FlatList
          data={[
            { key: 'Transaction 1' },
            { key: 'Transaction 2' },
            { key: 'Transaction 3' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
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
