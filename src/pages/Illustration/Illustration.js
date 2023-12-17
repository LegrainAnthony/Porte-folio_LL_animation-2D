import Navigation from "../../components/Header/Header";
import { IllustrationContainer, ImagesContainer, Ilustration } from "./Illustration.style";
import { Image, Modal } from "antd";
import { useEffect, useState } from "react";
import PageTitle from "../../components/Title/PageTitle";
const Illustration = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	const [previewIndex, setPreviewIndex] = useState(0); // État pour gérer l'index de l'image sélectionnée

	const images = [
		"images/illustrations/illu10.png",
		"images/illustrations/illu2.png",
		"images/illustrations/illu3.png",
		"images/illustrations/illu4.png",
		"images/illustrations/illu5.png",
		"images/illustrations/illu7.png",
		"images/illustrations/illu8.png",
		"images/illustrations/illu9.png",
		"images/illustrations/illu1.png",
		"images/illustrations/illu11.png",
		"images/illustrations/illu12.png",
		"images/illustrations/illu13.png",
		"images/illustrations/illu14.png",
		"images/illustrations/illu15.png"
	];

	return (
		<IllustrationContainer>
			<div className="wave__container">
				<img className="wave" src={!is3020 ? "SVG/wave-2.svg" : "SVG/wave-black.svg"} />
			</div>
			<PageTitle>
				<h2 className="title">Illustration</h2>
			</PageTitle>

			<div className="paragraph__container">
				<h3 className="paragraph">
					Durant mon temps libre, j'en profite pour dessiner pour mon propre plaisir, lorsque j'ai une idée qui me vient, réaliser un
					challenge/Diiys ou encore lorsque j'ai envie de tester une nouvelle technique de rendu ! Je réaliser mes illustrations
					principalement sur Ipad via procreate.
				</h3>
			</div>
			<div className="images__container">
				<Image.PreviewGroup preview={{ current: previewIndex }}>
					{images.map((src, index) => (
						<div className="image__container">
							<Image
								key={src}
								src={src}
								onClick={() => setPreviewIndex(index)} // Mettre à jour l'index lors du clic
								className="image" // Style pour indiquer que l'image est cliquable
							/>
						</div>
					))}
				</Image.PreviewGroup>
			</div>
		</IllustrationContainer>
	);
};

export default Illustration;
