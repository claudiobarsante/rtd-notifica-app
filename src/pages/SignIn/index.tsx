import { useState, useEffect } from 'react';
import { LoadingIndicator } from '../../store/auth/types';
import { Container } from './styles';
import { signInRequest } from './../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/configureStore';
import { useHistory } from 'react-router';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const { isLoading, activityText } = useSelector<State, LoadingIndicator>(
		state => state.auth.loadingIndicator
	);
	const isAuthenticated = useSelector<State, boolean>(state => state.auth.isAuthenticated);

	const handleSubmit = () => {
		console.log('passe ');
		dispatch(signInRequest({ email: 'user@demo.com.br', password: 'Demo@2020' }));
	};
	const history = useHistory();

	console.log('isAuth ', isAuthenticated);

	if (isAuthenticated) history.push('/overview');

	useEffect(() => {
		console.log('passei no useEffect');
		dispatch(signInRequest({ email: 'ser@demo.com.br', password: 'Demo@2020' }));
		console.log('depois passei no useEffect->');
	}, [dispatch]);

	return (
		<Container>
			<h1>signin</h1>
			<p>{`isLoading === ${isLoading} e activitytext=>${activityText}`}</p>
			<form onSubmit={() => handleSubmit()}>
				<input
					type='text'
					placeholder='email'
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<button type='submit'>submit</button>
			</form>
		</Container>
	);
};

export default SignIn;
