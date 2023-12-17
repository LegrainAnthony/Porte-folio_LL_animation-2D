import styled from "styled-components";

export const IllustrationContainer = styled.div`

@import url('../../font.css');

  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #FFEBEB;

  .wave__container {

    display: ${(props) => (props.isHome ? "none" : "block")};
    width: 100%;
    margin-top: -1.6vw;

  }

  .title {

    margin-top: -5vw;

    @media only screen and (min-width: 1920px) {
        margin-top: 3vw;
    }
  }


  .paragraph__container {
    margin-top: -5vw;
    padding: 5vw;
    font-family: 'PPWoodland';
    text-align: center;
    color: #89354A;

    @media only screen and (min-width: 768px) {
        margin-top: -10vw;
    }

    @media only screen and (min-width: 768px) {
        margin-top: -5vw;
    }

    @media only screen and (min-width: 1440px) {
        font-size: 1.5vw;
    }

    @media only screen and (min-width: 1920px) {
        margin-top: 0;
    }

  }

  .images__container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    .image__container {
        width: 33.3vw;
        height:33.3vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .image {
            width: 33.3vw;
            height:33.3vw;
            object-fit: cover; 
            position: absolute;
            top: -16.65vw;
            right: -16.65vw;
        }
    }

    @media only screen and (min-width: 1440px) {
        padding-left: 3vw;
        .image__container {
            width: 30vw;
            height:30vw;
            margin: 0.5vw;
        }

         .image {
            width: 30vw;
            height:30vw; 
            top: -15vw;
            right: -15vw;
        }
    }

    @media only screen and (min-width: 1920px) {
        padding-left: 10vw;
        .image__container {
            width: 25vw;
            height:25vw;
            margin: 0.5vw;
        }

         .image {
            width: 25vw;
            height:25vw; 
            top: -12.5vw;
            right: -12.5vw;
        }
    }

 }
`;
