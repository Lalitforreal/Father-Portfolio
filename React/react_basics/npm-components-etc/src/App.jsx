import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
       <UserCard name = "Lalit" desc = "ladka hai ji"/>
       <UserCard name = "Lakshit" desc = "ladki hai ji" />
       <UserCard name = "Krish" desc = "pata nahi ji"/>
     </div>
     </>
  )
}

export default App
