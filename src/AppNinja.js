import React, { Component } from 'react';
import Ninjas from './components/Ninjas'
import AddNinja from './components/AddNinja'
import './components/style.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
        ninjas: [
          { name: 'Ryu', age: 30, belt: 'black', id: 1 },
          { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
          { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
        ]
      }
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState);
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()*100;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    },()=>{
      console.log('AFTER---',this.state);
    });
  }

  deleteNinja = (id)=>{
    const ninjas = this.state.ninjas.filter(item => item.id !== id)
    //console.log(ninjas);
    this.setState({
      ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
