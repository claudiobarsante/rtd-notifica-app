import { ActionTypes, AuthState, Credentials } from './types';

export function signInRequest({ email, password }: Credentials) {
	return {
		type: ActionTypes.signInRequest,
		payload: { email, password },
	};
}

export function signInSuccess(authState: AuthState) {
	return {
		type: ActionTypes.signInSuccess,
		payload: authState,
	};
}

export function signInFailure(authState: AuthState) {
	return {
		type: ActionTypes.signInFailure,
		payload: authState,
	};
}
