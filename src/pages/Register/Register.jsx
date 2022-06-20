import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Redirect, useHistory } from "react-router-dom"
import { toast } from "react-toastify"

import Logo from "../../assets/Logo.svg"
import { ButtonStyled } from "../../components/Button/style"
import Input from "../../components/Input/Input"
import {
	ContainerForm,
	HeaderStyled,
	RegisterStyled,
	ContainerSelect,
} from "./style"
import api from "../../services/api"

function Register({ authorization }) {
	const history = useHistory()

	const schema = yup.object().shape({
		name: yup.string().required("Campo obrigátorio"),
		email: yup
			.string()
			.email("Insira um email válido")
			.required("Campo obrigátorio"),
		password: yup
			.string()
			.min(8, "Mínimo oito digitos")
			.required("Campo obrigátorio"),
		confirmPassword: yup
			.string()
			.required("Campo obrigátorio")
			.oneOf([yup.ref("password")], "Senhas diferentes"),
		bio: yup.string().required("Campo obrigátorio"),
		contact: yup.string().required("Campo obrigátorio"),
		course_module: yup.string().required("Campo obrigátorio"),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	function handleSubmitForm({
		name,
		email,
		password,
		bio,
		contact,
		course_module,
	}) {
		const user = { name, email, password, bio, contact, course_module }
		api.post("/users", user)
			.then((response) => {
				toast.success("Cadastro criado com sucesso", {
					theme: "dark",
					autoClose: 4000,
				})
				return history.push("/")
			})
			.catch((error) =>
				toast.error(`${error.response.data.message}`, {
					theme: "dark",
					autoClose: 4000,
				})
			)
	}

	if (authorization) {
		return <Redirect to="/home" />
	}

	return (
		<RegisterStyled>
			<HeaderStyled>
				<img src={Logo} alt="Logo" />
				<ButtonStyled
					width="80px"
					height="32px"
					heightMedia="40px"
					widthMedia="67px"
					color="--GrayDark"
					onClick={() => history.push("/")}
				>
					Voltar
				</ButtonStyled>
			</HeaderStyled>
			<ContainerForm onSubmit={handleSubmit(handleSubmitForm)}>
				<Input
					label="Nome"
					placeholder="Digite aqui seu nome"
					register={register}
					name="name"
					error={errors.name?.message}
				/>
				<Input
					label="Email"
					placeholder="Digite aqui seu email"
					register={register}
					name="email"
					error={errors.email?.message}
				/>
				<Input
					label="Senha"
					placeholder="Digite aqui sua senha"
					register={register}
					name="password"
					type="password"
					error={errors.password?.message}
				/>
				<Input
					label="Confirmar senha"
					placeholder="Digite a mesma senha"
					register={register}
					name="confirmPassword"
					type="password"
					error={errors.confirmPassword?.message}
				/>
				<Input
					label="Bio"
					placeholder="Fale sobre você"
					register={register}
					name="bio"
					error={errors.bio?.message}
				/>
				<Input
					label="Contato"
					placeholder="Opção de contato"
					register={register}
					name="contact"
					error={errors.contact?.message}
				/>

				<ContainerSelect isErrored={!!errors.course_module}>
					<div>
						<span>
							Selecionar módulo
							{errors.course_module && (
								<span className="error">
									{" "}
									- {errors.course_module.message}
								</span>
							)}
						</span>
					</div>
					<select {...register("course_module")}>
						<option value=""></option>
						<option value="Primeiro Módulo">Primeiro Módulo</option>
						<option value="Segundo Módulo">Segundo Módulo</option>
						<option value="Terceiro Módulo">Terceiro Módulo</option>
					</select>
				</ContainerSelect>
				<ButtonStyled type="submit" color="--Color-primary-Negative">
					Cadastrar
				</ButtonStyled>
			</ContainerForm>
		</RegisterStyled>
	)
}

export default Register
