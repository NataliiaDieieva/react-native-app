// outsource dependencies
import { takeEvery, call, put, take } from 'redux-saga/effects';
// local dependencies
import { USER } from '../actions/types';

export default function* () {
    yield takeEvery(USER.UPDATE.START, requestUpdateDataSaga);
    yield takeEvery(USER.SAVE_CHANGES, updateUserDataSaga);
}

function* updateUserDataSaga( action ) {
    let { type, ...options} = action;
    yield put({type: USER.PRELOADER, expectAnswer: true});
    yield put({type: USER.UPDATE.START, ...options});
    let answer = yield take([USER.UPDATE.SUCCESS, USER.UPDATE.ERROR]);
    if ( answer.type === USER.UPDATE.SUCCESS) {
        yield put({type: USER.UPDATE_DATA, ...answer.result });
        yield put({type: USER.PRELOADER, expectAnswer: false});
        yield alert('Settings was changed successfully');
    } else {
        yield put({type: USER.PRELOADER, expectAnswer: false});
        yield alert( `${answer.error}` );
    }
}

function* requestUpdateDataSaga( action ) {
    let { type, ...options} = action;
    try {
        let result = yield call(updateData, options);
        yield put({ type: USER.UPDATE.SUCCESS, result });
    } catch ( error ) {
        yield put({ type: USER.UPDATE.ERROR, error: 'Something went wrong' });
    }
    yield put({ type: USER.UPDATE.FINISH });
}

function updateData ( options ) {
    return new Promise(( resolve ) => {
        setTimeout(()=>(resolve(options)),2000);
    })
}
