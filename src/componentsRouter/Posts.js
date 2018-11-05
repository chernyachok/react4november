import React, {Component} from 'react';

class Posts extends Component{
  constructor(){
    super()
    this.state={
      post: null
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
        .then(data => {
          this.setState({
            post: data
          })
        })
  }

  render(){
    let post = this.state.post ? (
      <div className="post">
        <h4>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    )
    :
    (
      <div className="center">Loading...</div>
    )
    return (
      <div className= "container">
        {post}
      </div>
    )
  }
}
export default Posts;
