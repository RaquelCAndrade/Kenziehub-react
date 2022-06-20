import React from "react"
import { useForm } from "react-hook-form"

import Modal from "../Modal/Modal"
import Input from "../Input/Input"
import ButtonStyled from "../Button/Button"
import { ContainerSelect } from "../../pages/Home/style"

function ModalCad({ setOpenModal, openModal, handleNewTechs }) {
	const { register, handleSubmit } = useForm()

	return (
		<Modal
			title="Cadastrar Tecnologia"
			setOpenModal={setOpenModal}
			openModal={openModal}
		>
			<form onSubmit={handleSubmit(handleNewTechs)}>
				<Input label="Nome" register={register} name="title" />
				<ContainerSelect>
					<div>
						<span>Selecionar status</span>
					</div>
					<select {...register("status")}>
						<option value="empty">Selecione...</option>
						<option value="Iniciante">Iniciante</option>
						<option value="Intermediário">Intermediário</option>
						<option value="Avançado">Avançado</option>
					</select>
				</ContainerSelect>

				<ButtonStyled type="submit" color="--Color-primary">
					Cadastrar tecnologia
				</ButtonStyled>
			</form>
		</Modal>
	)
}

export default ModalCad
