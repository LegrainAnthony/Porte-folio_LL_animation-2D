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

  .paragraph__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5em;
    .paragraph {
      width: 90%;
      text-align: center;
      font-size: 1.3em;
      color : #8f4646;
    }
  }
   
  .main__container__link {
    margin-top: 2em;

    .email_container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -1em;
      .email {
        font-size: 1.3em;
        text-decoration: none;
        color: #e49393;
        transition: transform 0.2s ease-in-out;
      }
      .email:hover {
        transform: scale(1.05);
      }
    }

    .num__container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.2em;
      .num {
        font-size: 1.5em;
        color: #e49393;
      }
    }

    .triple-link__container{
      margin-top: 1em;
    }
    .link__contact__container {
      position: relative;
      z-index: 91;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5em;
      .pad__container {
        .pad {
          width: 35px;
        }
      }
      .link__container {
        margin: 1em;
        margin-bottom: 0.5em;
        .li {
  
          list-style: none;
          font-size: 2.5em;
          transition: transform 0.2s ease-in-out;
          .link {
            text-decoration: none;
            color: #e49393;
          }
        }
        .li:hover {
          transform: scale(1.05);
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

  @media screen and (max-width: 1650px) {

    .imgLP2__container {
        .imgLP2 {
          width: 800px;
        }
    }
}



  @media screen and (max-width: 1520px) {
    .imgLP2__container {
    width: 75%;
    .imgLP2 {
      width: 800px;
    }
  }

  }

  @media screen and (max-width: 1366px) {

    .imgLP2__container {
    width: 80%;
    .imgLP2 {
      width: 750px;
    }
  }
}

  @media screen and (max-width: 1000px) {

      .imgLP2__container {
        width: 80%;
          .imgLP2 {
            width: 600px;
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
    .main__container__link { 
      .triple-link__container {
      margin-top: 2.5em;
      }
    }
  }
  
  @media screen and (max-width: 375px) {

    .imgLP2__container {
    .imgLP2 {
      width: 350px;
    }
  }
  .main__container__link { 
      .triple-link__container {
      margin-top: 3em;
      }
    }
    
  }

  @media screen and (max-width: 700px) {
    .imgLP2__container {
      .imgLP2 {
        width: 500px;
      }
    } 
  }

  @media screen and (max-width: 600px) {
    .imgLP2__container {
      .imgLP2 {
        width: 500px;
      }
    } 
  }
  

  @media screen and (max-width: 500px) {
    .imgLP2__container {
      .imgLP2 {
        width: 360px;
      }
    } 
  }


  @media screen and (max-width: 450px) {
    .imgLP2__container {
      .imgLP2 {
        width: 350px;
      }
    } 
  }

  @media screen and (max-width: 411px) {
    .imgLP2__container {
      .imgLP2 {
        width: 330px;
      }
    } 
  }

  @media screen and (max-width: 320px) {

    
    .imgLP2__container {
    .imgLP2 {
      width: 300px;
    }
  }

    .main__container__link {
      .email_container {
     .email {
       font-size: 1.2em;
     }
   }
 }


  }

  @media screen and (max-height: 800px) {

    
    .imgLP2__container {
      .imgLP2 {
        display: none;
      }
    }

    .main__container__link {
        .email_container {
        .email {
          font-size: 1.2em;
        }
      }
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
        position: relative;
        z-index: 88;
        cursor: pointer;
      }

    }
  }
  `;
