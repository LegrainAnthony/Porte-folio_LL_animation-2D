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
	SeeMoreArrow,
	SubDescription
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

	const pathFilms = "videos/animation";
	const pathMiniatures = "images/miniatures/";

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

	return (
		<AnimationContainer>
			<div className="wave__container">
				<img className="wave" src={"svg/header_wave.svg"} />
			</div>
			<PageContainer>
				<PageTitle>
					<h1 className="title">Animation 2D</h1>
				</PageTitle>
				<div className="text__container">
					<p className="text">
						Durant mon parcours à ECV, j'ai pu réaliser de nombreuses animations 2D, que ce soit pour des exercices de cours, des projets
						de groupe, des idées personnels ou encore pour mon stage ! Et les voici ici !
					</p>
				</div>

				<div className="demoreel__container">
					<h2 className="demoreel__title">Ma demo reel 2023</h2>
					<div className="video_container">
						<Player poster={pathMiniatures + "/miniature_demoreel.png"}>
							<source src={pathFilms + "/demoreel_2023.mp4"} />
						</Player>
					</div>
				</div>
				<OtherProjectContainer>
					<h2>Mes autres projet</h2>
					<ProjectListContainer>
						<TitleMovie reverse={true}>3020</TitleMovie>
						<ProjectContainer reverse={true}>
							<ProjectImage>
								<Player poster={pathMiniatures + "/3020-169.png"}>
									<source src={pathFilms + "/3020.mp4"} />
								</Player>
							</ProjectImage>
							<div>
								<PreDescriptionContainer reverse={true}>
									<Synopsis>Synopsis :</Synopsis>
									<p className="text">
										Une adolescente témoin d'une scène de harcèlement se retrouve plongée dans ses pensées et angoisses.
									</p>

									<SeeMoreContainer
										seeMore3020={true}
										visible={true}
										onClick={() => {
											openFilm("film");
										}}
									>
										<SeeMoreButton>Voir {!openDescription.film ? "plus..." : "moins"}</SeeMoreButton>
										<SeeMoreArrow openDescribe={openDescription.film}></SeeMoreArrow>
									</SeeMoreContainer>
								</PreDescriptionContainer>
								<DescriptionContainer openDescribe={openDescription.film}>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Titre :</span>3020{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Année de réalisation :</span>2023{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Logiciels utilisés :</span>StoryBoard; Toonboom harmony;
											Photoshop; After effect; Procreate{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Equipe :</span>3 Personnes,{" "}
											<a href="https://www.linkedin.com/in/maud-roger-467866206/" target="_blank">
												Maud roger
											</a>
											,{" "}
											<a href="https://www.linkedin.com/in/manon-cavernes-355242179/" target="_blank">
												Manon cavernes{" "}
											</a>
											et moi même{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Temps de réalisation :</span> 2 ans{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Durée :</span>4-5 minutes
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Note :</span>Court métrage de fin d'étude, pour plus d'information{" "}
											<span className="see3020">
												<Link className="link" to={"/Movie3020"}>
													voir page 3020.{" "}
												</Link>{" "}
											</span>
										</p>
									</SubDescription>
									<SeeMoreContainer
										seeMore3020={true}
										visible={openDescription.film}
										center={true}
										onClick={() => {
											openFilm("film");
										}}
									>
										<SeeMoreButton>Voir {!openDescription.film ? "plus..." : "moins"}</SeeMoreButton>
										<SeeMoreArrow openDescribe={openDescription.film}></SeeMoreArrow>
									</SeeMoreContainer>
								</DescriptionContainer>
							</div>
						</ProjectContainer>
						<TitleMovie reverse={false}>PEDILUVE</TitleMovie>
						<ProjectContainer reverse={false}>
							<ProjectImage>
								<Player poster={pathMiniatures + "/pediluve.png"}>
									<source src={pathFilms + "/pediluve.mp4"} />
								</Player>
							</ProjectImage>
							<div>
								<PreDescriptionContainer reverse={false}>
									<Synopsis>Synopsis :</Synopsis>
									<p className="text">Une femme seule à la piscine plongeant dans l'eau.</p>

									<SeeMoreContainer
										visible={true}
										onClick={() => {
											openFilm("film2");
										}}
									>
										<SeeMoreButton>Voir {!openDescription.film2 ? "plus..." : "moins"}</SeeMoreButton>
										<SeeMoreArrow openDescribe={openDescription.film2}></SeeMoreArrow>
									</SeeMoreContainer>
								</PreDescriptionContainer>
								<DescriptionContainer openDescribe={openDescription.film2}>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Titre :</span>Pédiluve{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Année de réalisation :</span>2023{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Logiciels utilisés :</span>StoryBoard; Toonboom harmony;
											Photoshop; After effect; Procreate{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Equipe :</span>7 Personnes,{" "}
											<a href="https://www.linkedin.com/in/julie-ducos-works/" target="_blank">
												{" "}
												Julie Ducos
											</a>
											,
											<a href="https://www.linkedin.com/in/anaïs-figueiredo-9a803017b/" target="_blank">
												{" "}
												Anais Figueiredo
											</a>
											,
											<a href="https://www.linkedin.com/in/lise-merlaud-b3051a211/" target="_blank">
												{" "}
												Lise Merlaud
											</a>
											,
											<a href="https://www.linkedin.com/in/shuming-wang-30b003263/" target="_blank">
												{" "}
												Shuming Wang
											</a>
											,
											<a href="https://www.linkedin.com/in/ninon-gayral/" target="_blank">
												{" "}
												Ninon Gayral
											</a>
											,
											<a href="https://www.linkedin.com/in/maria-tokareva-08b540268/" target="_blank">
												{" "}
												Maria Tokavera
											</a>{" "}
											et moi même{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Temps de réalisation :</span>3 mois{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Durée :</span>1 minute
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Note :</span> Premier court métrage réalisé durant mon cursus à
											ECV Bordeaux. Ce défi devait normalement être réalisé individuellement sur une période d'un an en
											parallèle des cours. Cependant, cette année là, l'école a décidé d'adopter une approche différente en
											formant des groupes pour une durée de un mois.
										</p>

										<p className="subdescription__text">
											Chaque groupe a d'abord proposé trois synopsis, parmi lesquels les meilleurs ont été sélectionnés. La
											réalisation a été répartie en trois étapes : une semaine de pré-production, deux semaines de production et
											une semaine de post-production.
										</p>
										<p className="subdescription__text">
											Une fois les synopsis découverts, notre choix s'est porté sur celui du vampire, car c'était celui qui nous
											inspirait le plus. Nous avions toutes les 3 voulu créer un film drôle.
										</p>
										<p className="subdescription__text">
											À chaque étape, nous avons été accompagnés par les professeurs, qui ont été d'une aide précieuse compte
											tenu du temps limité dont nous disposions. De plus, nous avions l'autorisation de venir à l'école lors du
											dernier week-end, ce qui nous a permis de terminer notre défi à temps. Cela a été une belle expérience et
											un très bon souvenir pour moi.
										</p>
									</SubDescription>
									<SeeMoreContainer
										center={true}
										visible={openDescription.film2}
										onClick={() => {
											openFilm("film2");
										}}
									>
										<SeeMoreButton>Voir {!openDescription.film2 ? "plus..." : "moins"}</SeeMoreButton>
										<SeeMoreArrow openDescribe={openDescription.film2}></SeeMoreArrow>
									</SeeMoreContainer>
								</DescriptionContainer>
							</div>
						</ProjectContainer>
						<TitleMovie reverse={true}>Comment je me suis fait virer</TitleMovie>
						<ProjectContainer reverse={true}>
							<ProjectImage>
								<Player poster={pathMiniatures + "/miniature_cjmsfv.png"}>
									<source src={pathFilms + "/cjmsfv.mp4"} />
								</Player>
							</ProjectImage>
							<div>
								<PreDescriptionContainer reverse={true}>
									<Synopsis>Synopsis :</Synopsis>
									<p className="text">Un vampire fait son entrée sur scène mais se retrouve réduit en cendres.</p>

									<SeeMoreContainer
										visible={true}
										onClick={() => {
											openFilm("film3");
										}}
									>
										<SeeMoreButton>Voir {!openDescription.film3 ? "plus..." : "moins"}</SeeMoreButton>
										<SeeMoreArrow openDescribe={openDescription.film3}></SeeMoreArrow>
									</SeeMoreContainer>
								</PreDescriptionContainer>
								<DescriptionContainer openDescribe={openDescription.film3}>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Titre :</span> Comment je me suis fait virer{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Année de réalisation :</span>2021{" "}
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Logiciels utilisés :</span> : StoryBoard; Toonboom harmony;
											Photoshop; Première pro; After effect; Maya
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Equipe :</span> 3 personnes,{" "}
											<a href="https://www.linkedin.com/in/esthercoulais/" target="_blank">
												Esther Coulais
											</a>
											,{" "}
											<a href="https://www.linkedin.com/in/maud-roger-467866206/" target="_blank">
												Maud Roger{" "}
											</a>{" "}
											et moi-même
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Temps de réalisation :</span> 1 mois
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Durée :</span>4-5 minutes
										</p>
									</SubDescription>
									<SubDescription>
										<p className="subdescription__text">
											<span className="subdescription__title">Note :</span>Court métrage réalisé en parallèle des cours, issu
											d'une collaboration entre les élèves en spécialisation animation 2D et en spécialisation background,
											regroupant des étudiants en master 1 et master 2.
										</p>

										<p className="subdescription__text">
											Pour cela, les professeurs d'animation 2D et de background ont formé chacun des groupes d'environ 3 à 4
											personnes. Ensuite, différents thèmes ont été proposés dans chaque spécialité, et notre choix s'est porté
											sur la piscine. Après cette sélection, notre groupe d'animation 2D a été réuni avec le groupe de
											background artist qui avait également choisi le thème de la piscine.
										</p>
										<p className="subdescription__text">
											À partir de là, une liberté totale nous a été accordée, la seule contrainte étant la durée du court
											métrage. Nous avons décidé de mettre l'accent sur l'esthétique pour ce film.
										</p>
										<p className="subdescription__text">
											Personnellement, j'ai travaillé sur l'animation rough ainsi que sur l'ensemble du compositing. Malgré le
											stress lié à ce projet, car chacun souhaitait travailler sur son propre film de master, nous avons réussi
											à allier les deux. Cela a été une très bonne expérience, et en plus, cela m'a permis de découvrir de
											nouvelles personnes et de réaliser un joli film.
										</p>
									</SubDescription>
									<SeeMoreContainer
										visible={openDescription.film3}
										center={true}
										onClick={() => {
											openFilm("film3");
										}}
									>
										<SeeMoreButton>Voir {!openDescription.film3 ? "plus..." : "moins"}</SeeMoreButton>
										<SeeMoreArrow openDescribe={openDescription.film3}></SeeMoreArrow>
									</SeeMoreContainer>
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
