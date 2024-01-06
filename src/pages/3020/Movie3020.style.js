import styled from "styled-components";

export const MovieContainer = styled.div`

 @import url('../../font.css');
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.is3020 ? "#32335e" : "#FFE6E6")};

  p {
    font-family: 'Special Elite', cursive;
    color: white;
  }



  .wave__container {
    width: 100%;
    overflow: hidden;
    .wave {
        width: 100%;
    }
  }

  .logo__container {
    width: 50vw;
    margin-top: 5vw;
    margin-bottom: 10vw;
    .logo {
        width: 100%;
    }
  }

  .paragraph__container {
    padding: 0 5vw;
    width: 100%;
    text-align: center;
    margin-bottom: 10vw;
    .paragraph {
        margin-bottom: 5vw;
    }
  }

  .movie__container {
    width: 100%;
  }

  .yellow {
    color: #fde702;
    
  }

  .years {
    color: white;
    font-size: 4.5vw;
    margin: 10vw 0;
    font-family: 'Special Elite', cursive;

    span {
        /* font-family: 'Amatic SC', cursive; */
        /* font-size: 8vw; */
    }
  }

  @media only screen and (min-width: 768px) {

      .paragraph__container {
        font-size: 2.5vw;
       }

       .years {
        font-size: 4vw;
       }

    }

  @media only screen and (min-width: 1440px) {

    .logo__container {
        width: 25vw;
        margin-top: 0;
        margin-bottom: 8vw;
    }

    .paragraph__container {
        font-size: 1.5vw;
        margin-bottom: 3vw;
        .paragraph {
            margin-bottom: 3vw;
        }
    }

    .movie__container {
        width: 50%;
    }

    .years {
    font-size: 2.5vw;
    margin: 5vw;
    }
  }    

    
`;

export const RoleContainer = styled.div`
    /* margin-top: 10vw; */
    margin-bottom: 2vw;

    .role__title {
        color: #fde702;
        justify-self: start;
        font-size: 6vw;
        margin-bottom: 6vw;
        padding-left: 2vw;
        font-family: 'Special Elite';
        text-transform: uppercase;
    }

    .role__subtitle {
        color: #fde702;
        justify-self: start;
        font-size: 4.5vw;
        margin-bottom: 6vw;
        margin-left: 4vw;
        padding-left: 3.2vw;
        font-family: 'Special Elite';
    }

    .role__text {
        text-align: start;
        margin: 0 4vw 10vw 4vw;
        padding-left: 3.2vw;
    }

    .lineup__container {
        width: 100vw;
        margin-bottom: 10vw;
        img {
            width: 100%;
        }
    }

    .animatic__container {
        margin-left: -2vw;
        margin-top: 5vw;
        margin-bottom: 10vw;
    }

    .images3D__container {
        margin-bottom: 10vw;
        .slick-dots {
            li {
                button {
                    background-color: #fde702;
                }
            }
        }

        width: 100vw;
        .img3D__container {

        .img3D {
            width: 100%;
        }
    }
    }

    .gif__container {
        width: 100%;
        display: flex;
        margin-top: 10vw;
        margin-bottom: 5vw;
        justify-content: center;
        .sub__container {
            width: 50%;
            img {
            width: 100%;
        }
        }
  
    }

    .manon {
        margin: 10vw 0vw;
        text-align: center;
    }

    .onirique__text {
        margin: 0 0 10vw 0;
    }

    .animation__container {
        margin-bottom: 10vw;
    }

    @media only screen and (min-width: 768px) {

        .role__title {
            font-size: 4.5vw;
        }

        .role__subtitle {
            padding-left: 2vw;
            font-size: 3.5vw;
        }

        .role__text {
            font-size: 2.5vw;
            padding-left: 2vw;
            margin: 0 4vw 5vw 4vw;
        }

        .images3D__container {
            margin-top: 5vw;
        }

        .gif__container {
            .sub__container {
                width: 25%;
            }
        }

        .manon {
        margin: -5vw 0 10vw 0;
        text-align: center;
    }
    }

    @media only screen and (min-width: 1440px) {

        .role__title {
            font-size: 2.5vw;
            margin-bottom: 4vw;
            margin-top: 5vw;
        }

        .role__subtitle {
            padding-left: 2vw;
            font-size: 2vw;
            margin-bottom: 2vw;
        }

        .role__text {
            font-size: 1.5vw;
            padding-left: 2vw;
            margin: 0 4vw 5vw 4vw;
        }

        .lineup__container {
            width: 50%;
            margin-left: 25%;
            margin-bottom: 0;
        }

        .images3D__container {
            margin-top: 5vw;
            width: 50vw;
            margin-left: 25vw;
            margin-bottom: 0;
        }

        .animatic__container {
            width: 50%;
            margin-left: 25%;
            margin-bottom: 0;
        }

        .gif__container {
            margin: 0;
            margin-bottom: 0;
            .sub__container {
                width: 15%;
            }
        }

        .animation__container {
            width: 50%;
            margin-left: 25%;
            margin-bottom: 5vw;
        }

        .manon {
            margin-top: 2vw;
        }

      
    }


`;
