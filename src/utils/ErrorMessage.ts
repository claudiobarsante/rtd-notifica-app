type ReturnedErrorMessage = {
	code: number;
	message: string;
};

export default class ErrorMessage {
	static returnMessage(errorMessage: string): ReturnedErrorMessage {
		let code = 0;
		let message = '';

		if (errorMessage.includes('code 400')) {
			code = 400;
			message = 'Usuário ou senha inválidos !';
		} else if (errorMessage.includes('code 404')) {
			code = 404;
			message = 'Serviço temporáriamente fora do ar ! Por favor, tente em alguns instantes';
		} else {
			code = 406;
			message = 'Ocorreu um erro inesperado ! Por favor tente dentro de alguns minutos';
		}

		return { code, message };
	}
}
