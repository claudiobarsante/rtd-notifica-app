import { Reducer } from 'redux';
import { AuthState } from './types';

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
	expirationDate: '',
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default auth;
