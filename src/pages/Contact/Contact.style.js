import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #ffe0e0;

  .contact__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    width: 100%;
    .contact__text {
      font-size: 3.5em;
      letter-spacing: 1px;
      color: #8f4646;
    }
  }
.mail__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2em;
  .mail__text {
    font-size: 1.5em;
  }
}
   
  .link__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2em;

    .ul {
      
      .li {
        font-size: 2.5em;
        margin: 0.5em;


        .link {
          text-decoration: none;
          color: #8f4646;
          transition: 0.3s ease-in-out; 
        }
      }

    }
  }
  .imgLP2__container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 65%;
    .imgLP2 {
      width: 1000px;
    }
  }

  @media screen and (max-width: 1520px) {
    .imgLP2__container {
    width: 75%;
    .imgLP2 {
      width: 900px;
    }
  }

  }

  @media screen and (max-width: 1366px) {

    .imgLP2__container {
    width: 80%;
    .imgLP2 {
      width: 800px;
    }
  }

  }
  @media screen and (max-width: 768px) {
    .imgLP2__container {
    width: 100%;
    .imgLP2 {
      width: 700px;
    }
  }

  }
  @media screen and (max-width: 425px) {
    .imgLP2__container {
    .imgLP2 {
      width: 400px;
    }
  }
    
  }
  @media screen and (max-width: 375px) {

    .imgLP2__container {
    .imgLP2 {
      width: 350px;
    }
  }
    
  }
  @media screen and (max-width: 320px) {

    
    .imgLP2__container {
    .imgLP2 {
      width: 300px;
    }
  }

  }
`;

export const PagesContainer = styled.div`
  width: 65%;
  height: 100%;
  background-color: #ffebeb;

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
  `;
