import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"

import {
	NavStyled,
	HomeStyled,
	HearderHome,
	MainStyled,
	DivBorder,
} from "./style"
import { ButtonStyled } from "../../components/Button/style"
import Logo from "../../assets/Logo.svg"
import ListTech from "../../components/ListTech/ListTech"
import api from "../../services/api"
import ModalCad from "../../components/ModalCad/ModalCad"
import ModalEdit from "../../components/ModalEdit/ModalEdit"

function Home({ authorization, setAuthorization }) {
	const [openModal, setOpenModal] = useState(false)
	const [openModalEdit, setOpenModalEdit] = useState(false)
	const [userData, setUserData] = useState([])
	const [idTech, setIdTech] = useState("")
	const [techName, setTechName] = useState("")

	function getData() {
		const user = JSON.parse(localStorage.getItem("@kenziehub:data"))

		api.get(`/users/${user.id}`).then((response) =>
			setUserData(response.data)
		)
	}

	useEffect(() => {
		getData()
	}, [])

	function handleNewTechs(data) {
		if (data.title === "" || data.status === "empty") {
			return toast.error("Preencha todos os campos", {
				theme: "dark",
			})
		} else {
			setOpenModal(false)

			api.post("/users/techs", data, {
				headers: {
					Authorization: `Bearer ${JSON.parse(
						localStorage.getItem("@kenziehub:token")
					)}`,
				},
			})
				.then((_) => {
					getData()
					toast.success("Tecnologia criada com sucesso", {
						theme: "dark",
						autoClose: 4000,
					})
				})
				.catch((error) => {
					toast.error(`${error?.data.message}`, {
						theme: "dark",
						autoClose: 4000,
					})
				})
		}
	}

	function handleOpenModalEdit(e) {
		let techId = e.target.id
		let techName = e.target.innerText
		setOpenModalEdit(true)
		setIdTech(techId)
		setTechName(techName)
	}

	function handleEdit({ status }) {
		const dataChange = { status: status }

		api.put(`/users/techs/${idTech}`, dataChange, {
			headers: {
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem("@kenziehub:token")
				)}`,
			},
		})
			.then((_) => {
				getData()
				setOpenModalEdit(false)
				toast.success("Alteração feita com sucesso", {
					theme: "dark",
					autoClose: 4000,
				})
			})
			.catch((error) => toast.error(`${error.data?.message}`), {
				theme: "dark",
				autoClose: 4000,
			})
	}

	function handleDelete(techId) {
		setOpenModalEdit(false)
		api.delete(`/users/techs/${techId}`, {
			headers: {
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem("@kenziehub:token")
				)}`,
			},
		})
			.then((_) => {
				toast.success("Tecnologia excluída com sucesso", {
					theme: "dark",
					autoClose: 4000,
				})
				getData()
			})
			.catch((error) =>
				toast.error(`${error.data.message}`, {
					theme: "dark",
					autoClose: 4000,
				})
			)
	}

	function handlerLogout() {
		localStorage.clear()
		setAuthorization(false)
	}

	if (!authorization) {
		return <Redirect to="/" />
	}

	return (
		<HomeStyled>
			<NavStyled>
				<img src={Logo} alt="Logo" />
				<ButtonStyled
					width="80px"
					height="32px"
					heightMedia="40px"
					widthMedia="67px"
					color="--GrayDark"
					onClick={handlerLogout}
				>
					Sair
				</ButtonStyled>
			</NavStyled>

			<DivBorder />

			<HearderHome>
				<h1>Olá, {userData?.name}</h1>
				<p>{userData?.course_module}</p>
			</HearderHome>

			<DivBorder />

			<MainStyled>
				<div className="main-header">
					<h2>Tecnologias</h2>
					<ButtonStyled
						width="32px"
						height="32px"
						widthMedia="32px"
						heightMedia="32px"
						color="--GrayDark"
						onClick={() => setOpenModal(true)}
					>
						+
					</ButtonStyled>
				</div>

				<div className="main-body">
					<ul>
						<ListTech
							userData={userData}
							handleOpenModalEdit={handleOpenModalEdit}
							handleDelete={handleDelete}
						/>
					</ul>
				</div>
			</MainStyled>

			{openModal && (
				<ModalCad
					setOpenModal={setOpenModal}
					openModal={openModal}
					handleNewTechs={handleNewTechs}
					setOpenModalEdit={setOpenModalEdit}
				/>
			)}

			{openModalEdit && (
				<ModalEdit
					setOpenModal={setOpenModal}
					openModal={openModal}
					setOpenModalEdit={setOpenModalEdit}
					handleEdit={handleEdit}
					techName={techName}
					handleDelete={handleDelete}
					idTech={idTech}
				/>
			)}
		</HomeStyled>
	)
}

export default Home
