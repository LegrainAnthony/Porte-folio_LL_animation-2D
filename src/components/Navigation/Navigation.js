import { NavigationContainer } from "./Navigation.style";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationContainer>
      <div className="name__container">
        <h1 className="name">Louise Levasseur</h1>
        <p className="text">Animation 2D</p>
      </div>
      <div className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              Accueil
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/Animation2D">
            Animation 2D
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/Movie3020">
            3020
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/Illustration">
            illustration
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/Contact">
            Contact
            </Link>
          </li>
        </ul>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
