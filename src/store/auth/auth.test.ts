import sagaHelper from 'redux-saga-testing';
import { call } from 'redux-saga/effects';
import { signIn } from './sagas';

import { signInRequest, setLoadingIndicator, signInFailure, signInSuccess } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';

import { Credentials } from './types';

import sigInService from '../../services/authService';

import authReducer from './reducer';

type signInRequestType = ReturnType<typeof signInRequest>;

/*Testando com o redux-saga-testing */
/** O LOGIN COM  email: 'user@demo.com.br', password: 'Demo@2020' é
 * o usuário padrão para testes
 */
describe('Testing signIn', () => {
	const sigInService = jest.fn();
	const mockAction = {
		type: UserActionTypes.SIGNIN_REQUEST,
		payload: { email: 'user@demo.com.br', password: 'Demo@2020' },
	};
	const it = sagaHelper(signIn(mockAction));

	it('should put setLoadingIndicator', result => {
		console.log('result ', result);
		expect(result).toEqual(
			put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
		);
		console.log('result => ', result);
	});
	it('should have called the mock signInService', result => {
		expect(result).toEqual(call(sigInService, { email: 'fake@email.com', password: '171' }));
	});
});
