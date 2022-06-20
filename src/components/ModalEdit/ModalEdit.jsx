import React from "react"
import { useForm } from "react-hook-form"

import Modal from "../Modal/Modal"
import Input from "../Input/Input"
import ButtonStyled from "../Button/Button"
import { ContainerSelect } from "../../pages/Home/style"

function ModalEdit(
	setOpenModalEdit,
	handleEdit,
	techName,
	handleDelete,
	idTech
) {
	const { register, handleSubmit } = useForm()

	return (
		<Modal title="Tecnologia Detalhes" setOpenModalEdit={setOpenModalEdit}>
			<form onSubmit={handleSubmit(handleEdit)}>
				<Input
					label="Nome do projeto"
					register={register}
					name="title"
					value={techName}
					disabled={true}
				/>
				<ContainerSelect>
					<div>
						<span>Selecionar status</span>
					</div>
					<select {...register("status")}>
						<option>Iniciante</option>
						<option>Intermediário</option>
						<option>Avançado</option>
					</select>
				</ContainerSelect>

				<ButtonStyled
					width="160px"
					heigth="38px"
					widthMedia="204px"
					heightMedia="48px"
					color="--Color-primary-Negative"
					type="submit"
				>
					Salvar Alterações
				</ButtonStyled>
				<ButtonStyled
					width="78px"
					heigth="38px"
					widthMedia="98px"
					heightMedia="48px"
					color=" --Gray2"
					margin="12px"
					type="button"
					onClick={() => handleDelete(idTech)}
				>
					Excluir
				</ButtonStyled>
			</form>
		</Modal>
	)
}

export default ModalEdit
