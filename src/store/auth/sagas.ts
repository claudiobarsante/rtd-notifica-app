import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AuthState } from './types';
import sigInService from './../../services/authServices';
import { AxiosResponse } from 'axios';
import { signInRequest, signInSuccess, signInFailure, setLoadingIndicator } from './actions';
import { Response } from '../../types/response';
import { State } from '../configureStore';
import { UserActionTypes } from './actions';

type signInRequestType = ReturnType<typeof signInRequest>;

function* signIn(action: signInRequestType) {
	//const qq: number = yield select((state: State) => state.auth.institucionalId);
	try {
		yield put(setLoadingIndicator({ isLoading: true, activityText: 'carregando request' }));
		const response: AxiosResponse = yield call(sigInService, action.payload);
		yield put(setLoadingIndicator({ isLoading: false, activityText: 'acabou o request' }));

		if (response.status === Response.OK) {
			//
			const { access_token, claims, expires_in, userName } = response.data;

			const userClaims = JSON.parse(claims);
			const expirationDate = new Date(
				new Date().getTime() + parseInt(expires_in) * 1000 //Multiplica por 1000 p converter im miliseconds
			);

			yield put(
				signInSuccess({
					currentUser: {
						apelido: userClaims[0].value,
						institucionalId: Number(userClaims[1].value),
						oficioId: Number(userClaims[2].value),
						userId: userClaims[3].value,
						userName,
					},
					error: { code: 0, message: '' },
					expirationDate,
					isAuthenticated: true,
					loadingIndicator: { isLoading: false, activityText: '' },
					token: access_token,
				})
			);
		}
	} catch (error) {}

	// } else {
	// 	console.log('errouryield put(signInFailure())');
	// }
}

export default function* authSaga() {
	yield all([takeLatest(UserActionTypes.SIGNIN_REQUEST, signIn)]);
}
