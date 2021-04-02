import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import { AuthState } from './auth/types';
import logger from 'redux-logger';
import interceptor from '../utils/interceptor';
export type State = {
	auth: AuthState;
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

//interceptor();

sagaMiddleware.run(rootSaga);
