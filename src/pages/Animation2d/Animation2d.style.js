import styled from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
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
            color: #89354A;
            padding: 6vw 0;
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

export const OtherProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {

        padding: 10vw 0;
        font-size: 6vw;
        font-family: 'Carena';
        color: #89354A ;
    }

`;

export const ProjectListContainer = styled.div`

`;

export const TitleMovie = styled.h3`
    margin: 0 5vw 5vw 5vw;
    font-family: 'PPWoodland';
    font-weight: 700;
    position: relative;
    text-align: ${(props) => (props.reverse ? "end" : "start")};
    color: #89354A;
    font-size: 4.5vw;
     &::after {
    content: '';
        position: absolute;
          //proops
        left: ${(props) => (props.reverse ? "50%" : "0")};
        bottom: -2vw;
        width: 50%;
        height: 15%;
        background-color: #89354A; /* Assurez-vous que cela correspond à la couleur de fond de l'arrière-plan */
        z-index: 1;
        //proops
        /* text-align: end; */
    *}

`;

export const ProjectContainer = styled.div`
    width: 100%;
    margin-bottom: 20vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    .projet__pre-description {
        /* max-width: 70%; */
        /* text-align: ${(props) => (props.reverse ? "end" : "start")}; */
        padding: 5vw;
        background-color: #ffd9d8;
        width: 100%;
        color: #89354A;
        font-family: 'PPWoodland';
        font-size: 4.5vw;

        .synopsis {
            font-family: 'Carena';
            margin-bottom: 4vw;
            font-size: 4vw;
            font-weight: 700;
        }

        .see-more__container {
            display: flex;
            align-items: center;
            margin-top: 5vw;
            .see-more__button {
            font-family: 'Carena';
            font-size: 3vw;
            font-weight: 700;
        }
            .arrow {
                transition: all 0.3s ease;
                transform: ${(props) => (!props.openDescribe ? "rotate(0deg)" : "rotate(180deg)")};
                padding: 0;
                margin-bottom: 1vw;
                margin-left: 2vw;
            }
        }
    }

    @media only screen and (min-width: 768px) {
     flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
     .projet__pre-description { 
        background-color: #fff;
        min-height: 100%;

     }
    }
`;

export const PreDescriptionContainer = styled.div`
        padding: 5vw;
        background-color: #ffd9d8;
        width: 100%;
        color: #89354A;
        font-family: 'PPWoodland';
        font-size: 4.5vw;
`;

export const SeeMoreContainer = styled.div`      
        display: flex;
        align-items: center;
        margin-top: 5vw;
        max-width: 25%;
        justify-content: space-between;
`;

export const SeeMoreButton = styled.div`
        font-family: 'Carena';
        font-size: 3vw;
        font-weight: 700;
`;

export const SeeMoreArrow = styled(MdOutlineArrowDropDown)`
        transition: all 0.3s ease;
        transform: ${(props) => (!props.openDescribe ? "rotate(0deg)" : "rotate(180deg)")};
        margin-bottom: 1vw;
        margin-left: 2vw;
`;

export const Synopsis = styled.p`
        font-family: 'Carena';
        margin-bottom: 4vw;
        font-size: 4vw;
        font-weight: 700;
`;

export const ProjectImage = styled.div`
    width: 100%;



    img {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        background-color: red;  
        max-width: 50%;
        max-height: 50%;
        .img {
        width: 50%;
    }
}
`;

export const DescriptionContainer = styled.div`
    padding: 0 5vw;
    color: #89354A;
    font-size: 4.5vw;
    transition: all 0.5s ease;
    background-color: #ffd9d8;
    height: ${(props) => (!props.openDescribe ? "0vw" : "40vw")};
    font-family: 'PPWoodland';
    overflow: hidden;
    width: 100%;
    p:first-child{
        padding-bottom: 1rem;
    }

    .see3020 {
        padding-top: 2rem;
    }

`;
