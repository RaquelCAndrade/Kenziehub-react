import styled, { css } from "styled-components"

export const Container = styled.div`
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
`

export const InputStyled = styled.div`
	input {
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

		&:focus {
			border: 1px solid var(--GrayLigth);
		}
	}
`
