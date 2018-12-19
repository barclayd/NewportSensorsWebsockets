import reducer from './sensors';
import * as actionTypes from '../actions';

describe('sensors reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            descriptions: {},
            placeNames: {},
            images: [],
            addresses: []
        })
    });

    it('should store placeNames when page is rendered', () => {
        expect(reducer({
            descriptions: {},
            placeNames: {},
            images: [],
            addresses: []
        }, {type: actionTypes.GET_PLACES, places: ['Test']})).toEqual({
            descriptions: {},
            placeNames: ['Test'],
            images: [],
            addresses: []
        });
    });
});
