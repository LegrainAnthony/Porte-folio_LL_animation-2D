import CjmsfvContainer from "./Cjmsfv.style";
import { PagesContainer } from "./Cjmsfv.style";
import Navigation from "../../components/Navigation/Navigation";

const Cjmsfv = () => {
  return (
    <CjmsfvContainer>
        <img
            className="louise-and-pepsi"
            src="../images/accueil/louise-and-pepsi.png"
            alt="aaaaaaaa"
        />
      <PagesContainer>
        <Navigation />
        <div className="animation__text__container">
          <h2 className="animation__text Boogaloo">Animation 2D</h2>
        </div>
        <div className="demo__text__container">
        <img className="CJSFV-img" src="../images/CJMSFV.png" alt="" />
        </div>
        <div className="video_container">
          <video className="video"
            width="750"
            height="430"
            controls
            poster="../videos/cjmsfv_Miniature.png"
          >
            <source className="source-video"
              src="../videos/CJMSFV.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text__container">
          <p className="paragraph MontserratAlternates">
          Mon tout premier vrai court-métrage réalisé pour la fin de mon
            bachelor à l'ECV Bordeaux, le tout en 1 mois, par groupe de 3. Un
            premier défi riche en émotion et une grande satisfaction à la fin.
            Au côté d'<a className="link-name" href="https://www.artstation.com/esthercoulais" target="_blank"  rel="noopener noreferrer">Esther Coulais</a> et de <a className="link-name" href="https://maudpotatoes.wixsite.com/portfolio" target="_blank"  rel="noopener noreferrer">Maud Roger</a>, nous avons raconter l'histoire d'un vampire qui monte sur
            scène, mais qui finit en cendre.
          </p>
        </div>
      </PagesContainer>
    </CjmsfvContainer>
  );
};

export default Cjmsfv;
