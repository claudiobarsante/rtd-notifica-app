import React from 'react';
import { ActionButton, Container, PageButton } from './styles';

interface Props {
	pages: number[];
	onClick(currentPage: number): void;
	currentPage: number;
}

const Pagination = ({ pages, onClick, currentPage }: Props) => {
	return (
		<Container>
			<ActionButton>Anterior</ActionButton>
			{pages.map(page => {
				console.log('page ', page, currentPage, currentPage === page);
				return (
					<PageButton
						key={page}
						onClick={() => onClick(page)}
						clicked={currentPage === page ? true : false}
					>
						<span>{page}</span>
					</PageButton>
				);
			})}

			<ActionButton>Próximo</ActionButton>
		</Container>
	);
};

export default Pagination;
