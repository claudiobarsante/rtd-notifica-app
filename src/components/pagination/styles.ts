import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ActionButton = styled.button`
	background: #fff;
	border: none;
	padding: 10px;
	color: blue;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
	margin: 0 10px;
	cursor: pointer;
`;

export const PageButton = styled.button`
	background: #fff;
	border: 2px solid #666;
	padding: 10px 15px;
	border-radius: 50%;
	height: 45px;
	width: 45px;
	position: relative;
	margin: 0 5px;
	cursor: pointer;

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
