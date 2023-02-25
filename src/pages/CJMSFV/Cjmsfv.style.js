import styled from "styled-components";


const CjmsfvContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #ffe0e0;


  .animation__text__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    width: 100%;

    .animation__text {
      font-size: 3.5em;
      letter-spacing: 1px;
      color: #8f4646;
    }

  }

  .demo__text__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    width: 100%;
    
    .demo__text {
      font-size: 3em;
      font-weight: bold;
      color: #8f4646;
    }
  }

  .video_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5em;
    .video {
      border: 9px solid #E49393;
    }
  }

  .text__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
    margin-bottom: 5em;
    width: 100%;
    .paragraph {
      text-align: center;
      width: 80%;
      font-size: 1.3em;
      color: #8f4646;

      .link-name {
      color: #8f4646;
      font-weight: 700;
      font-size: 0.9em;
      text-decoration: none;
    }
    }
  }

  .link_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em;

    .link {
      margin-top: 1em;
      font-size: 1.2em;
    }

    .container-link-1 {
      margin-top: -1em;
      margin-right: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }    
    .container-link-2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5em;
      margin-left: 0.2em;
    }

    
    .movie3020-img {
      width: 200px;
    }
    
  }
  .CJSFV-img {
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    .video {
      width: 90%;
      height: 90%;
    }
    .CJSFV-img {
      width: 350px;
    }
  }
  @media screen and (max-width: 375px) {
    .CJSFV-img {
      width: 300px;
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

export default CjmsfvContainer;