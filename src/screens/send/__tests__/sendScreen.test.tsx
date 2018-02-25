import React from 'react'
import { shallow } from 'enzyme'

import SendScreen from '../SendScreen'

describe('SendScreen', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<SendScreen />)
        expect(wrapper).toMatchSnapshot()
    })
})
