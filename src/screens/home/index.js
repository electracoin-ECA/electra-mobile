import ElectraJs from 'electra-js'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.electraJs = new ElectraJs({
      rpcAuth: {
        username: '',
        password: ''
      },
      rpcUri: ''
    })

    this.state = {
      currency: 'USD',
      currentPrice: 0,
      isLoading: true,
    }
  }

  componentDidMount() {
    this.electraJs.utils.getCurrentPriceIn(this.state.currency)
      .then(currentPrice => this.setState({
        currentPrice,
        isLoading: false,
      }))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        {this.state.isLoading && (
          <Text>Loading...</Text>
        )}
        {!this.state.isLoading && (
          <Text>{this.state.currentPrice} USD</Text>
        )}
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
