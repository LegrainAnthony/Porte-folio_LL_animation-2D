import "./App.css";
import "./font.css";
import "./reset.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Animation2D from "./pages/Animation2d/Animation2d";
import Movie3020 from "./pages/3020/Movie3020";
import Illustration from "./pages/Illustration/Illustration";
import Contact from "./pages/Contact/Contact";
import Cjmsfv from "./pages/CJMSFV/Cjmsfv";
import Navigation from "./components/Header/Header";
import { AppContainer } from "./App.style.js";

function App() {
	const [lock, setLock] = useState(true);

	const [is3032page, setIs3032page] = useState(false);

	function getTheCurrentPage() {
		let loc = window.location.pathname;
		if (loc === "/Movie3020") {
			setIs3032page(true);
			return;
		}
		setIs3032page(false);
	}

	// if (lock === true) {
	// 	let mdp = prompt(`Le site nécessite un mot de passe`);
	// 	if (mdp === "demoreellouise") {
	// 		setLock(false);
	// 	}
	// } else {
	return (
		<>
			<AppContainer is3020={is3032page}>
				<Navigation is3020={is3032page} />
				<Routes>
					<Route path="/" element={<Home getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
					<Route path="/Animation2D" element={<Animation2D getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
					<Route path="/Movie3020" element={<Movie3020 getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
					<Route path="/Illustration" element={<Illustration getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
					<Route path="/Contact" element={<Contact getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
					<Route path="/Animation2D/MovieCJMSFV" element={<Cjmsfv getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
					<Route path="*" element={<Home getTheCurrentPage={getTheCurrentPage} is3020={is3032page} />} />
				</Routes>
			</AppContainer>
		</>
	);
}
// }

export default App;
