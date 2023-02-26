import Navigation from "../../components/Navigation/Navigation";
import { ContactContainer, PagesContainer } from "./Contact.style";
import { useEffect } from 'react';

const Contact = ({getTheCurrentPage, mounted}) => {

  useEffect(() => {
    getTheCurrentPage();
  }, []);

    return (
      <ContactContainer>
        <PagesContainer>
          <Navigation mounted={mounted} />
          <div className="contact__container">
            <h2 className="contact__text Boogaloo">Contact</h2>
          </div>
          <div className="mail__container">
            <a href="mailto:louise.levasseur79@gmail.com" className="mail__text">louise.levasseur79@gmail.com</a>
          </div>
          <div className="link__container" >
            <ul className="ul">
              <li className="li AmaticSC" ><a href="https://www.linkedin.com/in/louise-levasseur/" target="_blank" rel="noreferrer" className="link">Linkedin</a></li>
              <li className="li AmaticSC" > <a href="https://www.instagram.com/pepsou_lou/" target="_blank"rel="noreferrer"  className="link">Instagram</a></li>
              <li className="li AmaticSC" ><a href="https://www.artstation.com/louise_levasseur" target="_blank"rel="noreferrer" className="link">Artstation</a></li>
            </ul>
          </div>
          <div className="imgLP2__container">
            <img className="imgLP2" src="/images/louise-and-pepsi-2.png" alt="marche"/>
          </div>

        </PagesContainer>
    </ContactContainer>
    )
}

export default Contact