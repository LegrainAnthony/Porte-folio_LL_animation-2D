import Navigation from "../../components/Header/Header";
import { ContactContainer, PagesContainer } from "./Contact.style";
import { useEffect } from "react";

const Contact = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	//
	//
	// </ul>
	return (
		<ContactContainer>
			<PagesContainer>
				<div className="contact__container">
					<h2 className="contact__text Boogaloo">Contact</h2>
				</div>
				<div className="paragraph__container">
					<p className="paragraph MontserratAlternates">Voici où me joindre, ainsi que mes réseaux pour suivre mon travail</p>
				</div>
				<div className="main__container__link">
					<div className="email_container">
						<a href="mailto:louise.levasseur79@gmail.com" className="email MontserratAlternates">
							louise.levasseur79@gmail.com
						</a>
					</div>
					<div className="num__container">
						<p className="num MontserratAlternates">06 34 41 32 21</p>
					</div>
					<div className="triple-link__container">
						<div className="link__contact__container">
							<div className="pad__container">
								<img className="pad pad-right" src="images/home/coussinetLeft.png" alt="" />
							</div>
							<div className="link__container">
								<li className="li AmaticSC">
									<a href="https://www.linkedin.com/in/louise-levasseur/" target="_blank" rel="noreferrer" className="link">
										Linkedin
									</a>
								</li>
							</div>
							<div className="pad__container">
								<img className="pad pad-left" src="images/home/coussinetRight.png" alt="" />
							</div>
						</div>
						<div className="link__contact__container">
							<div className="pad__container">
								<img className="pad pad-right" src="images/home/coussinetLeft.png" alt="" />
							</div>
							<div className="link__container">
								<li className="li AmaticSC">
									{" "}
									<a href="https://www.instagram.com/pepsou_lou/" target="_blank" rel="noreferrer" className="link">
										Instagram
									</a>
								</li>
							</div>
							<div className="pad__container">
								<img className="pad pad-left" src="images/home/coussinetRight.png" alt="" />
							</div>
						</div>
						<div className="link__contact__container">
							<div className="pad__container">
								<img className="pad pad-right" src="images/home/coussinetLeft.png" alt="" />
							</div>
							<div className="link__container">
								<li className="li AmaticSC">
									<a href="https://www.artstation.com/louise_levasseur" target="_blank" rel="noreferrer" className="link">
										Artstation
									</a>
								</li>
							</div>
							<div className="pad__container">
								<img className="pad pad-left" src="images/home/coussinetRight.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="imgLP2__container">
					<img className="imgLP2" src="/images/louise-and-pepsi-2.png" alt="marche" />
				</div>
			</PagesContainer>
		</ContactContainer>
	);
};

export default Contact;
