import * as actionTypes from '../actions';

const initalState = {
    descriptions: {},
    placeNames: {},
    images: [],
    addresses: []
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case(actionTypes.GET_DESCRIPTIONS):
            return {
                ...state,
                descriptions: action.description
            };
        case(actionTypes.GET_PLACES):
            return {
                ...state,
                placeNames: action.places
            };
        case(actionTypes.GET_IMAGES):
            return {
                ...state,
                images: action.images
            };
        case(actionTypes.GET_ADDRESSES):
            return {
                ...state,
                addresses: action.addresses
            };
        default:
            return state;
    }
};

export default reducer;
