import styled from "styled-components";
import { Link, Route } from "react-router-dom";

export const NavigationContainer = styled.div`

@import url('../../font.css');

  background-color: ${(props) => (!props.is3020 ? "#ffd9d8" : "rgb(37, 38, 73)")};
  position: sticky;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem ;
  z-index: 30;


  .sub--logo__container {display: none; }
  .logo__container { width: 3rem}
  .exitDiv {
    position: absolute;
    width: 50%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 30;
  }
  .burger__button {
    z-index: 31;
    transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    transition: transform 0.2s ease-in-out;
    color: ${(props) => (!props.is3020 ? (props.open ? "white" : "#89354a") : "#fde702")};
  }
  @media only screen and (min-width: 768px) {
    .burger__button {
      display: none;
    }
  };

  @media only screen and (min-width: 1440px) {
    padding: 0.5rem 1.5rem;
  };

`;

export const NavBarContainer = styled.div`
    /* display: ${(props) => (props.open ? "flex" : "none")}; */
    width: ${(props) => (props.open ? "50%" : "0%")} ;
    height: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 20;
    overflow: hidden;
    transition: width 0.2s ease-in-out;
    background-color: ${(props) => (!props.is3020 ? "#89354A" : "#110b2f")};


    .navbar__list {
    margin-top: 4rem;
    }

    @media only screen and (min-width: 768px) {
     position: relative;
  
     width: 100%;
     transition: none;
     background-color: transparent;


      .navbar__list {
        margin-top: 0rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        
      } 

      @media (min-width: 1024px) {
       height: 1.5rem;
       z-index: 2;
       }

      @media only screen and (min-width: 1440px) {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 0.5rem;
        .navbar__list {
          justify-content: flex-end;
          min-width: 70%;
          justify-content: space-evenly;
        }
      }


    }

`;

export const NavbarItem = styled.li`
  /* Styles de base pour navbar__item */
  padding: 1rem;
  list-style: none;
  font-family: 'PPWoodland';
  letter-spacing: 0.1rem;
  margin-bottom: 0.5rem;
  min-width: 4rem;

 
  @media only screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
  }


`;

export const NavbarLink = styled(Link)`
  /* Styles de base pour navbar__link */
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  color: #fff;
  /* margin: 0;
  padding: 0; */
  font-size: 4vw;

  .image-3020 {
    width: 3rem;
  }

  @media (min-width: 768px) {
    /* Styles pour les écrans plus larges */
    /* font-size: 1.2rem; */
    text-align: center;
    color: ${(props) => (!props.is3020 ? "#89354A" : "#fff")};
    font-size: 2vw;
    
   
      /* margin-top: 0.1rem; */
    
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1440px) {
    margin-right: 5rem;
    font-size: 1.5rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: 0;
      left: 0;
      transition: 0.2s ease-in-out;
      background-color:  ${(props) => (!props.is3020 ? "#89354A" : "#fff")};;
    }

    &:hover::after {
      width: 100%;
    }
    
  };
`;
