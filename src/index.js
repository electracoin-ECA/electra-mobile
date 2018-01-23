import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeScreen from './screens/home'
import ReceiveScreen from './screens/receive'
import SendScreen from './screens/send'
import TransactionsScreen from './screens/transactions'

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Send: { screen: SendScreen },
    Receive: { screen: ReceiveScreen },
    Transactions: { screen: TransactionsScreen },
  },
  {
    tabBarPosition: 'bottom',
  }
)
