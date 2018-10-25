// outsource dependencies
import { fork } from 'redux-saga/effects'
// local dependencies
import login from './login'
import user from './user'

export default function* () {
    yield fork(login);
    yield fork(user);
}
