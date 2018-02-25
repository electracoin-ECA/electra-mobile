import React from 'react'
import { shallow } from 'enzyme'

import WalletScreen from '../WalletScreen'

describe('WalletScreen', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<WalletScreen />)
    })

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('sets the starting state correctly', () => {
        const { currency, balance, currentPrice } = wrapper.state()
        expect(currency).toBe('USD')
        expect(balance).toBe(0)
        expect(currentPrice).toBe(0)
    })
})
