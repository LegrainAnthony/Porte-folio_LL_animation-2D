import styled from 'styled-components';

export const AnimationContainer = styled.div`
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
    margin-top: 3em;
    width: 100%;
    .paragraph {
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 1.5px;
      color: #8f4646;
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
    
    .span {
      transition: 0.2s ease-in-out;
    }

    .span:hover {
      transform: scale(1.02);
    }

    .span1 {
      font-size: 2em;
      font-weight: 400;
      color: #8f4646;
    }

    .span2 {
      font-size: 2em;
      margin-right: 0.5em;
      margin-top: 1.7em;
      font-weight: 400;
      color: #8f4646;
    }

    .CJSFV-img {
      width: 400px;
    }
    
    .movie3020-img {
      width: 200px;
    }
    
  }
`;

export const PagesContainer = styled.div`
  width: 65%;
  background-color: #ffebeb;
  overflow-y: scroll;
  

  ::-webkit-scrollbar {
    width: 0px;
  }
`;