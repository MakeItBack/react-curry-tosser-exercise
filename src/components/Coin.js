import dragon from "../img/dragon.png";
import curry from "../img/curry.png";
import "../css/coin.css";

function Coin(props) {
  return (
    <div className={`Coin ${props.flipping && "Coin-flipping"}`}>
      <img src={props.side === "dragon" ? dragon : curry} alt={props.side} />
    </div>
  );
}

export default Coin;
