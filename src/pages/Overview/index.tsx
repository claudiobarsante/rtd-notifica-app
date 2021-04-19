import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/configureStore';
import { Container } from './styles';

import { getAllRequest } from '../../store/notificacao/actions';
import { Notificacao } from '../../store/notificacao/types';
import Pagination from '../../components/pagination';

const Overview = () => {
	//
	const [pages, setPages] = useState<number[]>([]);
	const [recordsPerPage, setRecordsPerPage] = useState(10);
	const [page, setPage] = useState<Notificacao[]>([]);

	const oficioId = useSelector<State, number>(state => state.auth.currentUser.oficioId);
	const filtered = useSelector<State, Notificacao[]>(
		state => state.notificacoes.filteredNotificacoes
	);

	const dispatch = useDispatch();

	const loadRecordsToPage = useCallback(
		(currentPage: number) => {
			const startIdx = (currentPage - 1) * recordsPerPage;
			let endIdx = startIdx + recordsPerPage;

			let records = [];
			if (endIdx >= filtered.length - 1) {
				records = filtered.slice(startIdx);
			} else {
				records = filtered.slice(startIdx, endIdx);
			}
			setPage(records);
		},
		[filtered, recordsPerPage]
	);

	useEffect(() => {
		dispatch(getAllRequest(oficioId));
		console.log('filtered ', filtered.length);
		const countPages = Math.ceil(filtered.length / recordsPerPage);
		let pages = [];
		for (let i = 1; i <= 20; i++) {
			pages.push(i);
		}
		setPages(pages);
	}, [dispatch, filtered.length, oficioId, recordsPerPage]);

	useEffect(() => {
		if (pages) {
			loadRecordsToPage(1);
		}
	}, [loadRecordsToPage, pages]);

	const handlePageChange = useCallback(
		(currentPage: number) => {
			console.log('page cliked ', currentPage);
			loadRecordsToPage(currentPage);
		},
		[loadRecordsToPage]
	);

	return (
		<Container>
			<h1>Overview page</h1>
			<table>
				<thead>
					<tr>
						<th>Protocolo</th>
						<th>Nome</th>
						<th>Endereco</th>
					</tr>
				</thead>
				<tbody>
					{page &&
						page.map(notificacao => (
							<tr key={notificacao.notificadoId}>
								<td>{notificacao.protocolo}</td>
								<td>{notificacao.nome}</td>
								<td>{notificacao.logradouro}</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination pages={pages} onClick={handlePageChange} />
		</Container>
	);
};

export default Overview;
