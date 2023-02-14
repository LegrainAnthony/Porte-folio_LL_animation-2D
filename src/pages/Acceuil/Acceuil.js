import Button from "../../components/Acceuil/button/Button";
import Paragraph from "../../components/Acceuil/Paragraph/Paragraph";
import Social from "../../components/Acceuil/Social/Social";
import Title from "../../components/Acceuil/Title/Title";
import "./Accueil.css"

function Acceuil () {
    return (
        <div className="container">
        <Title />
        <div className="content__container">
        <Paragraph />
        <Button />
        </div>
        <div className="container__image">
        <img className='Acceuil_image' src='/images/accueil/louise.png' alt="Louise" />
        </div>
        <Social /> 
        </div>
    );
};

export default Acceuil;