import Navigation from "../../components/Header/Header";
import { MovieContainer, RoleContainer } from "./Movie3020.style";
import { useEffect } from "react";
import { Player } from "video-react";
import { Carousel } from "antd";

import "./glitch.css";

const Movie3020 = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	const images3D = [
		{
			id: 1,
			src: "images/3020/3D/01.webp",
			alt: "3D1"
		},
		{
			id: 2,
			src: "images/3020/3D/02.webp",
			alt: "3D2"
		},
		{
			id: 3,
			src: "images/3020/3D/03.webp",
			alt: "3D3"
		},
		{
			id: 4,
			src: "images/3020/3D/04.webp",
			alt: "3D4"
		},
		{
			id: 5,
			src: "images/3020/3D/05.webp",
			alt: "3D5"
		},
		{
			id: 6,
			src: "images/3020/3D/06.webp",
			alt: "3D6"
		}
	];

	const cafeteria3D = [
		{
			id: 1,
			src: "images/3020/BG/cafeteria/decor_01.webp",
			alt: "cafeteria3D_1"
		},
		{
			id: 2,
			src: "images/3020/BG/cafeteria/decor_02.webp",
			alt: "cafeteria3D_2"
		},
		{
			id: 3,
			src: "images/3020/BG/cafeteria/decor_03.webp",
			alt: "cafeteria3D_3"
		},
		{
			id: 4,
			src: "images/3020/BG/cafeteria/decor_04.webp",
			alt: "cafeteria3D_4"
		}
	];

	const onirique3D = [
		{
			id: 1,
			src: "images/3020/BG/onirique/oni_01.webp",
			alt: "onirique3D_1"
		},
		{
			id: 2,
			src: "images/3020/BG/onirique/oni_02.webp",
			alt: "onirique3D_2"
		},
		{
			id: 3,
			src: "images/3020/BG/onirique/oni_03.webp",
			alt: "onirique3D_3"
		},
		{
			id: 4,
			src: "images/3020/BG/onirique/oni_04.webp",
			alt: "onirique3D_4"
		},
		{
			id: 4,
			src: "images/3020/BG/onirique/oni_05.webp",
			alt: "onirique3D_5"
		}
	];

	return (
		<MovieContainer is3020={is3020}>
			<div className="wave__container">
				<img className="wave" src={"svg/header_wave-black.svg"} />
			</div>
			<div className="logo__container">
				<img className="logo" src="svg/3020_movie.svg" />
			</div>
			<div className="paragraph__container">
				<p className="paragraph">
					Voici le film de fin d'études que j'ai réalisé à{" "}
					<a href="https://www.ecv.fr/lecole/bordeaux/" className="yellow" target="_blank">
						ECV Bordeaux
					</a>{" "}
					dans le but de valider le master en cinéma d'animation 2D. Ce projet a été mené sur une période de 2 ans en collaboration avec{" "}
					<a href="https://www.linkedin.com/in/manon-cavernes-355242179/" className="yellow" target="_blank">
						Manon Cavernes
					</a>{" "}
					et{" "}
					<a href="https://www.linkedin.com/in/maud-roger-467866206/" target="_blank" className="yellow">
						Maud Roger
					</a>
					.
				</p>
				<p className="paragraph">
					Pour la réalisation de ce film, nous avons bénéficié d'un accompagnement constant de la part des professeurs et des responsables
					pédagogiques de notre école, avec la participation régulière d'intervenants spécialisés à chaque étape du processus.
				</p>
				<p className="paragraph">
					<span className="yellow">Synopsis</span> : une adolescente témoin d'une scène de harcèlement se retrouve plongée dans ses pensées
					et angoisses.
				</p>
			</div>
			<div className="movie__container">
				<Player poster="images/miniatures/3020.png" playsInline>
					<source src="videos/3020/3020.mp4" />
				</Player>
			</div>
			<h3 className="years">
				<span className="yellow">ANNEE 01 :</span> Pré-production{" "}
			</h3>
			<div className="paragraph__container">
				<p className="paragraph">
					Pendant la première année de notre master, mon groupe et moi avons réalisé un véritable travail d'équipe pour la recherche du
					pitch, du scénario ainsi que du synopsis.
				</p>
				<p className="paragraph">
					Dans notre court métrage, nous avons choisi d'aborder le thème du harcèlement scolaire afin de sensibiliser à l'importance des
					numéros d'aide tels que le <span className="yellow">3020</span> et le <span className="yellow">3018</span>. Cette problématique
					touche directement ou indirectement chacun d'entre nous et constitue malheureusement un sujet d'actualité majeur. Nous avons dévié
					du schéma classique du spot publicitaire contre le harcèlement en montrant qu'un témoin peut effectivement jouer un rôle crucial.
				</p>
				<p className="paragraph">Certaines tâches ont été réparties, tandis que d'autres ont été accomplies en collaboration :</p>
			</div>
			<RoleContainer>
				<h4 className="role__title"> - Chara Design</h4>
				<p className="role__text">
					Pour la conception de nos personnages, c'est principalement Manon Cavernes qui s'est investie dans cette tâche.
				</p>
				<div className="lineup__container">
					<img src="images/3020/chara/lineup.png" alt="lineup" />
				</div>
			</RoleContainer>
			<RoleContainer>
				<h4 className="role__title"> - Storyboard/Animatique</h4>
				<p className="role__text">
					Pour cette étape, Maud Roger a réalisé les 3/4 du travail. Ce fut une tâche longue et ardue, mais très enrichissante grâce à
					l'accompagnement des professeurs et des intervenants.
				</p>
				<div className="animatic__container">
					<Player poster="images/miniatures/miniature_animatique.png" playsInline>
						<source src="videos/3020/3020_animatique.mp4" />
					</Player>
				</div>
			</RoleContainer>
			<RoleContainer>
				<h4 className="role__title"> - 3D</h4>
				<p className="role__text">
					Pour créer la cafétéria de nos personnages, j'ai pris l'initiative de la modéliser sur <span className="yellow">Maya</span>. Cette
					démarche nous a permis d'obtenir une vue d'ensemble du lieu et de déterminer les déplacements de chaque personnage.
				</p>
				<div className="images3D__container">
					<Carousel autoplay autoplaySpeed={3000}>
						{images3D.map((image) => {
							return (
								<div key={image.id + image.name} className="img3D__container">
									<img className="img3D" src={image.src} alt={image.alt} />
								</div>
							);
						})}
					</Carousel>
				</div>
			</RoleContainer>
			<RoleContainer>
				<h4 className="role__title"> - Animation </h4>
				<p className="role__text">
					J'ai également réalisé un turn animé de notre héroïne principal pour obtenir une première idée de l’animation de nos personnages
				</p>
				<div className="gif__container">
					<div className="sub__container">
						<img src="images/3020/gif/marion.gif" />
					</div>
				</div>
			</RoleContainer>
			<h3 className="years">
				<span className="yellow">ANNEE 02 :</span> Production et post production
			</h3>
			<RoleContainer>
				<h4 className="role__title"> - Background </h4>
				<h5 className="role__subtitle">Cafétéria : </h5>
				<p className="role__text">
					Pour la création des décors, nous avons utilisé les bases 3D que j'avais réalisées l'année précédente, en les exportant plan par
					plan. Cela a servi de base layout, nous permettant de définir la direction artistique de la cafétéria, et nous a également fait
					gagner beaucoup de temps dans la réalisation des décors.
				</p>
				<div className="images3D__container">
					<Carousel autoplay autoplaySpeed={3000}>
						{cafeteria3D.map((image) => {
							return (
								<div key={image.id + image.name} className="img3D__container">
									<img className="img3D" src={image.src} alt={image.alt} />
								</div>
							);
						})}
					</Carousel>
				</div>

				<p className="role__text manon">
					Réalisé par{" "}
					<a href="https://www.linkedin.com/in/manon-cavernes-355242179/" className="yellow" target="_blank">
						Manon Cavernes
					</a>
					.
				</p>

				<h5 className="role__subtitle">Monde onirique : </h5>
				<p className="role__text">
					Pour cette étape, nous avons sollicité{" "}
					<a href="https://www.linkedin.com/in/mroucanieres/" className="yellow" target="_blank">
						Manon Roucanieres
					</a>{" "}
					, élève en Master 2 en 3D à ECV Bordeaux. Nous avons conservé la base 3D de Maya, mais elle a été texturée avec le ToonShader
					d'Arnold, utilisant des couleurs bleutées et sombres qui évoquent le monstre Oko.
				</p>
				<p className="role__text">
					Grâce à l'utilisation de la 3D, nous avons réussi à créer une harmonie entre le décor réel et imaginaire.
				</p>

				<div className="images3D__container">
					<Carousel autoplay autoplaySpeed={3000}>
						{onirique3D.map((image) => {
							return (
								<div key={image.id + image.name} className="img3D__container">
									<img className="img3D" src={image.src} alt={image.alt} />
								</div>
							);
						})}
					</Carousel>
				</div>
			</RoleContainer>
			<RoleContainer>
				<h4 className="role__title"> - Animation 2D </h4>
				<p className="role__text">
					Nous avons toutes les trois participé à l'animation 2D de notre film. Pendant que Manon travaillait sur la réalisation des décors,
					Maud et moi nous sommes occupées de l'animation.
				</p>
				<p className="role__text">
					Maud Roger a animé une partie des scènes de la cafétéria, mais elle a principalement travaillé sur l'animation de notre monstre,
					Oko.
				</p>

				<p className="role__text">
					Une fois que Manon eut terminé les décors, elle nous a rejoints pour l'animation 2D, se concentrant principalement sur les Fx et
					le cleans.
				</p>

				<p className="role__text">
					Pour ma part, j'ai été impliquée à chaque étape, que ce soit le rough, le tie-down, ou le clean. Nous avons également bénéficié de
					l'aide de quelques étudiants en Master 1 de notre école. Il était également de ma responsabilité de collaborer avec eux, ainsi que
					de préparer les fichiers nécessaires pour le clean ou la colorisation.
				</p>
				<div className="animation__container">
					<Player playsInline poster="images/miniatures/miniature_compilation.png">
						<source src="videos/3020/3020_compilation_animation.mp4" />
					</Player>
				</div>

				<p className="role__text">
					Une fois que Manon eut terminé les décors, elle nous a rejoints pour l'animation 2D, se concentrant principalement sur les Fx et
					le cleans.
				</p>
			</RoleContainer>

			<RoleContainer>
				<h4 className="role__title"> - Compositing : </h4>
				<p className="role__text">
					Pendant que Manon, les M1 et moi terminions le nettoyage de notre film, Maud a réalisé le compositing en parallèle, utilisant
					After Effects.
				</p>
				<div className="animation__container">
					<Player playsInline poster="images/miniatures/miniature_compositing.png">
						<source src="videos/3020/compositing.mp4" />
					</Player>
				</div>
				<p className="role__text">
					En parallèle de tout cela, durant l'année, nous avons également dû trouver des doubleurs pour notre film. Pour ce faire, nous
					avons affiché des annonces à l'école ainsi que dans des écoles et des clubs de théâtre. Ainsi, notre casting a été rapidement
					complété, tout comme les séances d'enregistrement.
				</p>
				<p className="role__text">
					Pour la musique et le sound design, notre école a collaboré avec une autre école située à Lyon,{" "}
					<a href="http://www.maaav.fr/" className="yellow" target="_blank">
						MaaaV
					</a>
					. C'est finalement{" "}
					<a href="https://damienpetit.com/" className="yellow" target="_blank">
						{" "}
						Damien Petit
					</a>
					, étudiant là-bas, qui a travaillé sur notre sound design ainsi que sur la musique de notre film.
				</p>

				<p className="role__text">
					Ce fut un énorme travail pour une petite équipe comme la nôtre, mais grâce aux Master 1 pour leur aide et à nos proches pour leur
					soutien, nous sommes parvenus à terminer ce film dont <span className="yellow">nous sommes très fiers.</span>
				</p>
			</RoleContainer>
		</MovieContainer>
	);
};

export default Movie3020;
