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
    margin-top: 1em;
    width: 100%;

    .animation__text {
      font-size: 4em;
    }

  }

  .demo__text__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    width: 100%;
    
    .demo__text {
      font-size: 3em;
      font-weight: bold;
    }
  }

  .video_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
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
      font-size: 3em;
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

    
    
    .CJSFV-img {
      width: 400px;
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