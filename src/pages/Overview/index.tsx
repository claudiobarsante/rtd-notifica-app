import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/configureStore';
import { Container } from './styles';
import getAllNotificacoesService from './../../services/notificacaoService';
import { getAllRequest } from './../../store/notificacao/actions';

const Overview = () => {
	const oficioId = useSelector<State, number>(state => state.auth.currentUser.oficioId);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRequest(oficioId));
	}, [dispatch, oficioId]);

	return <Container>Overview</Container>;
};

export default Overview;
