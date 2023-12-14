import Navigation from "../../components/Header/Header";
import { IllustrationContainer, PagesContainer } from "./Illustration.style";
import { Image, Modal } from "antd";
import { useEffect } from "react";

const Illustration = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	return (
		<IllustrationContainer>
			<img className="louise-and-pepsi" src="../images/home/louise-and-pepsi.png" alt="aaaaaaaa" />
			<PagesContainer>
				<div className="Illustration__text__container">
					<h2 className="Illustration__text Boogaloo">Illustration</h2>
				</div>
				<div className="paragraph__container">
					<h3 className="paragraph MontserratAlternates">
						Durant mon temps libre, j'en profite pour dessiner pour mon propre plaisir, lorsque j'ai une idée qui me vient, réaliser un
						challenge/Diiys ou encore lorsque j'ai envie de tester une nouvelle technique de rendu ! Je réaliser mes illustrations
						principalement sur Ipad via procreate.
					</h3>
				</div>
				<div className="images__container">
					<Image src="images/illustrations/illu2.png" className="image image2" />
					<Image src="images/illustrations/illu3.png" className="image image3" />
					<Image src="images/illustrations/illu8.png" className="image image8" />

					<Image src="images/illustrations/illu6.png" className="image image6" />
					<Image src="images/illustrations/illu1.png" className="image image1" />
					<Image src="images/illustrations/illu10.png" className="image image10" />

					<Image src="images/illustrations/illu4.png" className="image image4" />
					<Image src="images/illustrations/illu7.png" className="image image7" />
					<Image src="images/illustrations/illu12.png" className="image image12" />

					<Image src="images/illustrations/illu.png" className="image image0" />
					<Image src="images/illustrations/illu9.png" className="image image9" />

					<Image src="images/illustrations/illu5.png" className="image image5" />
					<Image src="images/illustrations/illu11.png" className="image image11" />
					<Image src="images/illustrations/illu15.png" className="image image15" />

					<Image src="images/illustrations/illu13.png" className="image image13" />
					<Image src="images/illustrations/illu14.png" className="image image14" />
				</div>
			</PagesContainer>
		</IllustrationContainer>
	);
};

export default Illustration;
