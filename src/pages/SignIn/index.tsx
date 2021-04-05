import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
//Types
import { Credentials } from '../../store/auth/types';
import { LoadingIndicator } from '../../types/commom';
//import { ResponseError } from '../../types/response';
import { State } from '../../store/configureStore';
//Saga actions
import { signInRequest } from './../../store/auth/actions';
//Styles
import { Container } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import rtdNotificaImg from '../../assets/rtdnotifica.png';

const SignInSchema = yup.object().shape({
	email: yup
		.string()
		.required('E-mail é um campo obrigatório')
		.email('Por favor, informe um e-mail válido'),
	password: yup.string().required('Senha é um campo obrigatório'),
});

const SignIn = () => {
	const { register, handleSubmit, errors } = useForm<Credentials>({
		resolver: yupResolver(SignInSchema),
		mode: 'onBlur',
	});

	//console.log('sign ', errors);
	const { isLoading, activityText } = useSelector<State, LoadingIndicator>(
		state => state.auth.loadingIndicator
	);
	//const { code, message } = useSelector<State, ResponseError>(state => state.auth.error);
	const isAuthenticated = useSelector<State, boolean>(state => state.auth.isAuthenticated);

	const dispatch = useDispatch();

	const submitForm = async ({ email, password }: Credentials) => {
		dispatch(signInRequest({ email: 'user@demo.com.br', password: 'Demo@2020' }));
	};

	if (isAuthenticated) {
		return <Redirect to='/overview' />;
	}
	return (
		<Container>
			<img src={rtdNotificaImg} alt='Logo da aplicação RtdNotifica App' />

			<form onSubmit={handleSubmit(submitForm)}>
				<ErrorMessage name='email' errors={errors} render={({ message }) => <p>{message}</p>} />
				<Input
					id='email'
					name='email'
					type='text'
					placeholder='E-mail do usuário'
					inputRef={register}
					error={errors.email?.message}
					icon={AiOutlineUser}
				/>

				<ErrorMessage name='password' errors={errors} render={({ message }) => <p>{message}</p>} />
				<Input
					id='password'
					name='password'
					type='password'
					placeholder='Senha do usuário'
					inputRef={register}
					error={errors.password?.message}
					icon={AiOutlineLock}
				/>

				<Button type='submit'>Entrar</Button>
			</form>
		</Container>
	);
};

export default SignIn;
