import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div``;

export const StyledModal = Modal.styled`
	width: 60rem;
	height: 60rem;
	display: flex;
	align-items: center;
	justify-content: center;
    background-color: var(--background-modal);

	div {
		width: 20rem;
		height: 20rem;
		display: flex;
		flex-direction: column;
	}
`;
// export const  ReactModalStyled = styled(Modal)`
// 	    width: 100%;
// 		max-width: 576px;

// 		background: var(--background-modal);
// 		border-radius: 0.24rem;

// 		padding: 3rem;
// 		position: relative;

// `;
// export const ModalContainer = styled.div`
// 	/*Modal*/
// 	.react-modal-overlay {
// 		background: rgba(0, 0, 0, 0.5);

// 		position: fixed;
// 		top: 0;
// 		bottom: 0;
// 		left: 0;
// 		right: 0;

// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 	}

// 	.react-modal-close {
// 		background: transparent;
// 		border: 0;

// 		position: absolute;
// 		right: 1.5rem;
// 		top: 1.5rem;

// 		transition: filter 0.2s;

// 		&:hover {
// 			filter: brightness(0.8);
// 		}
// 	}
// 	.react-modal-content {
// 		width: 100%;
// 		max-width: 576px;

// 		background: var(--background-modal);
// 		border-radius: 0.24rem;

// 		padding: 3rem;
// 		position: relative;
// 	}
// `;
