import styled, { keyframes } from "styled-components"

const showLogin = keyframes`
	from {
		opacity: 0;
		transform: translateY(-70px)
	}
	to {
		opacity: 1;
		transform: translateY(0px)
	}
`

export const LoginStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;

	animation: ${showLogin} 0.5s;

	img {
		margin-top: 70px;
		@media (min-width: 1100px) {
			width: 144px;
		}
	}
`

export const ContainerForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: var(--GrayLigth);

	width: 90%;

	@media (min-width: 500px) {
		width: 70%;
	}
	@media (min-width: 748px) {
		width: 370px;
	}

	background-color: var(--GrayDark);

	margin-top: 2.5rem;
	padding: 2rem 1.2rem;

	h2 {
		margin-bottom: 2rem;
		font-size: 16px;

		@media (min-width: 748px) {
			font-size: 20px;
		}
	}

	> span {
		font-size: 10px;
		font-weight: 600;
		color: var(--Gray2);

		margin-top: 17px;
	}
`
