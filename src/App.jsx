import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Home from './component/home'
import Services from './component/services'
import About from './component/about'
import Doctors from './component/doctors'
import Book from './component/book'
import Reviews from './component/reviews'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header /> 
      <Home /> 
      <Services /> 
      <About />
      <Doctors />
      <Book />
      <Reviews/>
      <Footer />
    </>
  )
}

export default App
