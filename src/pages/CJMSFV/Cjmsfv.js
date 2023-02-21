import CjmsfvContainer from "./Cjmsfv.style";
import { PagesContainer } from "./Cjmsfv.style";
import Navigation from "../../components/Navigation/Navigation";

const Cjmsfv = () => {
  return (
    <CjmsfvContainer>
        <img
            className="louise-and-pepsi"
            src="../images\accueil\louise-and-pepsi.png"
            alt="aaaaaaaa"
        />
      <PagesContainer>
        <Navigation />
        <div>
          <h2>Animation 2D</h2>
        </div>
        <div>
          <h3>Cjmsfv</h3>
        </div>
        <div>
          <video
            width="750"
            height="500"
            controls
            poster="../Videos\CJMSFV.jpg"
          >
            <source src="../Videos\CJMSFV.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p>
            Mon tout premier vrai court-métrage réalisé pour la fin de mon
            bachelor à l'ECV Bordeaux, le tout en 1 mois, par groupe de 3. Un
            premier défi riche en émotion et une grande satisfaction à la fin.
            Au côté d'Esther Coulais (ig : swyster) et de Maud Roger (ig :
            mopsdeg), nous avons raconter l'histoire d'un vampire qui monte sur
            scène, mais qui finit en cendre.
          </p>
        </div>
      </PagesContainer>
    </CjmsfvContainer>
  );
};

export default Cjmsfv;
