import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Redirect, useHistory } from "react-router-dom"
import { toast } from "react-toastify"

import Logo from "../../assets/Logo.svg"
import Input from "../../components/Input/Input"
import { ContainerForm, LoginStyled } from "./style"
import ButtonStyled from "../../components/Button/Button"
import api from "../../services/api"

function Login({ authorization, setAuthorization }) {
	const history = useHistory()

	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Insira um email válido")
			.required("Campo obrigátorio"),
		password: yup
			.string()
			.min(8, "Mínimo oito digitos")
			.required("Campo obrigátorio"),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const handleSubmitForm = (data) => {
		api.post("/sessions", data)
			.then((response) => {
				localStorage.setItem(
					"@kenziehub:token",
					JSON.stringify(response.data.token)
				)
				localStorage.setItem(
					"@kenziehub:data",
					JSON.stringify(response.data.user)
				)

				setAuthorization(true)
				return history.push("/home")
			})
			.catch((error) => {
				toast.error(`${error.response?.data?.message}`, {
					theme: "dark",
					autoClose: 4000,
				})
			})
	}

	if (authorization) {
		return <Redirect to="/home" />
	}

	return (
		<LoginStyled>
			<img src={Logo} alt="Logo" />
			<ContainerForm onSubmit={handleSubmit(handleSubmitForm)}>
				<h2>Login</h2>

				<Input
					label="Email"
					placeholder="Digite seu email"
					register={register}
					name="email"
					error={errors.email?.message}
				/>
				<Input
					label="Senha"
					type="password"
					placeholder="Digite sua senha"
					register={register}
					name="password"
					error={errors.password?.message}
				/>

				<ButtonStyled type="submit" color="--Color-primary">
					Entrar
				</ButtonStyled>

				<span>Ainda não possui uma conta?</span>

				<ButtonStyled
					onClick={() => history.push("/register")}
					color="--Gray2"
				>
					Cadastre-se
				</ButtonStyled>
			</ContainerForm>
		</LoginStyled>
	)
}

export default Login
