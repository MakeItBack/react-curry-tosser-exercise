import React, { Component } from "react";
import Coin from "./Coin";
import Scoreboard from "./Scoreboard";

import "../css/flipper.css";

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.flipIt = this.flipIt.bind(this);
    this.state = { side: "curry", dragonScore: 0, curryScore: 0, numFlips: 0, flipping: false };
  }

  flipIt() {
    this.setState({ flipping: true });
    setTimeout(() => {
      this.setState({ flipping: false });
      const flip = Math.floor(Math.random() + 0.5);
      console.log(flip);
      const newSide = flip ? "curry" : "dragon";
      switch (newSide) {
        case "dragon":
          this.setState((st) => ({
            side: "dragon",
            dragonScore: st.dragonScore + 1,
            numFlips: st.numFlips + 1,
          }));
          break;
        case "curry":
          this.setState((st) => ({
            side: "curry",
            curryScore: st.curryScore + 1,
            numFlips: st.numFlips + 1,
          }));
          break;
        default:
          break;
      }
    }, 2000);
  }
  render() {
    return (
      <div className="Flipper">
        <h1>Curry Tosser</h1>
        <Coin flipping={this.state.flipping} side={this.state.side} />
        <button onClick={this.flipIt} disabled={this.state.flipping}>
          Flip it!
        </button>
        <Scoreboard
          dragonScore={this.state.dragonScore}
          curryScore={this.state.curryScore}
          flips={this.state.numFlips}
        />
      </div>
    );
  }
}

export default Flipper;
