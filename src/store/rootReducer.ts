import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './auth/reducer';
import test from './test/reducer';

const persistConfig = {
	key: '@rtdnotifica',
	storage,
	whitelist: ['auth'],
};

const rootReducer = combineReducers({
	auth: authReducer,
	test,
});

export default persistReducer(persistConfig, rootReducer);
