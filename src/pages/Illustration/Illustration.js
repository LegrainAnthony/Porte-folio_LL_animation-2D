import Navigation from "../../components/Navigation/Navigation";
import { IllustrationContainer, PagesContainer } from "./Illustration.style";
import { Image } from 'antd';
import { useState } from 'react';
import { useEffect } from "react";

const Illustration = ({ getTheCurrentPage, mounted }) => {

  useEffect (() => {
    getTheCurrentPage();
  }, []);

  let illustrations = [
    {
      id: 1,
      src: "images/illustrations/illu.png",
      illu: "images/illustrations/A_illu_00.png",
      alt: "illu",
    },
    {
      id: 2,
      src: "images/illustrations/illu2.png",
      illu: "images/illustrations/A_illu_01.png",
      alt: "illu2",
    },
    {
      id: 3,
      src: "images/illustrations/illu3.png",
      illu: "images/illustrations/A_illu_02.png",
      alt: "illu3",
    },
    {
      id: 4,
      src: "images/illustrations/illu4.png",
      illu: "images/illustrations/A_illu_03.png",
      alt: "illu4",
    },
    {
      id: 5,
      src: "images/illustrations/illu5.png",
      illu: "images/illustrations/A_illu_04.png",
      alt: "illu5",
    },
    {
      id: 6,
      src: "images/illustrations/illu6.png",
      illu: "images/illustrations/A_illu_05.png",
      alt: "illu6",
    },
    {
      id: 7,
      src: "images/illustrations/illu7.png",
      illu: "images/illustrations/A_illu_06.png",
      alt: "illu7",
    },
    {
      id: 8,
      src: "images/illustrations/illu8.png",
      illu: "images/illustrations/A_illu_07.png",
      alt: "illu8",
    },
    {
      id: 9,
      src: "images/illustrations/illu9.png",
      illu: "images/illustrations/A_illu_08.png",
      alt: "illu9",
    },
    {
      id: 10,
      src: "images/illustrations/illu10.png",
      illu: "images/illustrations/A_illu_09.png",
      alt: "illu10",
    },
    {
      id: 11,
      src: "images/illustrations/illu11.png",
      illu: "images/illustrations/A_illu_10.png",
      alt: "illu11",
    },
    {
      id: 12,
      src: "images/illustrations/illu12.png",
      illu: "images/illustrations/A_illu_11.png",
      alt: "illu12",
    },
    {
      id: 13,
      src: "images/illustrations/illu13.png",
      illu: "images/illustrations/A_illu_12.png",
      alt: "illu13",
    },
  ];


  return (
    <IllustrationContainer>
      <img
        className="louise-and-pepsi"
        src="../images/accueil/louise-and-pepsi.png"
        alt="aaaaaaaa"
      />
      <PagesContainer>
        <Navigation mounted={mounted} />
        <div className="Illustration__text__container">
          <h2 className="Illustration__text Boogaloo">Illustration</h2>
        </div>
        <div className="paragraph__container">
          <h3 className="paragraph MontserratAlternates">
            Durant mon temps libre, j'en profite pour dessiner pour mon propre
            plaisir, lorsque j'ai une idée qui me vient, réaliser un
            challenge/Diiys ou encore lorsque j'ai envie de tester une nouvelle
            technique de rendu ! Je réaliser mes illustrations principalement
            sur Ipad via procreate.
          </h3>
        </div>
        <div>
        <Image.PreviewGroup>
      {illustrations.map((illustration) => (
        <Image
          key={illustration.id}
          width={200}
          src={illustration.illu}
          preview={{ mask: <Image src={illustration.src} /> }}
          alt={illustration.alt}
        />
      ))}
    </Image.PreviewGroup>
        </div>
      </PagesContainer>
    </IllustrationContainer>
  );
};

export default Illustration;
