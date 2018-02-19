import ElectraJs from 'electra-js'
import numeral from 'numeral'
import React from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class WalletScreen extends React.Component {
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
      balance: 0,
      currency: 'USD',
      currentPrice: 0,
    }
  }

  componentDidMount() {
    this.electraJs.webServices.getCurrentPriceIn(this.state.currency)
      .then(currentPrice => this.setState({
        balance: 1122300.724543798,
        currentPrice,
      }))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#590c76"
          barStyle="light-content"
        />
        <LinearGradient
          colors={['#9619b3', '#6f1294']}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={styles.background}
        >
          <Text style={styles.balanceLabel}>
            YOUR TOTAL BALANCE
          </Text>
          <Text style={styles.balanceInEca}>
            {this.state.balance === 0
              ? '...'
              : numeral(this.state.balance).format('0,0.000')
            } ECA
          </Text>
          <Text style={styles.balanceInFiat}>
            {this.state.currentPrice === 0
              ? '...'
              : numeral(this.state.balance * this.state.currentPrice).format('0,0.00')
            } {this.state.currency}
          </Text>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  balanceLabel: {
    color: "rgba(255, 255, 255, .6)",
    fontSize: 18,
    fontWeight: '500',
  },
  balanceInEca: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: '700',
  },
  balanceInFiat: {
    color: "rgba(255, 255, 255, .8)",
    fontSize: 21,
    fontWeight: '300',
  },
})
