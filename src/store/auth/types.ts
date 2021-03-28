//AuthState
export type AuthError = {
	code: number;
	message: string;
};

export type LoadingIndicator = {
	isLoading: boolean;
	activityText: string;
};

export type AuthState = {
	oficioId: number;
	institucionalId: number;
	userId: string;
	userName: string;
	token: string;
	apelido: string;
	error: AuthError;
	loadingIndicator: LoadingIndicator;
	expirationDate?: Date;
	isAuthenticated: boolean;
};

//Credentials
export type Credentials = {
	email: string;
	password: string;
};
