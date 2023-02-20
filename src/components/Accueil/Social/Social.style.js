import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

  .cat {
    height: 200px;
    width: 200px;
    z-index: 999;
  }

  .social__seconde-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 1;
    height: 100%;
    margin-left: 5em;
  }

  .social__last-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 1;
    height: 100%;
    margin-left: 5em;
    right: 0;
  }

  .link {
    position: relative;
    z-index: 999;
  }
`;
