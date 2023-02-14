import { NavLink } from "react-router-dom";
import "./Button.css"
  
const Button = () => {
    return (
        <div className="container__button">
            <NavLink to="/portfolio" className="button">Mon portfolio</NavLink>
        </div> 
    );
}

export default Button;