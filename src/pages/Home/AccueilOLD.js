import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";
import { AccueilContainer, PagesContainer } from "./Accueil.style";
import { useEffect, useState } from "react";

function Acceuil({ getTheCurrentPage, is3020 }) {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	return (
		<AccueilContainer>
			<PagesContainer>
				<Navigation is3020={is3020} />
				<div className="title__container">
					<h2 className="title AmaticSC">Bienvenue !</h2>
				</div>
				<div className="paragraph__container">
					<p className="paragraph1 MontserratAlternates">
						Je m'appelle Louise Levasseur, et je suis passionnée par les dessins animés et le dessin depuis l'enfance. Au fil des années,
						cette passion ne m'a jamais quitté et lorsque j'ai découvert ECV Bordeaux, la question ne se posait plus, et je suis entrée
						dans cette école en Septembre 2018.
					</p>
					<p className="paragraph2 MontserratAlternates">
						Depuis la rentrée 2021, j'ai choisi la spécialisation animation 2D qui est le domaine dans lequel je souhaiterai travailler.
					</p>
					<p className="paragraph3  MontserratAlternates">Je te laisse découvrir mon portfolio !</p>
				</div>
				<div className="demo__container">
					<div className="arrow__container">
						<img className="pad pad-right" src="images/accueil/coussinetLeft.png" alt="" />
					</div>
					<div className="demoreel__container">
						<Link to="Animation2D" className="demoreel AmaticSC">
							Ma demoreel
						</Link>
					</div>
					<div className="arrow__container"></div>
					<img className="pad pad-left" src="images/accueil/coussinetRight.png" alt="" />
				</div>
				<div className="image__container">
					<img className="image" src="images/accueil/louise.png" alt="aaaaaaaa" />
				</div>
			</PagesContainer>
		</AccueilContainer>
	);
}

export default Acceuil;
