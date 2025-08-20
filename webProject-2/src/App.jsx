import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='our program' title='What We Offer' />
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus/>
       <Title subtitle='TESTIMONALS' title='What Student Says' />
        <Testimonials/>

      </div>

    </div>
  )
}

export default App
