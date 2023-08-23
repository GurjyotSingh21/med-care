import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Home from './component/home'
import Services from './component/services'
import About from './component/about'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header /> 
      <Home /> 
      <Services /> 
      <About />
     
     
     
    </>
  )
}

export default App
