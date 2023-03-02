import styled from 'styled-components';

export const MovieContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #ffe0e0;
  background-color: ${(props) => (props.props ? '#252649' : '#ffe0e0')};
  transition: background-color 0.3s ease-in-out;

.image-title-movie__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 1em;
  .image-title-movie {
    width: 350px;
  }
}

.paragraphs__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  text-align: center;

  .paragraph {
    color: #fff;
    font-size: 1.35em;
    margin-bottom: 1em;
    letter-spacing: 0.05em;
  }

  .paragraph3 {
    margin-bottom: 1.5em;
  }

  
  .link-name {
    color: #fde702;
    text-decoration: none;
  }

  
  
}
.synopsis {
  color: #fde702;
}

.annee {
  color: #fde702;
}

.annee1__container {
  margin-bottom: 3em;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .annee1 {
    font-size: 3em;
  }
  
}

.images-3d__container__container {
  display: flex;
  justify-content: center;
  
  .images-3d__container {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    

    .image-3d {
      width: 500px;
      margin-top: 1.5em;
    }
  }
  }
  
  .gif__container {
    display: flex;
    margin-top: 5em;
    
    .paragraphs__container-gif {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
        .paragraph-gif {
          color: #fff;
          font-size: 1.35em;
          margin-bottom: 1em;
          letter-spacing: 0.05em;
          width: 70%;
          text-align: center;
          
        }
      }

    .gif-image {
      width: 300px
    }
  }

  .paragraph5 {
    margin-top: 3em;
  }

  .paragraph6 {
    margin-top: 1.5em;
  }

  .paragraph7 {
    margin-top: 1.5em;
  }

  .paragraph8 {
    margin-top: 3.5em;
    margin-bottom: -2em;
  }

  .video-compilation__container {
    margin-top: -1em;
  }

  .bloc-gif {
    margin-top: -2.5em;
  }

  @media screen and (max-width: 1520px) {
    .images-3d__container__container {
      .images-3d__container { 
        .image-3d {
          width: 400px;
        }
       }
    }

    .gif__container {
    display: flex;
    margin-top: 5em;
    
    .paragraphs__container-gif {
        .paragraph-gif {
          font-size: 1.2em;
        }
      }
    .gif-image {
      width: 250px
    }
  }

  }

  @media screen and (max-width: 1366px) {

    .images-3d__container__container {
      .images-3d__container {
        width: 100%;
        .image-3d {
          width: 350px;
        }
      }
    }

    .gif__container {
      .paragraphs__container-gif {
        .paragraph-gif {
          font-size: 1em;
        }
      }
      .gif-image {
        width: 200px;
        margin-right: 3em;
      }
    }

  }
  @media screen and (max-width: 768px) {
  
  }
  
  @media screen and (max-width: 425px) {

    .images-3d__container__container {
      .images-3d__container {
        width: 100%;
        .image-3d {
          width: 350px;
        }
      }
    }

    .gif__container {
      .paragraphs__container-gif {
        .paragraph-gif {
          font-size: 1em;
        }
      }
      .gif-image {
        width: 200px;
        margin-right: 0em;
      }
    }

    
    .paragraphs__container {
      
      .paragraph {
        font-size: 1.3em;
      }

      .paragraph5 {
      margin-top: 3em;
      width: 80%
    }

  .paragraph6 {
    width: 80%;  
  }

  .paragraph7 {
    width: 80%
  }

  .paragraph8 {
    margin-top: 3.5em;
    margin-bottom: -2em;
    width: 80%
  }

  .compilation__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .video {
        margin-top: 5em;
        width: 90vw;
        height: 100%;
      }  
    }
  }
  .composition__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .video {
        margin-top: 5em;
        width: 90vw;
        height: 100%;
      }  
    }
  }
    
  @media screen and (max-width: 375px) {
    
  }
  @media screen and (max-width: 320px) {
    .image-title-movie__container {
      .image-title-movie {
        width: 250px;
      }
    }

    .paragraphs__container {
      
      .paragraph {
        font-size: 1.1em;
        line-height: 1.2em;
      }
    }

    .annee1__container {
      .annee1 {
        font-size: 2.5em;
      }
    }
    
    .images-3d__container__container {
  display: flex;
  justify-content: center;
  
  .images-3d__container {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    

    .image-3d {
      width: 280px;
      margin-top: 1.5em;
    }
  }
  }
}

  `;

export const PagesContainer = styled.div`
  width: 65%;
  background-color: #ffebeb;
  background-color: ${(props) => (props.props === true ? '#32335e' : '#ffebeb')};
  transition: background-color 0.3s ease-in-out;
  overflow-y: scroll;

  @media screen and (max-width: 1520px) {
    width: 75%;
  }

  @media screen and (max-width: 1366px) {
    width: 80%;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
  
  @media screen and (max-width: 425px) {

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