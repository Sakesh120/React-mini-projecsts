import React from 'react'
import Header from './header'
const App = () => {
  return (
    <div>
     <h1> My Todos</h1>
     <div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-items">
          <label htmlFor="">Title</label>
          <input type="text" placeholder="What's your task?..." />
        </div>
             <div className="todo-input-items">
          <label htmlFor="">Description</label>
          <input type="text" placeholder="What's your task?..." />
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
