import styled from "styled-components";

export const AnimationContainer = styled.div`

@import url('../../font.css');

min-height: 100vh;
background-color: #FFEBEB;
display: flex;
flex-direction: column;
align-items: center;

.wave__container {
    /* display: ${(props) => (props.isHome ? "none" : "block")};
    width: 100%;
    position: absolute;
    height: 1rem;
    bottom: 1.2vw;
    left: 0; */

    display: ${(props) => (props.isHome ? "none" : "block")};
    width: 100%;
    margin-top: -1.6vw;

    
  }

`;

export const PageContainer = styled.div`

    .title {
        text-align: center;
        margin-top: -5vw;
    }
    .text__container {
        margin-top: 3vw;
        font-size: 5vw;
        text-align: center;
        font-family: 'PPWoodland';
        color: #89354A ;
    }

    padding-top: 5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    .demoreel__container {
        margin-top: 5vw;
        .demoreel__title {
            font-size: 6vw;
            font-family: 'Carena';
            color: #89354A ;
        }
        text-align: center;
        width: 100%;
        .video_container {
         .video {
            width: 100%;
         }
        }
    }

`;
