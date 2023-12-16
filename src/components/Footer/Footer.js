import DooblePawn from "../icons/DooblePawn";
import { ContactContainer, NetworkContainer, FooterContainer } from "./Footer.style";

const Footer = ({ is3020, isHome }) => {
	return (
		<FooterContainer is3020={is3020} isHome={isHome}>
			<DooblePawn is3020={is3020} />
			<ContactContainer is3020={is3020}>
				<a href="mailto:louise.levasseur79@gmail.com">louise.levasseur79@gmail.com</a>
				<a href="tel:+0634413221">06 34 41 32 21</a>
			</ContactContainer>
			<NetworkContainer>
				<a href="https://www.instagram.com/pepsou_lou/" target="_blank" rel="noreferrer" className="link">
					<img src={!is3020 ? "SVG/insta.svg" : "SVG/insta-yellow.svg"} />
				</a>
				<a href="https://www.linkedin.com/in/louise-levasseur/" target="_blank" rel="noreferrer" className="link">
					<img src={!is3020 ? "SVG/linkedin.svg" : "SVG/linkedin-yellow.svg"} />
				</a>

				<a href="https://www.artstation.com/louise_levasseur" target="_blank" rel="noreferrer" className="link">
					<img src={!is3020 ? "SVG/artstation.svg" : "SVG/artstation-yellow.svg"} />
				</a>
			</NetworkContainer>
		</FooterContainer>
	);
};

export default Footer;
