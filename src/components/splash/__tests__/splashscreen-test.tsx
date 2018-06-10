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

  it('renders correctly', async () => {
    const MyStackNavigator = StackNavigator(routeConfig);
    const rendered = renderer.create(<MyStackNavigator />).toJSON();
    expect(rendered).toMatchSnapshot();
  })

  it('it should navigate to Registration Screen', async () => {
  })

  it('it should block the user at splash screen', async () => {

  })

})
