import ElectraJs, { CoinMarketCapCurrency } from 'electra-js'
import numeral from 'numeral'
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  balanceInEca: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 36,
    fontWeight: '700'
  },
  balanceInFiat: {
    color: 'rgba(255, 255, 255, .8)',
    fontSize: 21,
    fontWeight: '300'
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 18,
    fontWeight: '500'
  },
  container: {
    flex: 1
  }
})

export interface State {
  currency: CoinMarketCapCurrency
  balance: number
  currentPrice: number
}

export default class WalletScreen extends React.Component<{}, State> {
  private readonly electraJs: ElectraJs

  public constructor(props: object) {
    super(props)

    this.electraJs = new ElectraJs()
    this.state = {
      balance: 0,
      currency: 'USD',
      currentPrice: 0
    }
  }

  public componentDidMount() {
    this.electraJs.webServices.getCurrentPriceIn(this.state.currency)
      .then((currentPrice: number) => this.setState({
        balance: 1122300.724543798,
        currentPrice
      }))
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#590c76'
          barStyle='light-content'
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
            }
            {this.state.currency}
          </Text>
        </LinearGradient>
      </View>
    )
  }
}
