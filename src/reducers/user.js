// local dependencies
import { USER } from '../actions/types';

const initial = {
    expectAnswer: false,
    settings: {
        firstName: 'User',
        lastName: '',
        age: '20'
    }
};

export default function ( state = initial, action) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case USER.PRELOADER:
            state = {...state, ...options };
            break;
        case USER.UPDATE_DATA:
            state = {...state, settings: options };
            break;
    }
    return state;
}
