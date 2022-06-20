import React from "react"
import { ContainerModal, ContentModal, HeaderModal, BodyModal } from "./style"

function Modal({ children, title, openModal, setOpenModal, setOpenModalEdit }) {
	function handleClick(e) {
		if (e.target.id === "container" || e.target.id === "close") {
			if (openModal === true) {
				setOpenModal(false)
			} else {
				setOpenModalEdit(false)
			}
		}
	}
	return (
		<ContainerModal id="container" onClick={(e) => handleClick(e)}>
			<ContentModal>
				<HeaderModal>
					<h2>{title}</h2>
					<button id="close" onClick={(e) => handleClick(e)}>
						X
					</button>
				</HeaderModal>
				<BodyModal>{children}</BodyModal>
			</ContentModal>
		</ContainerModal>
	)
}

export default Modal
