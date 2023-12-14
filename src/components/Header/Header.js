import { NavigationContainer, NavbarItem, NavbarLink, NavBarContainer } from "./Header.style";
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

	return (
		<>
			<NavigationContainer is3020={is3020} open={open}>
				{/* mask */}
				<div className="logo__container">
					{open && <div className="exitDiv" onClick={handleClick}></div>}
					<img className="logo" src={!is3020 ? "SVG/logo.svg" : "SVG/logo-yellow.svg"} />
				</div>
				{/* div qui sort de la navbar */}
				<NavBarContainer open={open} is3020={is3020}>
					<ul className="navbar__list">
						<NavbarItem>
							<NavbarLink to="/" onClick={closeBurgerCurrentPage} is3020={is3020}>
								HOME
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to="/Animation2D" onClick={closeBurgerCurrentPage} is3020={is3020}>
								ANIMATION 2D
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to={is3020 ? "/" : "/Movie3020"} onClick={closeBurgerCurrentPage} is3020={is3020}>
								{!is3020 ? "3020" : <img className="image-3020" src="images/3020.png" alt="" />}
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to="/Animation2D" onClick={closeBurgerCurrentPage} is3020={is3020}>
								ILLUSTRATION
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink to="/Animation2D" onClick={closeBurgerCurrentPage} is3020={is3020}>
								CONTACT
							</NavbarLink>
						</NavbarItem>
					</ul>
				</NavBarContainer>
				<div className="sub--logo__container">
					<div className="sub-logo">
						<img className="sub--logo" src={!is3020 ? "SVG/dooble_pawn.svg" : "SVG/dooble_pawn-yellow.svg"} />
					</div>
				</div>
				<div className="burger__button" onClick={handleClick}>
					<MenuOutlined />
				</div>
			</NavigationContainer>
		</>
	);
};

export default Navigation;
