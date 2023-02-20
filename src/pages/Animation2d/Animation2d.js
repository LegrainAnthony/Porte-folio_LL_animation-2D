import { Link } from "react-router-dom";
import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { AnimationContainer, PagesContainer } from "./Animation2d.style";

const Animation2D = () => {
  return (
    <AnimationContainer>
      <img
        className="louise-and-pepsi"
        src="images\accueil\louise-and-pepsi.png"
        alt="aaaaaaaa"
      />
      <PagesContainer>
        <Navigation />
        <Border />
        <div>
          <h2>Animation2D</h2>
        </div>
        <div>
          <h3>Demo Reel 2023</h3>
        </div>
        <div>
          <video
            width="750"
            height="500"
            controls
            poster="images\accueil\louise-and-pepsi.png"
          >
            <source
              src="videos/A5A_Levasseur_Louise_DemoReel_2023.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <p>
            Retrouvez aussi :
          </p>
        </div>
        <div>
          <Link to="MovieCJMSFV" className="">
            Comment je me suis fais virer
          </Link>
          <Link to="Movie3020" className="">
            3020
          </Link>
        </div>
      </PagesContainer>
    </AnimationContainer>
  );
};

export default Animation2D;
