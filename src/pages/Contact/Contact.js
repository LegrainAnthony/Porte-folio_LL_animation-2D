import Border from "../../components/Border/Border";
import Navigation from "../../components/Navigation/Navigation";
import { ContactContainer, PagesContainer } from "./Contact.style";

const Contact = () => {
    return (
      <ContactContainer>
          <img
            className="louise-and-pepsi"
            src="../images\accueil\louise-and-pepsi.png"
            alt="aaaaaaaa"
          />
        <PagesContainer>
          <Navigation />
          <Border/>
          <div>Contact</div>
        </PagesContainer>
    </ContactContainer>
    )
}

export default Contact