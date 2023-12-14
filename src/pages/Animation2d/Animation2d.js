import { Link } from "react-router-dom";
import Navigation from "../../components/Header/Header";
import { AnimationContainer, PagesContainer } from "./Animation2d.style";
import { useEffect } from "react";

const Animation2D = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	return (
		<AnimationContainer>
			<img className="louise-and-pepsi" src="images/home/louise-and-pepsi.png" alt="aaaaaaaa" />
			<PagesContainer>
				<div className="animation__text__container">
					<h2 className="animation__text Boogaloo">Animation 2D</h2>
				</div>
				<div className="demo__text__container">
					<h3 className="demo__text AmaticSC">Demo Reel 2023</h3>
				</div>
				<div className="video_container">
					<video className="video" width="750" height="430" controls poster="videos/Book_Miniature.png">
						<source className="source-video" src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="text__container">
					<p className="paragraph AmaticSC">Retrouvez ici deux de mes projets :</p>
				</div>
				<div className="link_container">
					<div className="container-link-1">
						<span className=" span1 TitanOne">1 .</span>
						<Link to="MovieCJMSFV" className="link">
							<img className="CJSFV-img span" src="images/CJMSFV.png" alt="" />
						</Link>
					</div>
					<div className="container-link-2">
						<span className="span2 TitanOne">2 .</span>
						<Link to="../Movie3020" className="link">
							<img className="movie3020-img span" src="images/movie3020.png" alt="" />
						</Link>
					</div>
				</div>
			</PagesContainer>
		</AnimationContainer>
	);
};

export default Animation2D;
