import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";
import { Player } from "video-react";
import {
	AnimationContainer,
	PageContainer,
	ProjectImage,
	OtherProjectContainer,
	ProjectListContainer,
	ProjectContainer,
	TitleMovie,
	DescriptionContainer
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
						<TitleMovie reverse={true}>Titre du film</TitleMovie>
						<ProjectContainer reverse={true}>
							<ProjectImage>
								<Player poster="images/home/screen_projet.png">
									<source src="videos/3020_H264.mp4" />
								</Player>
							</ProjectImage>
							<div className="projet__pre-description">
								<p>
									Text pour un projet que tu as réalisé bb Text pour un projet que tu as réalisé bb projet que tu as réalisé bb Text
									pour un projet que tu as réalisé bb
								</p>

								<div
									onClick={() => {
										openFilm("film");
									}}
								>
									Description
								</div>
								<DescriptionContainer openDescribe={openDescription.film}>
									<p>TEST</p>
									<p>TESTTTT</p>
									<p>tesststststts</p>
								</DescriptionContainer>
							</div>
						</ProjectContainer>
						<TitleMovie>Titre du film</TitleMovie>
						<ProjectContainer reverse={false}>
							<ProjectImage>
								<Player>
									<source src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4" />
								</Player>
							</ProjectImage>
							<div className="projet__pre-description">
								<p>Text pour un projet que tu as réalisé bb</p>
								<div
									onClick={() => {
										openFilm("film2");
									}}
								>
									Description
								</div>
								<DescriptionContainer openDescribe={openDescription.film2}>
									<p>TEST</p>
									<p>TESTTTT</p>
									<p>tesststststts</p>
								</DescriptionContainer>
							</div>
						</ProjectContainer>
						<TitleMovie reverse={true}>Titre du film</TitleMovie>
						<ProjectContainer reverse={true}>
							<ProjectImage>
								<Player>
									<source src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4" />
								</Player>
							</ProjectImage>
							<div className="projet__pre-description">
								<p>Text pour un projet que tu as réalisé bb</p>
								<div
									onClick={() => {
										openFilm("film3");
									}}
								>
									Description
								</div>
								<DescriptionContainer openDescribe={openDescription.film3}>
									<p>TEST</p>
									<p>TESTTTT</p>
									<p>tesststststts</p>
								</DescriptionContainer>
							</div>
						</ProjectContainer>
						<TitleMovie>Titre du film</TitleMovie>
						<ProjectContainer reverse={false}>
							<ProjectImage>
								<Player>
									<source src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4" />
								</Player>
							</ProjectImage>
							<div className="projet__pre-description">
								<p>Text pour un projet que tu as réalisé bb</p>
								<div
									onClick={() => {
										openFilm("film4");
									}}
								>
									Description
								</div>
								<DescriptionContainer openDescribe={openDescription.film4}>
									<p>TEST</p>
									<p>TESTTTT</p>
									<p>tesststststts</p>
								</DescriptionContainer>
							</div>
						</ProjectContainer>
					</ProjectListContainer>
				</OtherProjectContainer>
			</PageContainer>
		</AnimationContainer>
	);
};

export default Animation2D;
