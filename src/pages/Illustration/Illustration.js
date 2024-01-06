import Navigation from "../../components/Header/Header";
import { IllustrationContainer, ImagesContainer, Ilustration } from "./Illustration.style";
import { Image, Modal } from "antd";
import { useEffect, useState } from "react";
import PageTitle from "../../components/Title/PageTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Illustration = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
		const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.1 });
		tl.to(".image", {
			// Utilisation de la classe 'image'
			duration: 0.2,
			opacity: 1,
			ease: "power1.inOut",
			stagger: {
				amount: 1.5,
				grid: [4, 3], // grid défini ici
				axis: null,
				ease: "none",
				from: "start"
			}
		});
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
				<img className="wave" src={"svg/header_wave.svg"} />
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
