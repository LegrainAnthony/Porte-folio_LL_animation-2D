import Navigation from "../../components/Navigation/Navigation";
import { MovieContainer, PagesContainer } from "./Movie3020.style";
import { useState, useEffect } from "react";
import "./glitch.css";

const Movie3020 = ({getTheCurrentPage, mounted}) => {

 useEffect(() => {
    getTheCurrentPage();
  }, []);

  const images3D = [
    {
      id: 1,
      src: "images/3D/3D1.png",
      alt: "3D1",
    },
    {
      id: 2,
      src: "images/3D/3D2.png",
      alt: "3D2",
    },
    {
      id: 3,
      src: "images/3D/3D3.png",
      alt: "3D3",
    },
    {
      id: 4,
      src: "images/3D/3D4.png",
      alt: "3D4",
    },
    {
      id: 5,
      src: "images/3D/3D5.png",
      alt: "3D5",
    },
    {
      id: 6,
      src: "images/3D/3D6.png",
      alt: "3D6",
    },
  ];

  return (
    <MovieContainer props={mounted}>
      <img
        className="louise-and-pepsi-glitched"
        src="images/louise-glitch.png"
        alt="aaaaaaaa"
      />
      <img className="eyes" src="images/eyes.png" alt="aaaaaaaa" />
      <PagesContainer props={mounted}>
        <Navigation mounted={mounted} />
        {/* <div class="glitch-bloc">
            <p class="invisible-text">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
            <p class="glitchedAnim">Movie3020</p>
          </div>   */}
        <div className="image-title-movie__container">
          <img
            className="image-title-movie"
            src="images/movie3020yellow.png"
            alt=""
          />
        </div>
        <div className="paragraphs__container">
          <p className="paragraph  paragraph1 SpecialElite">
            Voici 3020 : Le film de fin d'étude que je réalise a ECV Bordeaux
            dans le but de valider mon master en cinema d'animation 2D. Ce
            projet est réalisé en deux ans en compagnie de{" "}
            <a
              className="link-name"
              href="https://maudpotatoes.wixsite.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maud Roger{" "}
            </a>{" "}
            et {" "}
            <a
              className="link-name"
              href="https://manoncavernes0497.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
               Manon Cavernes 
             </a>
            .
          </p>
          <p className="paragraph paragraph2 SpecialElite">
            <span className="synopsis">Synopsis</span> : Marion, une jeune
            lycéenne dans une cafétéria se retrouve face à une entité
            perturbante qu’elle va devoir affronter pour s’en sortir.
          </p>
          <div className="annee1__container">
            <h2 className="annee annee1 AmaticSC">ANNEE 01 </h2>
          </div>
          <p className="paragraph paragraph3 SpecialElite">
            La première année de travail correspond à la période de
            pré-production :
          </p>
          <p className="paragraph paragraph4 SpecialElite">
            Pendant cette année, j'ai participé à la recherche de scénario, au
            chara design, mais j'ai surtout travaillé sur le lieu où se déroule
            une bonne partie de notre film, une cafétéria, dans le but de ne pas
            avoir d'incohérence entre chaque plan. Et pour cela, je me suis aidé
            de la 3D en utilisant Maya.
          </p>
        </div>
        <div className="images-3d__container__container">
          <div className="images-3d__container">
            {images3D.map((image) => {
              return (
                <img className="image-3d" src={image.src} alt={image.alt} />
              );
            })}
          </div>
        </div>
        <div className="gif__container">
          <div className="paragraphs__container-gif">
            <p className="paragraph-gif SpecialElite">
              J'ai également réaliser un turn animé de notre héroine principal
            </p>
          </div>
          <img
            className="gif-image"
            src="images/Marion_Turn_Web.gif"
            alt="gif"
          />
        </div>
        <div className="paragraphs__container bloc-gif">
          <div className="annee1__container">
            <h2 className="annee annee1 AmaticSC">ANNEE 02</h2>
            <p className="paragraph paragraph5 SpecialElite">
              Durant la 2e année de master, nous sommes en Production :
            </p>
            <p className="paragraph paragraph6 SpecialElite">
              Cette année, j'ai directement commencé par ouvrir de nouveau mon
              fichier 3D sur maya, et j'ai exporté un à un les plans, permettant
              de réaliser un Layout Background à partir de cette 3D nous
              permettant de trouver la DA, et également de gagner du temps dans
              la production des décors.
            </p>
            <p className="paragraph paragraph7 SpecialElite">
              Qui dit production, dit animation : j'occupe également le poste
              d'animatrice 2D au sein de notre groupe.
            </p>

            <div className="compilation__container">
              <p className="paragraph paragraph8 SpecialElite">
                Voici une compilation de mes animations 2D en rough réalisés à
                ce jour :
              </p>
              <div className="video-compilation__container">
                <video className="video" width="750" height="430" controls>
                  <source
                    className="source-video"
                    src="videos/Compilation_Anim_Rough.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="composition__container">
              <p className="paragraph paragraph8 SpecialElite">
                Et ici, une scène animé par Maud, que j'ai par la suite clean et
                réalisé le compositing :
              </p>
              <div className="video-compositionn__container">
                <video className="video" width="750" height="430" controls>
                  <source
                    className="source-video"
                    src="videos/Composition1.mp4"
                    type="video/mp4"
                  />
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
