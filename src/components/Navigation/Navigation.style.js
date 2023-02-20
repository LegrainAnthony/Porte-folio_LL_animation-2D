import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  margin-top: 0.8em;
  color: #8f4646;

  .name__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1em;
    margin-bottom: 1em;
    flex-wrap: wrap;
    height: 100%;
    
    .name {
      font-size: 2em;
      margin-bottom: -1.5em;
    }

    .text {
        font-size: 2em;
    }
  }

  .navbar__container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .navbar__list {
      display: flex;
      justify-content: space-evenly;
      margin-left: -2em;
      width: 100%;

      list-style: none;
      color: black;

      .navbar__item {
        margin-left: 0.5rem;
        font-size: 1.5em;
        transition: transform 0.3s ease-in-out;
        
        
        
        .navbar__link {
          list-style: none;
          text-decoration : none;
          color: #8f4646;
          position: relative;
        }

        .navbar__link:after {
        content: "";
        display: block;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #8f4646;
        transition: 0.2s ease-in-out;
      }

      .navbar__link:hover::after {
        width: 100%;
      }
    }
  }
}
`;
