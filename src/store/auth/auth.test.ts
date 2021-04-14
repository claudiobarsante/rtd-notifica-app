import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { signIn } from './sagas';

import { signInRequest, setLoadingIndicator } from './actions';
import { UserActionTypes } from './actions';
import { LoadingIndicator } from '../../types/commom';
import { expectSaga } from 'redux-saga-test-plan';

// describe('Testing signIn', () => {
// 	const sigInService = jest.fn();
// 	const mockAction = {
// 		type: UserActionTypes.SIGNIN_REQUEST,
// 		payload: { email: '123@gmail.com', password: '123' },
// 	};
// 	const it = sagaHelper(signIn());

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

const mockAction = {
	type: UserActionTypes.SIGNIN_REQUEST,
	payload: { email: '123@gmail.com', password: '123' },
};

it('setLoadingIndicator', () => {
	return expectSaga(signIn, mockAction)
		.put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }))
		.run();
});
