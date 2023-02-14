import "./Social.css"

function Social () {
    return (
        <div className="social__main-container ">
            <div className="social__seconde-container">
                <a className="link" href="https://www.linkedin.com/in/louise-levasseur/" target='_blank'><img className="cat" src="/images/accueil/linkedinCat.png"/></a>
                <a className="link" href="https://www.instagram.com/pepsou_lou/" target='_blank'><img  className="cat" src="/images/accueil/instaCat.png"/></a>
            </div>
            <div className="social__last-container">
                <img  className="cat" src="/images/accueil/pepsi.png"/>
                <a className="link" href="https://www.artstation.com/louise_levasseur" target='_blank'><img  className="cat" src="/images/accueil/artstationCat.png"/></a>
            </div>
        </div>
    );
};

export default Social;