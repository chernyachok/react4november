import React, { Component } from 'react'

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  }
  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={(e)=>this.handleChange(e)} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={(e)=>this.handleChange(e)} />
          <label htmlFor="belt">Belt:</label>
          <input type="text"id="belt" onChange={(e)=>this.handleChange(e)} />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default AddNinja
