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
    position: absolute;
    bottom: 0;
    left: 450px;

    .imgLP2 {
      width: 1000px;
    }
  }
`;

export const PagesContainer = styled.div`
  width: 65%;
  background-color: #ffebeb;
`;
