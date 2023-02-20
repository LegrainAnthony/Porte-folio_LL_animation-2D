import { NavLink } from "react-router-dom";
import { ButtonContainer } from "./Button.styme.js";

const Button = () => {
  return (
    <ButtonContainer>
      <NavLink to="/portfolio" className="button">
        Mon portfolio
      </NavLink>
    </ButtonContainer>
  );
};

export default Button;
