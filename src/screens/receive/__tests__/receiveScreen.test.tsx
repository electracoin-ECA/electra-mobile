import React from 'react'
import { shallow } from 'enzyme'

import ReceiveScreen from '../ReceiveScreen'

describe('ReceiveScreen', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<ReceiveScreen />)
        expect(wrapper).toMatchSnapshot()
    })
})
