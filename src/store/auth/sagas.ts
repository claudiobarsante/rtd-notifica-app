import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { ActionTypes, AuthState } from './types';
import sigInService from './../../services/authServices';
import { AxiosResponse } from 'axios';
import { signInRequest, signInSuccess, signInFailure } from './actions';
import { Response } from '../../types/response';

type signInRequestType = ReturnType<typeof signInRequest>;

function* signIn(action: signInRequestType) {
	const response: AxiosResponse = yield call(sigInService, action.payload);

	if (response.data.status === Response.Ok) {
		const { access_token, claims, expires_in, userName } = response.data;
		const userClaims = JSON.parse(claims);
		const expirationDate = new Date(
			new Date().getTime() + parseInt(expires_in) * 1000 //Multiplica por 1000 p converter im miliseconds
		);

		yield put(
			signInSuccess({
				oficioId: userClaims[2].value,
				institucionalId: userClaims[1].value,
				userId: userClaims[3].value,
				userName,
				token: access_token,
				apelido: userClaims[0].value,
				error: { code: 0, message: '' },
				loadingIndicator: { isLoading: false, activityText: '' },
				expirationDate,
			})
		);
	} else {
		console.log('errouryield put(signInFailure())');
	}
}

export default function* authSaga() {
	yield all([takeLatest(ActionTypes.signInRequest, signIn)]);
}
