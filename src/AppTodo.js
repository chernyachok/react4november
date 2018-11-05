import React, { Component } from 'react';

import Todos from './components/Todos'
import AddTodo from './components/AddTodo';
class App extends Component {

  constructor(){
    super()
    this.state = {
      todos:[
        {id:1, content: 'content1'},
        {id:2 , content: 'content2'}
      ]
    }
  }
  render() {
    return (
      <div className="App container">
        <Todos todos={this.state.todos} deleteItem={this.deleteItem}/>
        <AddTodo addItem={this.addItem}/>
      </div>
    );
  }

  deleteItem = (id)=>{
    //console.log(id);
    const todos = this.state.todos.filter(item => item.id!== id);
    this.setState({
      todos
    })
  }
  addItem =(newItem)=>{
    newItem.id= (this.state.todos.length && this.state.todos[this.state.todos.length-1].id +1) || 1;
    const todos = [...this.state.todos, newItem]
    this.setState({
      todos
    },()=>console.log(this.state.todos))
  }
}

export default App;
