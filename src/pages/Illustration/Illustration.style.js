import styled from 'styled-components';

export const IllustrationContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: #ffe0e0;


  .Illustration__text__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    width: 100%;

    .Illustration__text {
      font-size: 3.5em;
      letter-spacing: 1px;
      color: #8f4646;
    }

  }

  .paragraph__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    width: 100%;
    
    .paragraph {
      font-size: 1.3em;
      width: 80%;
      letter-spacing: 0.05em;
      line-height: 1.1em;
      text-align: center;
      color: #8f4646;
    }
  }

  .illustrations__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
      .illustration {
        width: 50%;
      }
  }

`;

export const PagesContainer = styled.div`
  width: 65%;
  height: 100%;
  background-color: #ffebeb;
  overflow-y: scroll;

  @media screen and (max-width: 1520px) {
    width: 75%;
  }

  @media screen and (max-width: 1366px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 411px) {
    
  }
  @media screen and (max-width: 375px) {
    
  }
  @media screen and (max-width: 320px) {
    
  }
  `;