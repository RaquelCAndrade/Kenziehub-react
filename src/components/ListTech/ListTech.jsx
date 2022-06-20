import React from "react"
import Tooltip from "@mui/material/Tooltip"

import Trash from "../../assets/Vector.svg"

function ListTech({ userData, handleOpenModalEdit, handleDelete }) {
	return (
		<>
			{userData?.techs?.map((tech, index) => (
				<li key={index}>
					<Tooltip title="Editar" arrow>
						<p
							className="edit"
							onClick={(e) => handleOpenModalEdit(e)}
							id={tech.id}
						>
							{tech.title}
						</p>
					</Tooltip>
					<p>
						{tech.status}
						<span onClick={() => handleDelete(tech.id)}>
							<img src={Trash} alt="Trash" />
						</span>
					</p>
				</li>
			))}
		</>
	)
}

export default ListTech
