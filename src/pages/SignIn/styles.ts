import styled from 'styled-components';
import backgroundImg from '../../assets/Background.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	//background: url(${backgroundImg}) no-repeat;
	//background-size: cover;
	//background-position: center;
	height: 100vh;

	img {
		position: absolute;
		top: -8rem;
	}

	p {
		color: var(--error);
	}
`;
