import styled from "styled-components";
import CursorYellowSVG from "../../assets/cursor-yellow.svg";
import CursorSVG from "../../assets/cursor.svg";

export const HomeContainer = styled.div`
  @import url('../../font.css');
  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffd9d8;
  position: relative;
  overflow: hidden;


  .video__container {
        position: relative;
        cursor: url(${CursorYellowSVG}), auto;
        

        .mask {
          background-color: rgba(255, 224, 224, 0.250);
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 10;
        }
        .infos__container {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 6vw;
          padding-top: 3vw;
          height: 100%;
          width: 100%;
          z-index: 15;
          color: #FFEDED;
        
        }
        .video {
          width: 100%;
        }

        .title-sub__container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;


          .info__title {
            font-size: 8vw;
            margin-bottom: 2vw;
            font-family: 'Carena';
          }
          .info__sub-title {
            font-size: 6vw;
            font-family: 'PPWoodland';
          }

          @media only screen and (min-width: 1440px){
            padding-top: 5vw;
            .info__title {
            font-size: 5vw;
            margin-bottom: 2vw;
            font-family: 'Carena';
          }
          .info__sub-title {
            font-size: 3vw;
            font-family: 'PPWoodland';
          }
          }
        }

        .info__button {
          border: 2px solid #FFEDED ;
          /* padding: 0.45rem 2.4rem; */
          padding: 0.3vw 2vw;
          font-family: 'PPWoodland';
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          .text__button {
            font-size: 4vw;
          }





          @media only screen and (min-width: 768px) {
            padding: 0.3vw 2vw;

            .text__button {
            font-size: 3vw;
          }
        }

        @media only screen and (min-width: 1440px) {

            .text__button {
            font-size: 2vw;
          }
        }

        @media (hover: hover) {
          &:hover {
            color: #fde702;
             border-color: #fde702;
             transform: scale(1.1);
          }
        }
      }

        .pawn__container {
          width: 5vw;
          
          @media only screen and (min-width: 768px) {
            width: 3vw;
          }

        .reversed__pawn {

        }
      }
  }
  
  /* display: none; */
.page__container {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .vague__container {
    /* display: none; */
    height: 2rem;
    width: 100vw;
    display: flex;
    align-items: end;
    position: absolute;
    top: -2rem;
    z-index: 20;
    cursor: url(${CursorSVG}), auto;
  }

  .title__container {
    margin: 10vw 0;

    .title {
      font-family: 'Carena';
      font-size: 10vw;
      color: #89354a;
    }

  @media only screen and (min-width: 1200px) {
    margin: 3vw 0;
    .title {
      font-size: 6vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    margin: 0vw 0;
  }
  }

  .paragraph__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 8vw;
    text-align: center;
    font-family: 'PPWoodland';
    font-size: 6vw;
    color: #89354a;

    p {
      margin-bottom: 8vw;
    }

    @media only screen and (min-width: 768px) {
         p {
          font-size: 4vw;
         }
    }

    @media only screen and (min-width: 1200px) {
         p {
          font-size: 3vw;
         }
    }

    @media only screen and (min-width: 1440px) {
      padding: 4vw 20vw 0 20vw;
         p {
          margin-bottom: 4vw;
          font-size: 1.5vw;
         }
        
    }

  }
}







  /* .video__container {
    position: relative;

    .mask {
      background-color: rgba(255, 224, 224, 0.250);
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 10;
    }

    .infos__container {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 2rem;
      height: 100%;
      width: 100%;
      z-index: 15;
      color: #FFEDED;

      .info__title {
        font-size: 6rem;
        font-family: 'Carena';
        padding-top: 10rem
      }
      .info__sub-title {
        font-size: 4rem;
        font-family: 'PPWoodland';
        letter-spacing: 0.45rem;
      }

      .info__button {
        border: 2px solid #FFEDED ;
        padding: 0.45rem 2.4rem;
        font-family: 'PPWoodland';
        font-weight: bold;
        margin-top: 4rem ;
        .text__button {
            font-size: 1.5rem;
        }
      }

      .pawn__container {
        margin-top: 4.5rem;
        width: 2.5rem;
        height:  2.5rem;

        .reversed__pawn {

        }
      }

    }

    .video_c {
      height: 100%;
      z-index: 5;
      .video {
        margin-top: -10rem;
        width: 100%;
      }
    }
  }

  .vague__container {
    width: 100%;
    margin-top: -8rem ;
    z-index: 15;
    .vague {
     
    }
  }

 .title__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: -2.5em;
  font-family: 'Amatic SC';

    .title {
      font-size: 3.5em;
      color: #8f4646;
      font-weight: 700;
      margin-bottom: 0.3em;
      letter-spacing: 0.05em;
      
    }

  }
  
  .paragraph__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 3em;
    text-align: center;
    font-size: 1.35em;
    line-height: 28px;
    font-weight: 400;
    color: #8f4646;
    .paragraph1  {
      margin-bottom: 1em;
      width: 45em;
    }

    .paragraph2  {
      width: 30em;
      margin-bottom: 1em;
    }

    .paragraph3  {
      width: 30em;
    }

  }

  .demo__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1.1em;

    .pad {
      width: 1.5em;
      margin-top: 0.3em;
    }
    
    .pad-right {
      margin-right: 1em;
    }  
    .pad-left {
      margin-left: 0.8em;
    }

    .demoreel__container {
      transition: 0.2s ease-in-out;

      .demoreel {
        font-size: 2.5em;
        font-weight: bold;
        color: #e49393;
        text-decoration: none;
      }
    }

    .demoreel__container:hover {
      transform: scale(1.1);
    }
  }

  .image__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.1em;
    
    .image {
      width: 400px;
      cursor: pointer;
    }
  }
  
  @media screen and (max-width: 768px) {

    .title__container {

    .title {
      font-size: 2.5em;
    }
  }

    .paragraph__container {
    padding: 3em;
    text-align: center;
    font-size: 1.15em;
    line-height: 28px;
    font-weight: 400;
    color: #8f4646;
    .paragraph1  {
      margin-bottom: 1em;
      width: 45em;
    }

    .paragraph2  {
      width: 30em;
      margin-bottom: 1em;
    }

    .paragraph3  {
      width: 30em;
    }

  }

    .image__container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.1em;
    
    .image {
      width: 350px;
      cursor: pointer;
    }
  }

  } */
  `;
