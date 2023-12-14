import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
  height: 7rem;
  padding-top: 1em;
  display: flex;
  align-items: center;
  color: #8f4646;
  color: ${(props) => (props.props.is3020 === true ? "#fff" : "#8f4646")};
  background-color: #ffebeb;
  background-color: ${(props) => (props.props.is3020 === true ? "#32335e" : "#ffebeb")};
  transition: ${(props) => (props.props.is3020 === true ? "all 0.3s ease-in-out" : "all 0s ease-in-out")} ;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid #8f4646;
  border-color: ${(props) => (props.props.is3020 === true ? "#fff" : "#8f4646")};
  z-index: 999;


  .name__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1em;
    margin-bottom: 1em;
    flex-wrap: wrap;
    height: 100%;
    letter-spacing: 0.1em;

    .name {
      font-size: 2em;
      margin-bottom: -1em;
    }

    .text {
      font-size: 2em;
      color: ${(props) => (props.props.is3020 === true ? "#fff" : "#8f4646")};
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
      margin-left: -5em;
      width: 100%;

      list-style: none;
      color: black;

      .navbar__item {
        margin-left: 0.5rem;
        font-size: 2em;
        transition: transform 0.3s ease-in-out;

        .navbar__link {
          list-style: none;
          text-decoration: none;
          color: #8f4646;
          color: ${(props) => (props.props.is3020 === true ? "#fff" : "#8f4646")};
          position: relative;
          font-size: 1.2em;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .navbar__link:after {
          content: "";
          display: block;
          position: absolute;
          width: 0%;
          height: 2px;
          background-color: #8f4646;
          background-color: ${(props) => (props.props.is3020 === true ? "#fff" : "#8f4646")};
          transition: 0.2s ease-in-out;
        }

        .navbar__link:hover::after {
          width: 100%;
        }
      }
    }
  }

  .burger__button {
    display: none;
  }

  .image-title-movie {
    width: 60px;
  }

    @media screen and (max-width: 1366px) {
      .name__container {
        .name {
          font-size: 1.7em;
        }

        .text {
          font-size: 1.7em;
        }
      }

      .navbar__container {
        .navbar__list {
          .navbar__item {
            font-size: 1.7em;

            .navbar__link {
            }

            .navbar__link:after {
            }

            .navbar__link:hover::after {
            }
          }
        }
      }
    }



    @media screen and (max-width: 1024px) {
      .name__container {
        .name {
          font-size: 1.7em;
        }

        .text {
          font-size: 1.7em;
        }
      }

      .navbar__container {
        .navbar__list {
          margin-left: -2em;
          .navbar__item {
            font-size: 1.7em;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      .name__container {
        .name {
          font-size: 1.5em;
        }
        .text {
          font-size: 1.5em;
        }
      }
      .navbar__container {
        .navbar__list {
          .navbar__item {
            font-size: 1.5em
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      .name__container {
        .name {
          font-size: 1.3em;
        }
        .text {
          font-size: 1.3em;
        }
      }
      .navbar__container {
        .navbar__list {
          .navbar__item {
            font-size: 1.3em
          }
        }
      }
    }
    @media screen and (max-width: 780px) {
      .name__container {
        .name {
          font-size: 1.5em;
        }

        .text {
          font-size: 1.5em;
        }
      }

      .navbar__container {
        .navbar__list {
          margin-left: -3em;

          .navbar__item {
            font-size: 1.5em;
          }
        }
      }
    }
  }


  @media screen and (max-width: 720px) {
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .exitDiv {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      z-index: 9;
    }

        
    .burger__button {
      color: #8f4646;
      color: ${(props) =>
			props.props.is3020 === true ? (props.props.open === true ? "#fde702" : "#fff") : props.props.open === true ? "#fff" : "#8f4646"};
      display: block;
      z-index: 99;
      font-size: 2em;
      transform: ${(props) => (props.props.open === true ? "rotate(90deg)" : "rotate(0deg)")};
      transition: transform 0.2s ease-in-out;
      
    }
    .name__container {
      flex-direction: column;
      justify-content: space-around;
      margin-left: 5em;

      .name {
        font-size: 2em;
      }

      .text {
        font-size: 2em;
      }
    }

    .navbar__container {
        width: 0;
        width: ${(props) => (props.props.open === true ? " 70%" : "0")};
        transition: all 0.2s ease-in-out;
        background-color: #8f4646;
        background-color: ${(props) => (props.props.is3020 === true ? "#252649" : "#8f4646")};
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;

      .navbar__list {
        display: none;
        display: ${(props) => (props.props.open === true ? "flex" : "none")};
        transition: all 0.2s ease-in-out;
        flex-direction: column;
        align-items: center;
        .navbar__item {
          font-size: 2em;
          margin: 0.5em;
          margin-left: 22%;

          .navbar__link {
            color: #fff;
        }
      }
    }
  }
  }
  @media screen and (max-width: 375px) {

    
    .burger__button {
      margin-right: 0.5em;
  
    }
    .name__container {
      margin-left: 4.5em;
      .name {
        font-size: 1.8em;
      }

      .text {
        font-size: 1.8em;
      }
    }
    .navbar__container {
        width: 0;
        width: ${(props) => (props.props.open === true ? " 70%" : "0")};
        transition: all 0.2s ease-in-out;
        background-color: #8f4646;
        background-color: ${(props) => (props.props.is3020 === true ? "#252649" : "#8f4646")};
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;

      .navbar__list {
        display: none;
        display: ${(props) => (props.props.open === true ? "flex" : "none")};
        transition: all 0.2s ease-in-out;
        flex-direction: column;
        align-items: center;
        .navbar__item {
          font-size: 1.8em;
          margin: 0.5em;
          margin-left: 25%;
        }
      }
    }

  }
  @media screen and (max-width: 320px) {

    
.burger__button {
  margin-right: 0.5em;

}
.name__container {
  margin-left: 1em;
  .name {
    font-size: 1.8em;
  }

  .text {
    font-size: 1.8em;
  }
}
.navbar__container {
        width: 0;
        width: ${(props) => (props.props.open === true ? " 70%" : "0")};
        background-color: #8f4646;
        background-color: ${(props) => (props.props.is3020 === true ? "#252649" : "#8f4646")};
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;

      .navbar__list {
        display: none;
        display: ${(props) => (props.props.open === true ? "flex" : "none")};
        flex-direction: column;
        align-items: center;
        .navbar__item {
          font-size: 1.7em;
          margin: 0.5em;
          margin-left: 24%;
        }
      }
    }

}
`;
