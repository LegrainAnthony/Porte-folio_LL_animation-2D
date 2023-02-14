import "./Social.scss"

function Social () {
    return (
        <ul>
            <div className="container__cat1">
                <li><a href="https://www.linkedin.com/in/louise-levasseur/" target='_blank'><img className="cat" src="/images/accueil/linkedinCat.png"/></a></li>
            </div>
            <div className="container__cat2">
                <li><a href="https://www.instagram.com/pepsou_lou/" target='_blank'><img  className="cat" src="/images/accueil/instaCat.png"/></a></li>
            </div>
            <div className="container__cat3">
                <li><a href="https://www.artstation.com/louise_levasseur" target='_blank'><img  className="cat" src="/images/accueil/artstationCat.png"/></a></li>
            </div>
        </ul>
    );
};

export default Social;