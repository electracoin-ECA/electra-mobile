import { AppRegistry } from 'react-native'
import { TabNavigator } from 'react-navigation'

import ReceiveScreen from './screens/receive/ReceiveScreen'
import SendScreen from './screens/send/SendScreen'
import SettingsScreen from './screens/settings/SettingsScreen'
import WalletScreen from './screens/wallet/WalletScreen'

const tabNavigator = TabNavigator(
  {
    Wallet: { screen: WalletScreen },
    Receive: { screen: ReceiveScreen },
    Send: { screen: SendScreen },
    Settings: { screen: SettingsScreen }
  },
  { tabBarPosition: 'bottom' }
)

AppRegistry.registerComponent('electramobile', () => tabNavigator)
