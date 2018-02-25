import React from 'react'
import { shallow } from 'enzyme'

import SettingsScreen from '../SettingsScreen'

describe('SettingsScreen', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<SettingsScreen />)
        expect(wrapper).toMatchSnapshot()
    })
})
