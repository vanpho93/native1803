import { createStore } from 'redux';

const defaultState = {
    temp: '30',
    cityName: 'Sai Gon',
    loading: false
};

function reducer(state = defaultState, action) {
    return state;
}

export const store = createStore(reducer);
