import { combineReducers } from 'redux';
import auth from './auth/reducer';
import test from './test/reducer';

export default combineReducers({
	auth,
	test,
});
