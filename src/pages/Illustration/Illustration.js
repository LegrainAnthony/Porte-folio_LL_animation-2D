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
		"images/illustrations/jolie.webp",
		"images/illustrations/ice.webp",
		"images/illustrations/musa.webp",
		"images/illustrations/eye.webp",
		"images/illustrations/cartoon_me.webp",
		"images/illustrations/power.webp",
		"images/illustrations/pinky.webp",
		"images/illustrations/pepsi.webp",
		"images/illustrations/challenge_ghibli.webp",
		"images/illustrations/balancoire.webp",
		"images/illustrations/marie.webp",
		"images/illustrations/ruben.webp",
		"images/illustrations/dac.webp",
		"images/illustrations/maelle.webp",
		"images/illustrations/hug.webp",
		"images/illustrations/forest.webp"
	];

	return (
		<IllustrationContainer>
			<div className="wave__container">
				<img className="wave" src={"SVG/header_wave2.svg"} />
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
