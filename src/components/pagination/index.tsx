import React from 'react';
import { ActionButton, Container, PageButton } from './styles';

interface Props {
	pages: number[];
	onClick(currentPage: number): void;
}

const Pagination = ({ pages, onClick }: Props) => {
	console.log('pages ', pages);
	return (
		<Container>
			<ActionButton>Anterior</ActionButton>
			{pages.map(page => (
				<PageButton key={page} onClick={() => onClick(page)}>
					<span>{page}</span>
				</PageButton>
			))}
			<ActionButton>Próximo</ActionButton>
		</Container>
	);
};

export default Pagination;
