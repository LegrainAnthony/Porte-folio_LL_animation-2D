import styled from "styled-components";

export const IllustrationContainer = styled.div`

@import url('../../font.css');
@import '~video-react/styles/scss/video-react';

  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #FFEBEB;

  .wave__container {
    width: 100%;
    overflow: hidden;
    .wave {
        width: 100%;
    }

  }

  .title {

    margin-top: -5vw;

    @media only screen and (min-width: 768px) {
            margin-top: 0.8vw;
            font-size: 7vw;
            letter-spacing: 2px;
            margin-bottom: 0vw;
    }

    @media only screen and (min-width: 1440px) {
        margin-top: 1.5vw;
        font-size: 4vw;
        letter-spacing: 2px;
    }
  }


  .paragraph__container {
    margin-top: -5vw;
    padding: 5vw 10vw;
    font-family: 'PPWoodland';
    text-align: center;
    color: #89354A;

    @media only screen and (min-width: 768px) {
        margin-top: -10vw;
    }

    @media only screen and (min-width: 768px) {
        margin-top: -5vw;
        padding: 5vw 5vw;
        font-size: 3vw;

    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.5vw;
    }

    @media only screen and (min-width: 1440px) {
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
            opacity: 0;
        }
    }

    @media only screen and (min-width: 1440px) {
        padding-left: 25vw;
        padding-right: 25vw;
        .image__container {
            width: 15vw;
            height:15vw;
            margin: 0.5vw;
 

         .image {
            width: 15vw;
            height:15vw;
            top: -7.65vw;
            right: -7.65vw;;
        }
    }
    }

 }
`;
