import { NavigationContainer } from "./Header.style";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navigation = ({ is3020 }) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	const closeBurgerCurrentPage = (e) => {
		let loc = window.location.pathname;
		if (loc === e.target.getAttribute("href")) {
			handleClick();
		}
	};

	console.log(is3020);
	return (
		<>
			<NavigationContainer props={{ is3020, open }}>
				{open === true && <div className="exitDiv" onClick={handleClick}></div>}
				<div className="name__container">
					<h1 className="name Boogaloo">Louise Levasseur</h1>
					<p className="text Boogaloo">Animation 2D</p>
				</div>
				<div className="navbar__container">
					<ul className="navbar__list">
						<li className="navbar__item">
							<Link className="navbar__link AmaticSC" to="/" onClick={closeBurgerCurrentPage}>
								Accueil
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="navbar__link AmaticSC" to="/Animation2D" onClick={closeBurgerCurrentPage}>
								Animation 2D
							</Link>
						</li>
						<li className="navbar__item">
							{is3020 === true ? (
								<Link className="navbar__link AmaticSC" to="/" onClick={closeBurgerCurrentPage}>
									<img className="image-title-movie" src="images/3020.png" alt="" />
								</Link>
							) : (
								<Link className="navbar__link AmaticSC" to="/Movie3020" onClick={closeBurgerCurrentPage}>
									3020
								</Link>
							)}
						</li>
						<li className="navbar__item">
							<Link className="navbar__link AmaticSC" to="/Illustration" onClick={closeBurgerCurrentPage}>
								illustration
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="navbar__link AmaticSC" to="/Contact" onClick={closeBurgerCurrentPage}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<div className="border"></div>
				</div>
				<div className="burger__button" onClick={handleClick}>
					<MenuOutlined />
				</div>
			</NavigationContainer>
		</>
	);
};

export default Navigation;
