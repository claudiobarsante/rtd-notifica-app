import styled, { css } from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
	isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: 34rem;
	height: 5.6rem;
	background: var(--gray);
	border-radius: 1rem;
	border: 2px solid var(--gray);
	padding: 16px;
	color: var(--gray-hard);

	display: flex;
	align-items: center;
	margin-top: 0.8rem;

	${props =>
		props.isFocused &&
		css`
			border-color: var(--purple);
			color: var(--purple);
			transition: border-color 1s, color 1s;
		`}

	${props =>
		props.isErrored &&
		css`
			border-color: var(--error);
			color: var(--error);
			transition: border-color 1s, color 1s;
		`}  
    

  input {
		flex: 1;
		background: transparent;
		border: 0;
		outline: 0;
		color: var(--gray-hard);
		font-size: 1.7rem;

		&::placeholder {
			color: var(--gray-hard);
		}
	}

	svg {
		margin-right: 1.6rem;
		color: var(--purple);
	}
`;
