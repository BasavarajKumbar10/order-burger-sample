import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NaviagationItem from './NavigationItem/NavigationItem'
import NavigationItems from './NavigationItems'


configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper ;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render 2 NaviagationItem if not authenticated', () => {
        expect(wrapper.find(NaviagationItem)).toHaveLength(2);
    })

    it('should render 3 NaviagationItem if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NaviagationItem)).toHaveLength(3);
    })
})