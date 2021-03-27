import { Reducer } from 'redux';
import { ActionTypes, AuthState } from './types';

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
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.signInSuccess:
			return {
				...state,
				oficioId: action.payload.oficioId,
				institucionalId: action.payload.institucionalId,
				userId: action.payload.userId,
				token: action.payload.token,
				apelido: action.payload.apelido,
				userName: action.payload.userName,
				expirationDate: action.payload.expirationDate,
			};
		default:
			return state;
	}
};

export default auth;
