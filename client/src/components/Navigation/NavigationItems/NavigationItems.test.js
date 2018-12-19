import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach(() => {
        // wrapper.setProps({isAuthenticated: true});
        wrapper = shallow(<NavigationItems />);
    });
    it('should render four <NavigationItems /> items', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(4);
    });
    it('should render four <NavigationItems /> items', () => {
        expect(wrapper.contains(<NavigationItem link='/noise'>Noise</NavigationItem>)).toEqual(true);
    });
});

