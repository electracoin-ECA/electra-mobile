import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import WalletScreen from './screens/wallet'
import ReceiveScreen from './screens/receive'
import SendScreen from './screens/send'
import SettingsScreen from './screens/settings'

export default TabNavigator(
  {
    Wallet: { screen: WalletScreen },
    Send: { screen: SendScreen },
    Receive: { screen: ReceiveScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    tabBarPosition: 'bottom',
  }
)
