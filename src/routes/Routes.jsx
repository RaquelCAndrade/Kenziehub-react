import { Switch, Route } from "react-router-dom"

import React, { useState, useEffect } from "react"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Home from "../pages/Home/Home"

function Routes() {
	const [authorization, setAuthorization] = useState(false)

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("@kenziehub:token"))

		if (token) {
			setAuthorization(true)
		}
	}, [authorization])

	return (
		<Switch>
			<Route exact path="/">
				<Login
					authorization={authorization}
					setAuthorization={setAuthorization}
				/>
			</Route>
			<Route path="/register">
				<Register authorization={authorization} />
			</Route>
			<Route path="/home">
				<Home
					authorization={authorization}
					setAuthorization={setAuthorization}
				/>
			</Route>
		</Switch>
	)
}

export default Routes
