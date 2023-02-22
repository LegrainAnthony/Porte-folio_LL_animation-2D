import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
  height: 7rem;
  padding-top: 1em;
  display: flex;
  align-items: center;
  color: #8f4646;
  color: ${(props) => (props.props.props === true ? '#fff' : '#8f4646')};
  background-color: #ffebeb;
  background-color: ${(props) => (props.props.props === true ? '#32335e' : '#ffebeb')};
  transition: background-color 0.3s ease-in-out;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid #8f4646;
  border-color: ${(props) => (props.props.props === true ? '#fff' : '#8f4646')}; ;
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
        color: ${(props) => (props.props.props === true ? '#fff' : '#8f4646')};
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
          text-decoration : none;
          color: #8f4646;
          color: ${(props) => (props.props.props === true ? '#fff' : '#8f4646')};
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
        background-color: ${(props) => (props.props.props === true ? '#fff' : '#8f4646')};
        transition: 0.2s ease-in-out;
      }

      .navbar__link:hover::after {
        width: 100%;
      }
    }
  }
}

.image-title-movie{
  width: 60px;
}
`; 
