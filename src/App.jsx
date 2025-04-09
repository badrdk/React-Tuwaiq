import React from 'react'
import './app.css'

function App() {
  const FirstName = "badr" ;
  return (

    <div>
        <h1>every element must have one parents </h1>
        <span>10+10 = {10+10}</span>
        <p>any element tag must be closed </p>
        <p className="paragraph" > this is s class name</p>
        <span style={{color: 'red' ,  backgroundColor:'white'}}>black</span>

    </div>
  )
}

export default App