import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import authSaga, { signIn } from './sagas';

import { signInRequest, setLoadingIndicator, signInFailure, signInSuccess } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';

import { Credentials } from './types';

import sigInService from '../../services/authService';

import authReducer from './reducer';
const mockAction = {
	type: UserActionTypes.SIGNIN_REQUEST,
	payload: { email: '123@gmail.com', password: '123' },
};

type signInRequestType = ReturnType<typeof signInRequest>;

/*Testando com o redux-saga-testing */

describe('Testing signIn', () => {
	const sigInService = jest.fn();
	const mockAction = {
		type: UserActionTypes.SIGNIN_REQUEST,
		payload: { email: '123@gmail.com', password: '123' },
	};
	const it = sagaHelper(authSaga());

	it('should put setLoadingIndicator', result => {
		console.log('result ', result);
		expect(result).toEqual(
			put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
		);
		console.log('result => ', result);
	});
	it('should have called the mock signInService first', result => {
		expect(result).toEqual(call(sigInService, { email: 'fake@email.com', password: '171' }));
	});
});
