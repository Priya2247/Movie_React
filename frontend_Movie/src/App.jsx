import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Moviecard from "./components/MovieCard"

function App() {
  const date="2025"
 return(
  <>
  {date==="2025"?
 <Moviecard movie={{title:"Tim's film",release_date:"2025"}}/>:
 <Moviecard movie={{title:"Pushpa",release_date:"2024"}}/>
  }
 </>
 )
 
}

export default App
