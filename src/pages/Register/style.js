import styled, { css, keyframes } from "styled-components"

const showRegister = keyframes`
	from {
		opacity: 0;
		transform: translateY(70px)
	}
	to {
		opacity: 1;
		transform: translateY(0px)
	}
`

export const RegisterStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	animation: ${showRegister} 0.5s;
`

export const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	margin-top: 2.1rem;
	padding: 1rem;

	@media (min-width: 500px) {
		width: 70%;
	}

	@media (min-width: 748px) {
		width: 370px;
	}
`

export const ContainerForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow-y: auto;

	color: var(--GrayLigth);

	width: 90%;

	@media (min-width: 500px) {
		width: 70%;
	}
	@media (min-width: 748px) {
		width: 370px;
	}

	background-color: var(--GrayDark);

	margin-top: 1rem;
	padding: 2rem 1.2rem 1rem 1.2rem;

	h2 {
		margin-bottom: 1.8rem;
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

export const ContainerSelect = styled.div`
	width: 100%;
	color: var(--GrayLigth);

	> div {
		margin-bottom: 17px;

		span {
			font-size: 10px;
			@media (min-width: 748px) {
				font-size: 12px;
			}
		}

		.error {
			margin-left: 8px;
			color: var(--Negative);
		}
	}

	select {
		background: transparent;
		width: 100%;
		height: 38px;
		border: 1px solid var(--Gray);
		border-radius: 4px;

		padding: 10px;

		font-weight: 400;
		color: var(--GrayLigth);

		${(props) =>
			props.isErrored &&
			css`
				border: 1px solid var(--Negative);
			`}
	}

	option {
		background-color: var(--GrayDark);
	}
`
