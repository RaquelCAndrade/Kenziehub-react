import React from "react"
import { Container, InputStyled } from "./style"

function Input({ label, register, name, error, ...rest }) {
	return (
		<Container>
			<div>
				<span>
					{label}{" "}
					{!!error && <span className="error"> - {error}</span>}
				</span>
			</div>
			<InputStyled isErrored={!!error}>
				<input {...register(name)} {...rest} />
			</InputStyled>
		</Container>
	)
}

export default Input
