// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// local dependencies
import auth from './auth';
import user from './user';
import { navReducer as nav } from '../navigation';

export default combineReducers({
    form,
    auth,
    nav,
    user
});
