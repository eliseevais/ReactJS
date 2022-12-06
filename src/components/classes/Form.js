import React, { Component } from 'react';

export class Form extends Component {

  state = {
    name: 'Irina',
    count: 0
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleClick = (event) => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h4>Classes Component</h4>
        <h5>Name: {this.state.name}</h5>
        <input type="text" onChange={this.handleChange} />
        <hr />
        <p>COUNT: {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
      </>
    )
  }
}