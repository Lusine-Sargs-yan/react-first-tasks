import React from "react";
import { saveState, loadState } from "../helpers/localStorage.js";
import "../Counter.css"

class Counter extends React.Component {
  constructor(props) {
    super(props);

    console.log(loadState("myCounter"));

    this.state = {
      count: Number(loadState("myCounter")) || 0,
      inputValue: "",
      maxValue: 10, 
      minValue: 1
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + this.state.maxValue,
    });
    saveState("myCounter", this.state.count + this.state.maxValue);
  };

  decrease = () => {
    this.setState({
      count: this.state.count - this.state.minValue,
    });

    saveState("myCounter", this.state.count - this.state.minValue);
  };

  reset = () => {
    this.setState({
      count: 0,
      inputValue: "",
    });
  };

  handleInput = (event) => {
    this.setState({
      inputValue: Number(event.target.value),
    });
  };

  hendleMaxInput = (event) => {
    this.setState({
      maxValue: Number(event.target.value),
    });

  }
  hendleMinInput = (event) => {
    this.setState({
      minValue: Number(event.target.value),
    });

  }

  addInput = () => {
    if (this.state.inputValue < 10000 || this.state.inputValue > 0) {
      this.setState({
        count: Number(this.state.inputValue),
      });
    }
    saveState("myCounter", this.state.inputValue);
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Value: {this.state.count}</p>
        <p>
          Maximum Value:
          <input 
            type="number"
            onChange={(event) => this.hendleMaxInput(event)}
            value={this.state.maxValue}
            //value="100"
            placeholder="max value"
          />
        </p>
        <p>
          Minimum  Value:
          <input 
            type="number"
            onChange={(event) => this.hendleMinInput(event)}
            value={this.state.minValue}
            //value="5"
            placeholder="min value"
          />
        </p>
        <input
          type="number"
          onChange={(event) => this.handleInput(event)}
          value={this.state.inputValue}
          placeholder="enter your count"
        />
        <button onClick={this.addInput} className="add-button">Add</button>
        <button onClick={this.increase} className="increase-button">Increase</button>
        <button disabled={this.state.count <= 0} onClick={this.decrease} className="decrease-button">
          Decrease
        </button>
        <button onClick={this.reset} className="reset-button">Reset</button>
      </div>
    );
  }
}

export default Counter;
