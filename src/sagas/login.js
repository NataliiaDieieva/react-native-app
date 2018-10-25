// outsource dependencies
import { takeEvery, call, put, take } from 'redux-saga/effects'
import fetch from 'cross-fetch';
// local dependencies
import { AUTH } from '../actions/types';
import { NavigationActions } from 'react-navigation';

export default function* () {
    yield takeEvery(AUTH.LOGIN.START, logInSaga);
    yield takeEvery(AUTH.MAKE_LOGIN, makeLogInSaga);
}

function* makeLogInSaga( action ) {
    let { type, ...options} = action;
    yield put({type: AUTH.CLEAR});
    yield put({type: AUTH.PRELOADER, expectAnswer: true});
    yield put({type: AUTH.LOGIN.START, ...options});
    let answer = yield take([AUTH.LOGIN.SUCCESS, AUTH.LOGIN.ERROR]);
    if ( answer.type === AUTH.LOGIN.SUCCESS) {
        yield put({type: AUTH.UPDATE_SESSION, ...answer.result });
        yield put({type: AUTH.PRELOADER, expectAnswer: false});
        yield put(NavigationActions.navigate({routeName: 'Private'}));
    } else {
        yield put({type: AUTH.PRELOADER, expectAnswer: false});
        yield alert( `${answer.error}` );
    }
}

function* logInSaga( action ) {
    let { type, ...options} = action;
    let result;
    try {
        result = yield call(logIn, options);
        yield put({ type: AUTH.LOGIN.SUCCESS, result });
    } catch ( error ) {
        yield put({ type: AUTH.LOGIN.ERROR, error: error.message });
    }
    yield put({ type: AUTH.LOGIN.FINISH });
}

function logIn ( options ) {
    return fetch('http://flask-api.clearclinica.dev.dfusiontech.com:19080/auth/authorize', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    })
    .then( success => {
        if ( !success.ok ) {
            throw new Error('User not found!')
        }
        return success.json();
    });
}
