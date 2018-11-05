import React, {Component} from 'react';

class AddTodo extends Component{
  constructor(){
    super()
    this.state={
      content: ''
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
          <br/>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
  handleChange =(e)=>{
     this.setState({
       content: e.target.value
     })
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    this.props.addItem(this.state)
    this.setState({
      content: ''
    })
  }
}


export default  AddTodo;
