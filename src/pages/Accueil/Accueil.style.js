import styled from "styled-components";

export const AccueilContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #ffe0e0;
  position: relative;

 .title__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: -2.5em;
  font-family: 'Amatic SC';

    .title {
      font-size: 3.5em;
      color: #8f4646;
      font-weight: 700;
      margin-bottom: 0.3em;
      letter-spacing: 0.05em;
      
    }

  }
  
  .paragraph__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 3em;
    text-align: center;
    font-size: 1.35em;
    line-height: 28px;
    font-weight: 400;
    color: #8f4646;
    .paragraph1  {
      margin-bottom: 1em;
      width: 45em;
    }

    .paragraph2  {
      width: 30em;
      margin-bottom: 1em;
    }

    .paragraph3  {
      width: 30em;
    }

  }

  .demo__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1.1em;

    .pad {
      width: 1.5em;
      margin-top: 0.3em;
    }
    
    .pad-right {
      margin-right: 1em;
    }  
    .pad-left {
      margin-left: 0.8em;
    }

    .demoreel__container {
      transition: 0.2s ease-in-out;

      .demoreel {
        font-size: 2.5em;
        font-weight: bold;
        color: #e49393;
        text-decoration: none;
      }
    }

    .demoreel__container:hover {
      transform: scale(1.1);
    }
  }

  .image__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.1em;
    
    .image {
      width: 400px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1520px) {
  }

  @media screen and (max-width: 1024) {
  }
  @media screen and (max-width: 768px) {

    .title__container {

    .title {
      font-size: 2.5em;
    }
  }

    .paragraph__container {
    padding: 3em;
    text-align: center;
    font-size: 1.15em;
    line-height: 28px;
    font-weight: 400;
    color: #8f4646;
    .paragraph1  {
      margin-bottom: 1em;
      width: 45em;
    }

    .paragraph2  {
      width: 30em;
      margin-bottom: 1em;
    }

    .paragraph3  {
      width: 30em;
    }

  }

    .image__container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.1em;
    
    .image {
      width: 350px;
      cursor: pointer;
    }
  }

  }

  @media screen and (max-width: 411px) {
    
  }
  @media screen and (max-width: 375px) {
    
  }
  @media screen and (max-width: 360px) {
    
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
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  @media screen and (max-width: 411px) {
    
  }
  @media screen and (max-width: 375px) {
    
  }
  @media screen and (max-width: 320px) {
    
    .image__container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.1em;
    
      .image {
        width: 300px;
        cursor: pointer;
      }

    }
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
