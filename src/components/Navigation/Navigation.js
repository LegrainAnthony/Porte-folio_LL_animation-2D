import { NavigationContainer } from "./Navigation.style";
import { Link } from "react-router-dom";

const Navigation = (mounted) => {
  console.log(mounted.props);
  return (
    <>
    <NavigationContainer props={mounted}>
      <div className="name__container">
        <h1 className="name Boogaloo">Louise Levasseur</h1>
        <p className="text Boogaloo">Animation 2D</p>
      </div>
      <div className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/">
              Accueil
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/Animation2D">
            Animation 2D
            </Link>
          </li>
          <li className="navbar__item">
          {mounted.props === true ?
            <Link className="navbar__link AmaticSC" to="/">
            <img
            className="image-title-movie"
            src="images/3020.png"
            alt=""
            />
            </Link>
            :
            <Link className="navbar__link AmaticSC" to="/Movie3020">
            3020
            </Link>      
            }
          </li>
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/Illustration">
            illustration
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/Contact">
            Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="border" ></div>
      </div>
    </NavigationContainer>
      </>
  );
};

export default Navigation;
