import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { ActionTypes, AuthState } from './types';
import sigInService from './../../services/authServices';
import { AxiosResponse } from 'axios';
import { signInRequest } from './actions';

type signInRequestType = ReturnType<typeof signInRequest>;

function* signIn(action: signInRequestType) {
	console.log('email ', action.payload);
	const response: AxiosResponse = yield call(sigInService, action.payload);
	console.log('response ', response);

	//yield put(signInSuccess({} as AuthState));
}

//export default all([takeLatest(ActionTypes.signInRequest, signIn)]);

export default function* authSaga() {
	yield all([takeLatest(ActionTypes.signInRequest, signIn)]);
}
