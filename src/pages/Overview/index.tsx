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
	const [recordsPerPage, setRecordsPerPage] = useState<number>(10);
	const [page, setPage] = useState<Notificacao[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(0);

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

		const countPages = Math.ceil(filtered.length / recordsPerPage);
		let pages = [];
		for (let i = 1; i <= 20; i++) {
			pages.push(i);
		}
		setPages(pages);
	}, [dispatch, filtered.length, oficioId, recordsPerPage]);

	useEffect(() => {
		console.log('passei..........');
		if (pages) {
			loadRecordsToPage(1);
		}
	}, [loadRecordsToPage, pages]);

	const handlePageChange = useCallback(
		(currentPage: number) => {
			console.log('page cliked ', currentPage);
			loadRecordsToPage(currentPage);
			setCurrentPage(currentPage);
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
			<Pagination pages={pages} onClick={handlePageChange} currentPage={currentPage} />
		</Container>
	);
};

export default Overview;
