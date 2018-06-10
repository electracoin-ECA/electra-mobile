import React from 'react'
import Dashboard from '../Dashboard'
import { shallow } from 'enzyme';


describe('Dashboard', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<Dashboard />)
        expect(wrapper).toMatchSnapshot()
    })
})
