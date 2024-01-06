import { DooblePawnContainer } from "./DooblePawn.style";
const DooblePawn = ({ is3020 }) => {
	return (
		<DooblePawnContainer>
			<img className="sub--logo" src={!is3020 ? "svg/dooble_pawn.svg" : "svg/dooble_pawn-yellow.svg"} />
		</DooblePawnContainer>
	);
};

export default DooblePawn;
