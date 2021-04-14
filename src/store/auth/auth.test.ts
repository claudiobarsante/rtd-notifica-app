import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import authSaga from './sagas';

import { signInRequest, setLoadingIndicator } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';

describe('Testing signIn', () => {
	const sigInService = jest.fn();
	const mockAction = {
		type: UserActionTypes.SIGNIN_REQUEST,
		payload: { email: '123@gmail.com', password: '123' },
	};
	const it = sagaHelper(authSaga());

	it('should put setLoadingIndicator', result => {
		expect(result).toEqual(
			put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
		);
		//console.log('result => ', result);
	});
	// it('should have called the mock signInService first', result => {
	// 	expect(result).toEqual(call(sigInService, { email: 'fake@email.com', password: '171' }));
	// });
});
