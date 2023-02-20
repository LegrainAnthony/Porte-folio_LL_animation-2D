import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { IllustrationContainer, PagesContainer } from "./Illustration.style";

const Illustration = () => {
    return (
      <IllustrationContainer>
        <img
          className="louise-and-pepsi"
          src="../images\accueil\louise-and-pepsi.png"
          alt="aaaaaaaa"
        />
          <PagesContainer>
            <Navigation />
            <Border/>
            <div>Illustration</div>
        </PagesContainer>
      </IllustrationContainer>
    )
}

export default Illustration