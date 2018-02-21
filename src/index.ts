import { AppRegistry } from 'react-native'
import { TabNavigator } from 'react-navigation'

import ReceiveScreen from './screens/receive'
import SendScreen from './screens/send'
import SettingsScreen from './screens/settings'
import WalletScreen from './screens/wallet'

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
