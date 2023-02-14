import Paragraph from "../../components/Acceuil/Paragraph";
import Social from "../../components/Acceuil/Social";
import "../Acceuil/Accueil.scss"

function Acceuil () {
    return (
        <div className="container">
        <Paragraph />
        <div className="container__image">
        <img className='Acceuil_image' src='/images/accueil/louise.png' alt="Louise" />
        </div>
        <Social /> 
        </div>
    );
};

export default Acceuil;