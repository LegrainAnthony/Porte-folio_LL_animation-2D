import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { AccueilContainer, PagesContainer } from "./Accueil.style";

function Acceuil() {
  return (
    <AccueilContainer>
      <PagesContainer>
        <Navigation />
        <Border/>
        <div>Acceuil</div>
      </PagesContainer>
    </AccueilContainer>
  );
}

export default Acceuil;
