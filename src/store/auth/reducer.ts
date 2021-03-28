import { Reducer } from 'redux';
import { AuthState } from './types';
import { ActionType } from './actions';
const INITIAL_STATE: AuthState = {
	oficioId: 0,
	institucionalId: 0,
	userId: '',
	userName: '',
	token: '',
	apelido: '',
	error: { code: 0, message: '' },
	loadingIndicator: {
		isLoading: false,
		activityText: '',
	},
	expirationDate: undefined,
	isAuthenticated: false,
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionType.SET_LOADING_INDICATOR:
			return {
				...state,
				loadingIndicator: {
					isLoading: action.payload.isLoading,
					activityText: action.payload.activityText,
				},
			};
		case ActionType.SIGNIN_SUCCESS:
			return {
				...state,
				oficioId: action.payload.oficioId,
				institucionalId: action.payload.institucionalId,
				userId: action.payload.userId,
				token: action.payload.token,
				apelido: action.payload.apelido,
				userName: action.payload.userName,
				expirationDate: action.payload.expirationDate,
				isAuthenticated: action.payload.isAuthenticated,
			};

		default:
			return state;
	}
};

export default auth;
