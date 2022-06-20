import styled from "styled-components"

export const HomeStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const NavStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	margin-top: 0.5rem;
	padding: 1rem;

	@media (min-width: 768px) {
		max-width: 760px;
		height: 72px;
		align-items: center;
	}
`
export const DivBorder = styled.div`
	width: 100%;
	height: 2px;
	background-color: var(--GrayDark);
`

export const HearderHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 15px;

	width: 100%;
	height: 131px;

	padding: 1rem;

	h1 {
		font-size: 18px;
		color: var(--GrayLigth);
	}

	p {
		font-size: 12px;
		color: var(--Gray2);
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		max-width: 760px;
	}
`

export const MainStyled = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;

	padding: 1rem;

	.main-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h2 {
			font-weight: 600;
			font-size: 16px;
			color: var(--GrayLigth);
		}
	}

	.main-body {
		display: flex;
		flex-direction: column;

		width: 100%;
		min-height: 400px;

		padding: 1rem;
		margin-top: 1rem;

		background-color: var(--GrayDark);
		border-radius: 4px;
	}

	@media (min-width: 768px) {
		max-width: 760px;
	}

	li {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		height: 48px;

		padding: 0.8rem;
		margin-top: 16px;

		background-color: var(--Gray3);
		border-radius: 4px;

		p {
			font-weight: 700px;
			font-size: 14px;
			color: var(--White);
		}

		.edit {
			cursor: pointer;
			padding: 10px 0px;
		}

		p + p {
			font-weight: 400;
			font-size: 12px;
			color: var(--Gray2);
		}

		span {
			display: none;
		}

		@media (min-width: 768px) {
			span {
				display: inline-block;
				margin-left: 15px;
				padding: 10px;

				cursor: pointer;
			}
		}
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
	}

	option {
		background-color: var(--GrayDark);
	}
`
