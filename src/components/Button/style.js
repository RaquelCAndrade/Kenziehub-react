import styled from "styled-components"

export const ButtonStyled = styled.button`
	color: var(--GrayLigth);
	background: var(${(props) => props.color});
	border: 1px solid var(${(props) => props.color});
	width: ${(props) => props.width || "260px"};
	height: ${(props) => props.height || "38px"};

	font-weight: 500;
	font-size: 12px;

	border-radius: 4px;

	margin: 19px 0;
	margin-left: ${(props) => props.margin || "0px"};

	@media (min-width: 748px) {
		width: ${(props) => props.widthMedia || "325px"};
		height: ${(props) => props.heightMedia || "48px"};

		font-size: 14px;
	}

	:hover {
		filter: brightness(0.8);
	}
`
