import styled from "styled-components"

export const ContainerModal = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.3);
`

export const ContentModal = styled.div`
	position: relative;

	width: 90%;
	min-height: 270px;

	background-color: var(--GrayDark);
	@media (min-width: 768px) {
		width: 370px;
	}
`

export const HeaderModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 1rem;
	width: 100%;

	background-color: var(--Gray);

	h2 {
		font-weight: 700;
		font-size: 11px;
		color: var(--GrayLigth);

		@media (min-width: 768px) {
			font-size: 14px;
		}
	}

	button {
		color: var(--Gray2);
	}
`

export const BodyModal = styled.div`
	padding: 1rem;

	.container-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`
