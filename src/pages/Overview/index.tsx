import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/configureStore';
import { Container } from './styles';
import getAllNotificacoesService from './../../services/notificacaoService';

const Overview = () => {
	const oficioId = useSelector<State, number>(state => state.auth.currentUser.oficioId);

	useEffect(() => {
		async function getAll(oficioId: number) {
			const response = await getAllNotificacoesService(oficioId);

			console.log('reponse ', response.data);
		}

		getAll(oficioId);
	}, [oficioId]);
	return <Container>Overview</Container>;
};

export default Overview;
