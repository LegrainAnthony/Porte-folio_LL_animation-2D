import styled from "styled-components";

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
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
 
    .image {
      width: 300px;
      margin: 1em;
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
  @media screen and (max-width: 1440px) {

    .images__container {

      .image0 {
        width: 400px;
      }

      .image9 {
        width: 500px;
      }

    }

  }

  @media screen and (max-width: 768px) {
    .images__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .image{
        width: 90%;
        margin: 1em;
      }

}
  }
  
  `;

export const PagesContainer = styled.div`
  width: 65%;
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
  ::-webkit-scrollbar {
    width: 0px;
  }
  `;
