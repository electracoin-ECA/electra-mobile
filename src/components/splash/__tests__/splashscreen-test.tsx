import React from 'react'
import { StackNavigator } from 'react-navigation'
//import { shallow } from 'enzyme';

import Login  from '../../login/Login'
import Registration from '../../registration/Registration'
import SplashScreen from '../SplashScreen'
import renderer from 'react-test-renderer';


const routeConfig = {


  Login: {
    screen: Login,
  },
  Registration: {
    screen: Registration,
  },
  Splash: {
    screen: SplashScreen
  },

};

describe('Splash Screen', () => {

  it('renders Splash Screen', () => {
      const splashNavigator = StackNavigator(routeConfig);
      let wrapper = renderer.create(<SplashScreen name='SplashScreen' navigation={splashNavigator} />).toJSON();
      expect(wrapper).toMatchSnapshot();
  })

  it('it should navigate to Registration Screen', async () => {
  })

  it('it should block the user at splash screen', async () => {

  })

})
