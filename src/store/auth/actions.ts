import { AuthState, Credentials, LoadingIndicator } from './types';

export enum UserActionTypes {
	SET_LOADING_INDICATOR = 'SET_LOADING_INDICATOR',
	SIGNIN_REQUEST = 'SIGNIN_REQUEST',
	SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
	SIGNIN_FAILURE = 'SIGNIN_FAILURE',
}

export function setLoadingIndicator({ isLoading, activityText }: LoadingIndicator) {
	return {
		type: UserActionTypes.SET_LOADING_INDICATOR,
		payload: { isLoading, activityText },
	};
}
export function signInRequest({ email, password }: Credentials) {
	return {
		type: UserActionTypes.SIGNIN_REQUEST,
		payload: { email, password },
	};
}

export function signInSuccess(authState: AuthState) {
	return {
		type: UserActionTypes.SIGNIN_SUCCESS,
		payload: authState,
	};
}

export function signInFailure(authState: AuthState) {
	return {
		type: UserActionTypes.SIGNIN_FAILURE,
		payload: authState,
	};
}
