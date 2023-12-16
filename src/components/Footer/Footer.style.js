import styled from "styled-components";

export const FooterContainer = styled.div`

    @import url('../../font.css');

    background-color: ${(props) => (!props.is3020 ? (props.isHome ? "#FFE6E6" : "#FFD9D8") : "#252649")};
    width: 100%;
    height: 100%;
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.5vw 2vw;
    font-family: 'Carena';

    .sub--logo {
        width: 2.5rem;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        color: ${(props) => (!props.is3020 ? "#89354A" : "#fff")};
        text-decoration: none;
        font-size: 3.3vw;
        font-weight: bold;

        &:last-child {
            margin-left: 3vw ;
        }
        
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        margin-left: 12vw ;

        a {
            font-size: 2.5vw;
        }
    }
    

    @media only screen and (min-width: 1200px) {
        width: 100%;
        margin-left: 12vw ;

        a {
            font-size: 2vw;
        }
    }

    @media only screen and (min-width: 1440px) {
        margin-left: 0;
        width: inherit;

        a {
            font-size: 1.2vw;
        }
    }

    @media only screen and (min-width: 1440px) {
        margin-left: 0;
        width: inherit;

        a {
            font-size: 1vw;
        }
    }
    
    
`;
export const NetworkContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            height: 6vw;
            width: 6vw;
            margin-right:  2vw;

            &:last-child {
                margin-right: 0;
            }
        }

        @media only screen and (min-width: 768px) {
            a {
            height: 4vw;
            width: 4vw;
            margin-right:  2vw;

            &:last-child {
                margin-right: 0;
            }
        }

         }
         @media only screen and (min-width: 1200px) {
            a {
            height: 2vw;
            width: 2vw;
            margin-right:  2vw;
        }}

        @media only screen and (min-width: 1440px) {
            a {
            height: 1.5vw;
            width: 1.5vw;
            margin-right:  2vw;
        }}
`;
