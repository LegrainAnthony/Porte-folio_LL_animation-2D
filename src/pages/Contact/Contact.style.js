import styled from "styled-components";

export const ContactContainer = styled.div`

@import url('../../font.css');

  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #FFEBEB;


  .wave__container {
    width: 100%;
    overflow: hidden;
    .wave {
        width: 100%;
    }
  }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 10vw;
      margin: -5vw 0 -5vw 0;
    }

    @media only screen and (min-width: 768px) {
      .title {
        font-size: 7vw;
        margin: 0 0 -2vw 0;
      }
    };
    @media only screen and (min-width: 1440px) {
      .title {
        font-size: 4vw;
        margin-bottom: 2vw;
        margin-top: 1.5vw;
        letter-spacing: 2px;
      }
    };
`;

export const DownloadButton = styled.div`
    margin-bottom: 10vw;

    .download__link {
      color: #89354A;
      text-decoration: none;
      border-bottom: 1px solid #89354A;
      font-family: 'PPWoodland';
    }

    @media only screen and (min-width: 768px) {
      margin-bottom: 6vw;

      .download__link {
        font-size: 2.5vw;
      }
    };

    @media only screen and (min-width: 1440px) {
      margin-bottom: 4vw;

      .download__link {
      font-size: 1.5vw;
      };
    };
`;

export const CvContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5vw;

    .ant-image {
      width: 90%;
    }

    .image {
      width: 100%;
    }

    @media only screen and (min-width: 768px) {
      .ant-image {
        width: 80%;
      }
    };

    @media only screen and (min-width: 1440px) {
      .ant-image {
        width: 50%;
      }
    };
`;
