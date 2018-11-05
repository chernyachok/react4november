import React from 'react';

const Todos = ({todos, deleteItem})=>{
  const todosItems = todos.length ? (
    todos.map(item=>{
      return (
        <div className="collection-item" key={item.id} onClick={()=> deleteItem(item.id)}>
          <span>{item.content}</span>
        </div>
      )
    })
  )
  :
  (
    <p className="center">No todos in your list</p>
  )
  return (
    <div className="todos collection">
      {todosItems}
    </div>
  )
}
export default  Todos;
