import styled from "styled-components";

export const AcceuilContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #ffe0e0;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .Acceuil_image {
    height: 100%;
  }

  .container__image {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35em;
    z-index: 1;
  }

  .content__container {
    background-color: #ffebeb;
    margin-bottom: 5em;
    height: 80%;
    width: 90%;
    border-radius: 25px;
  }
`;
