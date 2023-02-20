import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { IllustrationContainer, PagesContainer } from "./Illustration.style";

const Illustration = () => {
    return (
      <IllustrationContainer>
          <PagesContainer>
            <Navigation />
            <Border/>
            <div>Illustration</div>
        </PagesContainer>
      </IllustrationContainer>
    )
}

export default Illustration