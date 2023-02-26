import styled from 'styled-components';

export const IllustrationContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  background-color: #ffe0e0;


  .Illustration__text__container {
    background-color: green;
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
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 3em;
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

  .images__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #fff;
 
    .image {
      width: 300px;
      margin: 1em;
      background-color: blue;
    }

    .image0 {
      width: 435px;
    }

    .image1 {
      width: 275px;
      margin-left: 2.5em;
    }

    .image2 {
      width: 310px;
    }

    .image4 {
      width: 322px;
    }

    .image9 {
      width: 600px;
    }

    .image10 {
      width: 310px;
      margin-left: 1.5em;
    }

    .image11 {
      width: 280px;
    }

    .image12 {
      width: 290px;
    }

    .image13 {
      width: 600px;
    }

    .image14 {
      width: 238px;
    }

    .image15 {
      width: 295px;
    }


    
  }
  
  `;

export const PagesContainer = styled.div`
  width: 65%;
  background-color: #ffebeb;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
  ::-webkit-scrollbar {
    width: 0px;
  }
  `;