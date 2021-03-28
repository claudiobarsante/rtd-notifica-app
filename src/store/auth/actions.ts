import { ActionType, AuthState, Credentials, LoadingIndicator } from './types';

export function setLoadingIndicator({ isLoading, activityText }: LoadingIndicator) {
	return {
		type: ActionType.setLoadingIndicator,
		payload: { isLoading, activityText },
	};
}
export function signInRequest({ email, password }: Credentials) {
	return {
		type: ActionType.signInRequest,
		payload: { email, password },
	};
}

export function signInSuccess(authState: AuthState) {
	return {
		type: ActionType.signInSuccess,
		payload: authState,
	};
}

export function signInFailure(authState: AuthState) {
	return {
		type: ActionType.signInFailure,
		payload: authState,
	};
}
