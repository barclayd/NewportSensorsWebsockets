import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Light from '../../containers/HistoricData/Light/Light';
import Record from '../../components/Record/Record';

configure({adapter: new Adapter()});

describe('<Record />', () => {
    it('should render 0 <Record /> items if no .json data loaded', () => {
        const wrapper = shallow(<Light />);
        expect(wrapper.find(Record)).toHaveLength(0);
    });

});

