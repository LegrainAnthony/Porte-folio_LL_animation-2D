import styled from "styled-components";
import CursorSVG from "./assets/cursor.svg";
import CursorYellowSVG from "./assets/cursor-yellow.svg";

export const AppContainer = styled.div`
    cursor: ${(props) => (props.is3020 ? `url(${CursorYellowSVG})` : `url(${CursorSVG})`)}, auto;
`;
