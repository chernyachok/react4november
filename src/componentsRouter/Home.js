import React from 'react';
import HomeLists from './HomeLists';
import {Link} from 'react-router-dom'
class Home extends React.Component {
  state ={
    lists: []
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => res.json())
        .then(data => {
          this.setState({
            lists: data.slice(0,10)
          })
        })
  }

  render(){
    let lists = this.state.lists.length ?
    (
      this.state.lists.map(item => {
        return <Link to={"/"+item.id}><HomeLists lists={item} key={item.id}/></Link>
      })
    )
    :
    (
      <div className="center">Loading...</div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {lists}
      </div>
    )
  }

}

export default Home
