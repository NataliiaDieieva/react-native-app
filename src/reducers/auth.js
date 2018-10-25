// local dependencies
import { AUTH } from '../actions/types';

const initial = {
    isAuthorized: true,
    expectAnswer: false,
    session: null,
    error: null
};

export default function ( state = initial, action) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case AUTH.PRELOADER:
            state = {...state, ...options };
            break;
        case AUTH.LOGIN.SUCCESS:
            state = {...state, isAuthorized: true};
            break;
        case AUTH.UPDATE_SESSION:
            state = {...state, session: options };
            break;
        case AUTH.LOGIN.ERROR:
            state = {...state, ...options };
            break;
        case AUTH.CLEAR:
            state = initial;
            break;
    }

    return state;
}
