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
  `;

export const PagesContainer = styled.div`
  width: 65%;
  background-color: #ffebeb;
  background-color: ${(props) => (props.props === true ? '#32335e' : '#ffebeb')};
  transition: background-color 0.3s ease-in-out;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
  
`;