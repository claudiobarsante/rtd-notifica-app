import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/configureStore';
import { Container } from './styles';

import { getAllRequest } from '../../store/notificacao/actions';
import { Notificacao } from '../../store/notificacao/types';

const Overview = () => {
	const oficioId = useSelector<State, number>(state => state.auth.currentUser.oficioId);
	const filtered = useSelector<State, Notificacao[]>(
		state => state.notificacoes.filteredNotificacoes
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRequest(oficioId));
	}, [dispatch, oficioId]);

	return (
		<Container>
			<h1>Overview page</h1>
		</Container>
	);
};

export default Overview;
