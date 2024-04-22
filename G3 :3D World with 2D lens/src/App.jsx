import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Moving from './Components/Moving'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Laster from './Components/Laster'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Nav/>
      <Home/>
      <Moving/>
      <About/>
      <Eyes/>
      <Projects/>
      <Laster/>
      <Footer/>
    </div>
  )
}

export default App