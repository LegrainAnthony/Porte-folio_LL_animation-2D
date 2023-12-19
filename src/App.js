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
import Footer from "./components/Footer/Footer.js";

function App() {
	const [lock, setLock] = useState(true);

	const [is3020Page, setIs3020page] = useState(false);
	const [isHomePage, setIsHomePage] = useState(false);

	console.log(is3020Page, isHomePage);

	function getTheCurrentPage() {
		let loc = window.location.pathname;
		if (loc === "/Movie3020") {
			setIsHomePage(false);
			setIs3020page(true);
			return;
		}
		if (loc === "/") {
			setIsHomePage(true);
			setIs3020page(false);
			return;
		}
		setIs3020page(false);
		setIsHomePage(false);
	}

	// if (lock === true) {
	// 	let mdp = prompt(`Le site nécessite un mot de passe`);
	// 	if (mdp === "demoreellouise") {
	// 		setLock(false);
	// 	}
	// } else {
	return (
		<>
			<link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
			<AppContainer is3020={is3020Page}>
				<Navigation is3020={is3020Page} isHome={isHomePage} />
				<Routes>
					<Route path="/" element={<Home getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
					<Route path="/Animation2D" element={<Animation2D getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
					<Route path="/Movie3020" element={<Movie3020 getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
					<Route path="/Illustration" element={<Illustration getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
					<Route path="/Contact" element={<Contact getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
					<Route path="/Animation2D/MovieCJMSFV" element={<Cjmsfv getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
					<Route path="*" element={<Home getTheCurrentPage={getTheCurrentPage} is3020={is3020Page} />} />
				</Routes>
				<Footer is3020={is3020Page} isHome={isHomePage} />
			</AppContainer>
		</>
	);
}
// }

export default App;
