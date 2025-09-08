import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
        <p id='para'> You have clicked {count} times</p>
        <button id='btn1' onClick={()=>{
            setCount(count+1)
        }}> Increment</button>

        <button id='btn2' onClick={()=>{
            setCount(count-1)
        }}>Decrement</button>


    </div>
  )
}

export default Counter
