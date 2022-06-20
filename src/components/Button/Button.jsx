import React from "react"
import { ButtonStyled } from "./style"

function Button({ children, ...rest }) {
	return (
		<ButtonStyled type="button" {...rest}>
			{children}
		</ButtonStyled>
	)
}

export default Button
