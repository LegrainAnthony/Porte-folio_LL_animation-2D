import { NavigationContainer } from "./Navigation.style";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navigation = (mounted) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const currentPage = (e) => {
    let loc = window.location.pathname;
    if (loc === e.target.getAttribute("href")) {
      handleClick();
    }
  }
  
  console.log(open);
  return (
    <>
    <NavigationContainer props={{mounted, open}}>
    {open === true && <div className="exitDiv" onClick={handleClick}></div>}
      <div className="name__container">
        <h1 className="name Boogaloo">Louise Levasseur</h1>
        <p className="text Boogaloo">Animation 2D</p>
      </div>
      <div className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/" onClick={currentPage}>
              Accueil
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/Animation2D"  onClick={currentPage}>
            Animation 2D
            </Link>
          </li>
          <li className="navbar__item">
          {mounted.props === true ?
            <Link className="navbar__link AmaticSC" to="/"  onClick={currentPage}>
            <img
            className="image-title-movie"
            src="images/3020.png"
            alt=""
            />
            </Link>
            :
            <Link className="navbar__link AmaticSC" to="/Movie3020"  onClick={currentPage}>
            3020
            </Link>      
            }
          </li>
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/Illustration"  onClick={currentPage}>
            illustration
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link AmaticSC" to="/Contact"  onClick={currentPage}>
            Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="border" ></div>
      </div>
      <div className="burger__button" onClick={handleClick} ><MenuOutlined /></div>
    </NavigationContainer>
      </>
  );
};

export default Navigation;
