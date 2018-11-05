import React from 'react';

const HomeLists = (props) => {
  return (
    <div className="container">
    <h5>Post {props.lists.id} </h5>
      <p>{props.lists.body}</p>
    </div>
  )
}

export default HomeLists;
