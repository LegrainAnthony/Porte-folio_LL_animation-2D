import styled from "styled-components";

export const TitleContainer = styled.div`
    margin: 10vw 0;

    .title {
      font-family: 'Carena';
      font-size: 10vw;
      color: #89354a;
    }

  @media only screen and (min-width: 1200px) {
    margin: 3vw 0;
    .title {
      font-size: 3.5vw;
    }
  }

  @media only screen and (min-width: 1440px) {
    margin: 0vw 0;
  }

`;
