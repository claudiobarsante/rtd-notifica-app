import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { signIn } from './sagas';
import * as matchers from 'redux-saga-test-plan/matchers';

import { signInRequest, setLoadingIndicator, signInFailure, signInSuccess } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';
import { expectSaga } from 'redux-saga-test-plan';
import { Credentials } from './types';

import sigInService from './../../services/authService';

import authReducer from './reducer';
const mockAction = {
	type: UserActionTypes.SIGNIN_REQUEST,
	payload: { email: '123@gmail.com', password: '123' },
};
/*Testando com o redux-saga-testing */
// describe('Testing signIn', () => {
// 	const sigInService = jest.fn();
// 	const mockAction = {
// 		type: UserActionTypes.SIGNIN_REQUEST,
// 		payload: { email: '123@gmail.com', password: '123' },
// 	};
// 	const it = sagaHelper()

// 	// it('should put setLoadingIndicator', result => {
// 	// 	expect(result).toEqual(
// 	// 		put(setLoadingIndicator())
// 	// 	);
// 	// 	//console.log('result => ', result);
// 	// });
// 	// it('should have called the mock signInService first', result => {
// 	// 	expect(result).toEqual(call(sigInService, { email: 'fake@email.com', password: '171' }));
// 	// });
// });

/*testando com redux-saga-test-plan */
it('setLoadingIndicator', () => {
	return expectSaga(signIn, mockAction)
		.put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
		.silentRun();
});

// it('Api', () => {
// 	return expectSaga(signIn, mockAction)
// 		.provide([[matchers.call.fn(sigInService), { email: '123@gmail.com', password: '123' }]])
// 		.dispatch(signInSuccess({ code: 400, message: 'Usuário ou senha inválidos !' }))
// 		.silentRun();
// });
const error = {
	code: 400,
	message: 'Usuário ou senha inválidos !',
};

const state = {
	currentUser: {
		apelido: '',
		institucionalId: 0,
		oficioId: 0,
		userId: '',
		userName: '',
	},
	error: { code: 400, message: 'Usuário ou senha inválidos !' },
	expirationDate: undefined,
	isAuthenticated: false,
	loadingIndicator: {
		isLoading: false,
		activityText: 'acabou o request',
	},
	token: '',
};
it('Api error', () => {
	return (
		expectSaga(signIn, mockAction)
			//.provide([[call(sigInService, { email: '12@gmail.com', password: '123' }), error]])
			.dispatch(signInFailure(error))

			.silentRun()
	);
});

it('Api', () => {
	return (
		expectSaga(signIn, mockAction)
			.withReducer(authReducer)
			//.provide([[call(sigInService, { email: '12@gmail.com', password: '123' }), error]])
			//.dispatch(signInFailure(error))
			.hasFinalState(state)
			.silentRun()
	);
});
