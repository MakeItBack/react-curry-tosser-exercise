function Scoreboard(props) {
  return (
    <div>
      <h2 style={{ color: "rgb(39, 39, 137)", fontWeight: "bolder", marginTop: "75px" }}>
        Scoreboard
      </h2>
      <p>
        <span>Dragon Flips: {props.dragonScore}</span> |{" "}
        <span>Curry Flips: {props.curryScore}</span>
      </p>
      <p>There have been {props.flips} flips</p>
    </div>
  );
}
export default Scoreboard;
