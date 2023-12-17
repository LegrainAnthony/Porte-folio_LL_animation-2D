import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";
import { AnimationContainer, PageContainer } from "./Animation2d.style";
import { useEffect } from "react";
import PageTitle from "../../components/Title/PageTitle.js";

const Animation2D = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

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
						<video className="video" controls poster="videos/Book_Miniature.png">
							<source className="source-video" src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
				<div className="other-project__container">
					<h3>Mes autres projet</h3>
					<div className="projet-list__container">
						<div className="projet__container">
							<div className="projet__image"></div>
							<div className="projet__description"></div>
						</div>
					</div>
				</div>
			</PageContainer>
		</AnimationContainer>
	);
};

export default Animation2D;
