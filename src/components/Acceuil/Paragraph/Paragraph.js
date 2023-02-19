import "./Paragraph.style.js";
import { ParagraphContainer } from "./Paragraph.style.js";

function Paragraph() {
  return (
    <ParagraphContainer>
      <p className="paragraph">Bonjour ou bonsoir!</p>
      <p className="paragraph">
        Je m'appelle Louise Levasseur, et je suis passionnée par les dessins
        animés et le dessin depuis l'enfance. Au fil des années, cette passion
        ne m'a jamais quitté et lorsque j'ai découvert ECV Bordeaux, la question
        ne se posait plus, et je suis entrée dans cette école en Septembre 2018.
        Depuis la rentrée 2021, j'ai choisi la spécialisation animation 2D qui
        est le domaine dans lequel je souhaiterai travailler.
      </p>
      <p className="paragraph">Je te laisse découvrir mon portfolio !</p>
    </ParagraphContainer>
  );
}

export default Paragraph;
