import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="contaiber">
      <Programs/>
      </div>
      
    </div>
  )
}

export default App
