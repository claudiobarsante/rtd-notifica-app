import React, { useState, useEffect } from 'react';
import { Credentials } from '../../store/auth/types';
import { Container } from './styles';
import { signInRequest } from './../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = ({ email, password }: Credentials) => {
		console.log('handle ', email, password);
		signInRequest({ email, password });
	};
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('passei no useEffect');
		dispatch(signInRequest({ email: 'clbmribas@gmail.com', password: 'Claudio@2021' }));
		console.log('depois passei no useEffect');
	}, [dispatch]);
	return (
		<Container>
			<h1>signin</h1>
			<form onSubmit={() => handleSubmit({ email, password })}>
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
