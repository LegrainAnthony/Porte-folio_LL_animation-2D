import Navigation from "../../components/Header/Header";
import { MovieContainer, PagesContainer } from "./Movie3020.style";
import { useEffect } from "react";
import "./glitch.css";

const Movie3020 = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	const images3D = [
		{
			id: 1,
			src: "3020/01.webp",
			alt: "3D1"
		},
		{
			id: 2,
			src: "3020/02.webp",
			alt: "3D2"
		},
		{
			id: 3,
			src: "3020/03.webp",
			alt: "3D3"
		},
		{
			id: 4,
			src: "3020/04.webp",
			alt: "3D4"
		},
		{
			id: 5,
			src: "3020/05.webp",
			alt: "3D5"
		},
		{
			id: 6,
			src: "3020/06.webp",
			alt: "3D6"
		}
	];

	return (
		<MovieContainer props={is3020}>
			<PagesContainer props={is3020}>
				{/* <div class="glitch-bloc">
            <p class="invisible-text">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
          </div>   */}
				<div className="image-title-movie__container">
					<img className="image-title-movie" src="images/movie3020yellow.png" alt="" />
				</div>
				<div className="paragraphs__container">
					<p className="paragraph  paragraph1 SpecialElite">
						Voici 3020 : Le film de fin d'étude que j'ai réalisé a ECV Bordeaux pour valider mon master en cinema d'animation 2D Ce projet
						a été réalisé en deux ans en compagnie de{" "}
						<a className="link-name" href="https://maudpotatoes.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer">
							Maud Roger{" "}
						</a>{" "}
						et{" "}
						<a className="link-name" href="https://manoncavernes0497.myportfolio.com/" target="_blank" rel="noopener noreferrer">
							Manon Cavernes
						</a>
						.
					</p>
					<p className="paragraph paragraph2 SpecialElite">
						<span className="synopsis">Synopsis</span> : une adolescente témoin d'une scène de harcèlement se retrouve plongée dans ses
						pensées et angoisses.
					</p>
					//! FILM
					<div className="annee1__container">
						<h2 className="annee annee1 AmaticSC">ANNEE 01 </h2>
					</div>
					<p className="paragraph paragraph3 SpecialElite">La première année de travail correspond à la période de pré-production :</p>
					<p className="paragraph paragraph4 SpecialElite">
						Pendant cette année, j'ai participé à la recherche de scénario, au chara design, mais j'ai surtout travaillé sur le lieu où se
						déroule une bonne partie de notre film, une cafétéria, dans le but de ne pas avoir d'incohérence entre chaque plan. Et pour
						cela, je me suis aidé de la 3D en utilisant Maya.
					</p>
				</div>
				<div className="images-3d__container__container">
					<div className="images-3d__container">
						{images3D.map((image) => {
							return <img className="image-3d" src={image.src} alt={image.alt} />;
						})}
					</div>
				</div>
				<div className="gif__container">
					<div className="paragraphs__container-gif">
						<p className="paragraph-gif SpecialElite">J'ai également réaliser un turn animé de notre héroine principal</p>
					</div>
					<img className="gif-image" src="3020/Marion_Turn_Web2.gif" alt="gif" />
				</div>
				<div className="paragraphs__container bloc-gif">
					<div className="annee1__container">
						<h2 className="annee annee1 AmaticSC">ANNEE 02</h2>
						<p className="paragraph paragraph5 SpecialElite">
							La deuxième année de master a été l'année de la production et de la post-production :{" "}
						</p>
						<p className="paragraph paragraph6 SpecialElite">
							Pour cette année, j'ai directement commencé par ouvrir de nouveau mon fichier 3D sur maya, et j'ai exporté un à un les
							plans, permettant de réaliser un Layout Background à partir de cette 3D nous permettant de trouver la DA, et également de
							gagner du temps dans la production des décors.
						</p>
						<p className="paragraph paragraph7 SpecialElite">
							Qui dit production, dit animation : j'ai également occupé le poste d'animatrice 2D au sein de notre groupe.
						</p>

						<p>
							Au cours de l'année nous avons dû également trouvé des doubleurs pour notre film, et pour cela, nous avons mis des
							affiches à l'école ainsi que dans des écoles et clubs de théâtre. De ce fait notre casting a été assez rapidement terminé
							ainsi que les séances d'enregistrement.
						</p>

						<p>
							Durant les 2-3 derniers mois, nous avons demandé de l'aide aux M1 de notre école, et j'ai moi même pris en main
							l'organisation avec les Master 1 : préparation des scènes à clean, les échanges avec eux, les retakes à effectuer etc...
						</p>

						<p>
							Ce fut un énorme travail à faire pour une petite équipe comme la notre, mais grâce aux Master 1 pour leurs aides, et à nos
							proches pour leur soutien, nous avons réussi à terminer ce film et nous en sommes très fières.
						</p>

						<div className="compilation__container">
							<p className="paragraph paragraph8 SpecialElite">
								Voici une compilation de mes animations réalisé pendant cette année de production
							</p>
							<div className="video-compilation__container">
								<video className="video" width="750" height="430" controls>
									<source className="source-video" src="videos/Compilation_Anim_Rough.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</PagesContainer>
		</MovieContainer>
	);
};

export default Movie3020;
