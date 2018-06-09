import { AppRegistry } from 'react-native'
import SplashScreen from './components/splash/SplashScreen'
import Login from './components/login/Login'
import Registration from './components/registration/Registration'
import Dashboard from './components/dashboard/Dashboard'
import { StackNavigator } from 'react-navigation';

const MainStack = StackNavigator(
  {
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Splash: {
      screen: SplashScreen
    },
    Login: {
      screen: Login
    },
    Registration: {
      screen: Registration
    }
  },
  {
    initialRouteName: 'Splash',
    mode: 'modal',
    headerMode: 'none'
  }
);

AppRegistry.registerComponent('electramobile', () => RootStack)
