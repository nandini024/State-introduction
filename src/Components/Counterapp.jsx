


import React, { Component } from 'react';

import './Counterapp.css';

export default class Counterapp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1});
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };



  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-heading">Counter App</h1>
        <h2 className="counter-value">{this.state.count}</h2>
        <div className="counter-buttons">
          <button className="counter-btn" onClick={this.increment}>+{this.state.step}</button>
          <button className="counter-btn" onClick={this.decrement} disabled={this.state.count==0}>-{this.state.step}</button>
          <button className="counter-btn" onClick={this.reset}>Reset</button>
        </div>

        
      </div>
    );
  }
}
