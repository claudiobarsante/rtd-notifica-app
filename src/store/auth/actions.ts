import { AuthState, Credentials, LoadingIndicator } from './types';

export enum ActionType {
	SET_LOADING_INDICATOR = 'SET_LOADING_INDICATOR',
	SIGNIN_REQUEST = 'SIGNIN_REQUEST',
	SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
	SIGNIN_FAILURE = 'SIGNIN_FAILURE',
}

export function setLoadingIndicator({ isLoading, activityText }: LoadingIndicator) {
	return {
		type: ActionType.SET_LOADING_INDICATOR,
		payload: { isLoading, activityText },
	};
}
export function signInRequest({ email, password }: Credentials) {
	return {
		type: ActionType.SIGNIN_REQUEST,
		payload: { email, password },
	};
}

export function signInSuccess(authState: AuthState) {
	return {
		type: ActionType.SIGNIN_SUCCESS,
		payload: authState,
	};
}

export function signInFailure(authState: AuthState) {
	return {
		type: ActionType.SIGNIN_FAILURE,
		payload: authState,
	};
}
