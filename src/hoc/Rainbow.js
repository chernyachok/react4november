import React from 'react';

const Rainbow = (WrappedComponent) => {
   const colours = ['red', 'orange', 'pink', 'blue', 'green'];
   const reandomColour = colours[Math.floor(Math.random()*5)]
   const className = reandomColour + '-text';

   return (props) => {
     return (
       <div className={className}>
        <WrappedComponent {...props}/>
       </div>
     )
   }
}

export default Rainbow;
