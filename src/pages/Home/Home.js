import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { HomeContainer, PagesContainer } from "./Home.style";
import { useEffect, useState, useRef } from "react";
import PageTitle from "../../components/Title/PageTitle";

function Home({ getTheCurrentPage, is3020 }) {
	const navigate = useNavigate();

	const videoRef = useRef(null);

	useEffect(() => {
		getTheCurrentPage();
	}, []);

	const playVideo = () => {
		videoRef.current.play();
	};

	const stopAndResetVideo = () => {
		const video = videoRef.current;
		video.pause();
		video.currentTime = 0;
		video.load();
	};

	return (
		<HomeContainer>
			<div className="video__container">
				<div className="mask"></div>
				<div className="infos__container">
					<div className="title-sub__container">
						<h1 className="info__title">Louise Levasseur</h1>
						<h2 className="info__sub-title">Animation 2D</h2>
					</div>
					<div
						className="info__button"
						onMouseEnter={playVideo}
						onMouseLeave={stopAndResetVideo}
						onClick={() => {
							navigate("/Animation2D");
						}}
					>
						<p className="text__button">Projets</p>
					</div>
					<div className="pawn__container">
						<img className="reversed__pawn" src="svg/pink_pawn.svg" />
					</div>
				</div>
				<div className="video_c">
					<video className="video" ref={videoRef} poster="images/miniatures/3020.png" muted playsInline>
						<source src="videos/home/preview.mp4" />
					</video>
				</div>
			</div>
			<div className="page__container">
				<div className="vague__container">
					<img className="vague" src="svg/wave_home.svg" />
				</div>
				<PageTitle>
					<h2 className="title">Bienvenue !</h2>
				</PageTitle>
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
