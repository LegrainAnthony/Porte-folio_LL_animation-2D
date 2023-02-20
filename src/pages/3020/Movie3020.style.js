import styled from 'styled-components';

export const MovieContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #ffe0e0;
  background-color: ${(props) => (props.props ? '#252649' : '#ffe0e0')};
  transition: background-color 0.3s ease-in-out;
`;

export const PagesContainer = styled.div`
  width: 65%;
  background-color: #ffebeb;
  background-color: ${(props) => (props.props === true ? '#32335e' : '#ffebeb')};
  transition: background-color 0.3s ease-in-out;
`;