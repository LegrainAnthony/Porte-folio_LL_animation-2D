import { DooblePawnContainer } from "./DooblePawn.style";
const DooblePawn = ({ is3020 }) => {
	return (
		<DooblePawnContainer>
			<img className="sub--logo" src={!is3020 ? "SVG/dooble_pawn.svg" : "SVG/dooble_pawn-yellow.svg"} />
		</DooblePawnContainer>
	);
};

export default DooblePawn;
