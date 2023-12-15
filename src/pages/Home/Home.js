import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";
import { HomeContainer, PagesContainer } from "./Home.style";
import { useEffect, useState } from "react";

function Home({ getTheCurrentPage, is3020 }) {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	return (
		<HomeContainer>
			<div className="video__container">
				<div className="mask"></div>
				<div className="infos__container">
					<div className="title-sub__container">
						<h1 className="info__title">Louise Levasseur</h1>
						<h2 className="info__sub-title">Animation 2D</h2>
					</div>
					<div className="info__button">
						<p className="text__button">Projets</p>
					</div>
					<div className="pawn__container">
						<img className="reversed__pawn" src="SVG/pink_pawn.svg" />
					</div>
				</div>
				<div className="video_c">
					<img className="video" src="images/home/screen_projets.png" />
				</div>
			</div>
			<div className="page__container">
				<div className="vague__container">
					<img className="vague" src="SVG/vague_1.svg" />
				</div>
				<div className="title__container">
					<h2 className="title">Bienvenue !</h2>
				</div>
				<div className="paragraph__container">
					<p className="paragraph1">
						Je m'appelle Louise Levasseur, et je suis passionnée par les dessins animés et le dessin depuis l'enfance. Au fil des années,
						cette passion ne m'a jamais quitté et lorsque j'ai découvert ECV Bordeaux, la question ne se posait plus, et je suis entrée
						dans cette école en Septembre 2018.
					</p>
					<p className="paragraph2">
						Depuis la rentrée 2021, j'ai choisi la spécialisation animation 2D qui est le domaine dans lequel je souhaiterai travailler.
					</p>
					<p className="paragraph3 ">Je te laisse découvrir mon portfolio !</p>
				</div>
			</div>
		</HomeContainer>
	);
}

export default Home;
