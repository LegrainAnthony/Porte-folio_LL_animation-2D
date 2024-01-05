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
    display: ${(props) => (props.isHome ? "none" : "block")};
    width: 100%;

    .wave {
        width: 100%;
    }

    /* margin-top: -1.6vw; */

    
  }

`;

export const PageContainer = styled.div`

    .title {
        text-align: center;
        margin-top: -10vw;
    }
    .text__container {
        margin-top: 0vw;
        font-size: 5vw;
        padding: 1vw;
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

    @media only screen and (min-width: 768px) {

        .title {
            margin-top: -6vw;
            font-size: 7vw;
            letter-spacing: 2px;
            margin-bottom: -10vw;
        }

        .text__container {
            font-size: 3vw;
        }

    .demoreel__container {
        margin-top: 0;
        .demoreel__title {
            font-size: 4.5vw;
        }
    }
    }

    @media only screen and (min-width: 1440px) {

        .title {
            text-align: center;
            margin-top: -1vw;
            font-size: 4vw;
        }

        .text__container {
            margin-top: 8vw;
            font-size: 1.5vw;
            padding: 0 10vw;
            text-align: center;
            font-family: 'PPWoodland';
            color: #89354A ;
        }
     
        .demoreel__container {
        margin-top: 0vw;
        .demoreel__title {
            font-size: 2.5vw;
            font-family: 'Carena';
            color: #89354A;
            padding: 5vw 0 3vw 0;
        }
        text-align: center;
        width: 100%;
        .video_container {
            width: 60%;
            margin-left: 20%;
         .video {
            width: 100%;
         }
        }
    }
    }

`;

export const OtherProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        padding: 5vw 0 0 0;
        font-size: 6vw;
        margin-bottom: 2.5vw;
        font-family: 'Carena';
        color: #89354A ;
    }

    @media  only screen and (min-width: 768px) {
        h2 {
            font-size: 4.5vw;
            margin-bottom: 2.5vw;
        }
    }

    @media  only screen and (min-width: 1440px) {
        h2 {
            font-size: 2.5vw;
            padding: 2.8vw 0 0 0;
        }
    }

`;

export const ProjectListContainer = styled.div`

    @media only screen and (min-width: 1440px) {
        padding: 0vw 10vw;
        margin-top: -2vw;
    }

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
        left: ${(props) => (props.reverse ? "50%" : "0")};
        bottom: -2vw;
        width: 50%;
        height: 15%;
        background-color: #89354A; /* Assurez-vous que cela correspond à la couleur de fond de l'arrière-plan */
        z-index: 1;
        /* text-align: end; */
    }

    @media only screen and (min-width: 1440px) {
        font-size: 2vw;

        &::after {
            right: 0%;
            height: 10%;
            width: 50%;
        }
    }

`;

export const ProjectContainer = styled.div`
    width: 100%;
    margin-bottom: 5vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
     flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
     position: relative;
     margin-bottom: 5vw;
    }

    @media only screen and (min-width: 1440px) {
        margin-bottom: 3vw;
    }

`;

export const PreDescriptionContainer = styled.div`
        padding: 5vw;
        background-color: #ffd9d8;
        width: 100%;
        color: #89354A;
        font-family: 'PPWoodland';
        font-size: 4.5vw;



        @media only screen and (min-width: 768px) {
            display: ${(props) => (props.reverse ? "block" : "flex")};
            align-items: flex-end;
            flex-direction: column;
            font-size: 2.5vw;
            height: 28.1vw;


            .text {
            max-width: 45%;
            }
        }

        @media only screen and (min-width: 1440px) {
            font-size: 1.6vw;
            height: 22.25vw;
        }
    
`;

export const SeeMoreContainer = styled.div`      
        display: flex;
        align-items: center;
        margin-top: 5vw;
        max-width: 25%;
        justify-content: space-between;

        @media only screen and (min-width: 768px) {
            justify-content: none;
            max-width: 15vw;
            margin-right: ${(props) => (props.reverse ? "0rem" : "30%")};
            margin-top: ${(props) => (props.seeMore3020 ? "4vw" : "6vw")};
        }


        @media only screen and (min-width: 1440px) {
            justify-content: none;
            max-width: 12%;
            margin-top: 2vw;
            margin-right: ${(props) => (props.reverse ? "0rem" : "34%")};
            margin-top: ${(props) => (props.seeMore3020 ? "3vw" : "5vw")};
            cursor: pointer;
        }

        
`;

export const SeeMoreButton = styled.div`
        font-family: 'Carena';
        font-size: 3vw;
        font-weight: 700;

        @media only screen and (min-width: 768px) {
            font-size: 2vw;
       
        } 

        @media only screen and (min-width: 1440px) {
            font-size: 1.2vw;

        }

        
`;

export const SeeMoreArrow = styled(MdOutlineArrowDropDown)`
        transition: all 0.3s ease;
        transform: ${(props) => (!props.openDescribe ? "rotate(0deg)" : "rotate(180deg)")};
        margin-bottom: 1vw;
        margin-left: 2vw;

        @media only screen and (min-width: 768px) {
            margin-left: 0vw;
        }

        @media only screen and (min-width: 1440px) {
            margin-bottom: 0vw;
        }
`;

export const Synopsis = styled.p`
        font-family: 'Carena';
        margin-bottom: 4vw;
        font-size: 4vw;
        font-weight: 700;
      

        @media only screen and (min-width: 768px) {
            font-size: 2vw;
            margin-right: ${(props) => (props.reverse ? "0rem" : "35%")};
        }

        @media only screen and (min-width: 1440px) {
            font-size: 1.5vw;
            margin-bottom: 3vw;
        }

        
`;

export const ProjectImage = styled.div`
    width: 100%;
    position: relative;
    img {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        position: absolute;
        top: 0;
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
        .link {
            text-decoration: none;
            font-family: 'Special Elite';
            position: relative;
            color: #551A8B;    
        }
    }

     @media only screen and (min-width: 768px) {
            font-size: 2.5vw;
            height: ${(props) => (!props.openDescribe ? "0vw" : "16vw")};
            p:first-child{
                padding-top: 2.5vw;
            }   

            .see3020 {
                padding-top: 1.5vw;
            } 
    }

    @media only screen and (min-width: 1440px) {
        font-size: 1.5vw;
        height: ${(props) => (!props.openDescribe ? "0vw" : "12vw")};


        .see3020 {
        .link {
            font-size: 1.4vw;
            &::after {
                content: "";
                position: absolute;
                width: 0%;
                height: 2px;
                bottom: 0;
                left: 0;
                transition: 0.2s ease-in-out;
                background-color: #551A8B;
           
            }

            &:hover::after {
                width: 100%;
            }    
        }
    }
       
    }

`;
