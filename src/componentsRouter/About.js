import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default Rainbow(About);
