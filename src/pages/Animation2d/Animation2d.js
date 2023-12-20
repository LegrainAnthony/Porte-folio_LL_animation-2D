import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { Player } from "video-react";
import {
	AnimationContainer,
	PageContainer,
	ProjectImage,
	OtherProjectContainer,
	ProjectListContainer,
	ProjectContainer,
	TitleMovie,
	DescriptionContainer,
	PreDescriptionContainer,
	SeeMoreContainer,
	SeeMoreButton,
	Synopsis,
	SeeMoreArrow
} from "./Animation2d.style";
import { useEffect, useState } from "react";
import PageTitle from "../../components/Title/PageTitle.js";

const Animation2D = ({ getTheCurrentPage, is3020 }) => {
	const [openDescription, setOpenDescription] = useState({
		film: false,
		film2: false,
		film3: false,
		film4: false
	});

	useEffect(() => {
		getTheCurrentPage();
	}, []);

	const openFilm = (filmToOpen) => {
		setOpenDescription((prev) => {
			return {
				...prev,
				[filmToOpen]: !openDescription[filmToOpen]
			};
		});
	};

	console.log(openDescription);

	return (
		<AnimationContainer>
			<div className="wave__container">
				<img className="wave" src={!is3020 ? "SVG/wave-2.svg" : "SVG/wave-black.svg"} />
			</div>
			<PageContainer>
				<PageTitle>
					<h1 className="title">Animation 2D</h1>
				</PageTitle>
				<div className="text__container">
					<p className="text">TEXT BIDON A RAJOUTER POUR TE FAIRE RECRUTER ET GAGNER DE LA MOULAGA</p>
				</div>

				<div className="demoreel__container">
					<h2 className="demoreel__title">Ma demo reel 2023</h2>
					<div className="video_container">
						<link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
						<Player>
							<source src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4" />
						</Player>
					</div>
				</div>
				<OtherProjectContainer>
					<h2>Mes autres projet</h2>
					<ProjectListContainer>
						<TitleMovie reverse={true}>3020</TitleMovie>
						<ProjectContainer reverse={true}>
							<ProjectImage>
								<Player poster="images/miniatures/miniature_3020.png">
									<source src="videos/3020_H264.mp4" />
								</Player>
							</ProjectImage>
							<PreDescriptionContainer>
								<Synopsis>Synopsis :</Synopsis>
								<p>Une adolescente témoin d'une scène de harcèlement se retrouve plongée dans ses pensées et angoisses.</p>

								<SeeMoreContainer
									onClick={() => {
										openFilm("film");
									}}
								>
									<SeeMoreButton>Voir {!openDescription.film ? "plus..." : "moins"}</SeeMoreButton>
									<SeeMoreArrow openDescribe={openDescription.film}></SeeMoreArrow>
								</SeeMoreContainer>
							</PreDescriptionContainer>
							<DescriptionContainer openDescribe={openDescription.film}>
								<p>Mon court métrage de fin d'étude réalisé par groupe de 3 sur 2 ans.</p>
								<p className="see3020">Pour plus d'information, voir page 3020.</p>
							</DescriptionContainer>
						</ProjectContainer>
						<TitleMovie reverse={false}>PEDILUVE</TitleMovie>
						<ProjectContainer reverse={false}>
							<ProjectImage>
								<Player poster="images/miniatures/miniature_pediluve.png">
									<source src="videos/3020_H264.mp4" />
								</Player>
							</ProjectImage>
							<PreDescriptionContainer>
								<Synopsis>Synopsis :</Synopsis>
								<p>Une femme seule à la piscine plongeant dans l'eau.</p>

								<SeeMoreContainer
									onClick={() => {
										openFilm("film2");
									}}
								>
									<SeeMoreButton>Voir {!openDescription.film2 ? "plus..." : "moins"}</SeeMoreButton>
									<SeeMoreArrow openDescribe={openDescription.film2}></SeeMoreArrow>
								</SeeMoreContainer>
							</PreDescriptionContainer>
							<DescriptionContainer openDescribe={openDescription.film2}>
								<p>
									Petit court métrage en collaboration avec les Master 1 lorsque j'étais en master 2 dans le cadre du cours de
									spécialisation d'animation 2D sur 2 mois.
								</p>
								<p>
									Pour ce projet j'ai travaillé sur de l'animation rough, clean (ToonBoom Harmony) et le Compositing (After effect).
								</p>
							</DescriptionContainer>
						</ProjectContainer>
						<TitleMovie reverse={true}>Comment je me suis fait virer</TitleMovie>
						<ProjectContainer reverse={true}>
							<ProjectImage>
								<Player poster="images/miniatures/miniature_cjmsfv.png">
									<source src="videos/3020_H264.mp4" />
								</Player>
							</ProjectImage>
							<PreDescriptionContainer>
								<Synopsis>Synopsis :</Synopsis>
								<p>Un vampire fait son entrée sur scène mais se retrouve réduit en cendres.</p>

								<SeeMoreContainer
									onClick={() => {
										openFilm("film3");
									}}
								>
									<SeeMoreButton>Voir {!openDescription.film3 ? "plus..." : "moins"}</SeeMoreButton>
									<SeeMoreArrow openDescribe={openDescription.film3}></SeeMoreArrow>
								</SeeMoreContainer>
							</PreDescriptionContainer>
							<DescriptionContainer openDescribe={openDescription.film3}>
								<p>Mon court métrage de fin d'étude de bachelor réalisé sur un mois par groupe de 3.</p>
								<p>
									J'ai principalement travaillé l'animation 2D rough et clean via ToonBoom Harmony, ainsi que la réalisation de base
									3D sur maya comme base pour les backgrounds.
								</p>
							</DescriptionContainer>
						</ProjectContainer>
					</ProjectListContainer>
				</OtherProjectContainer>
			</PageContainer>
		</AnimationContainer>
	);
};

export default Animation2D;
