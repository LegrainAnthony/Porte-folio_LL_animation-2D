import { NavigationContainer, NavbarItem, NavbarLink, NavBarContainer } from "./Header.style";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import DooblePawn from "../icons/DooblePawn";

const Navigation = ({ is3020, isHome }) => {
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

	return (
		<>
			<NavigationContainer isHome={isHome} is3020={is3020} open={open}>
				{/* mask */}
				<div className="logo__container">
					{open && <div className="exitDiv" onClick={handleClick}></div>}
					<img className="logo" src={!is3020 ? "svg/logo.svg" : "svg/logo-yellow.svg"} />
				</div>
				{/* div qui sort de la navbar */}
				<NavBarContainer open={open} is3020={is3020}>
					<ul className="navbar__list">
						<NavbarItem>
							<NavbarLink to="/" onClick={handleClick} is3020={is3020}>
								HOME
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to="/Animation2D" onClick={handleClick} is3020={is3020}>
								ANIMATION 2D
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to={"/Movie3020"} onClick={handleClick} is3020={is3020}>
								{!is3020 ? "3020" : <img className="image-3020" src="svg/3020.svg" alt="" />}
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to="/Illustration" onClick={handleClick} is3020={is3020}>
								ILLUSTRATION
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to="/Contact" onClick={handleClick} is3020={is3020}>
								CV
							</NavbarLink>
						</NavbarItem>
					</ul>
				</NavBarContainer>
				<DooblePawn is3020={is3020} />
				<div className="burger__button" onClick={handleClick}>
					<MenuOutlined />
				</div>
			</NavigationContainer>
		</>
	);
};

export default Navigation;
