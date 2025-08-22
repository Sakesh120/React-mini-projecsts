import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/video Player/VideoPlayer'

const App = () => {
  const [playState ,setPlayState]=useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='our program' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus/>
       <Title subtitle='TESTIMONALS' title='What Student Says' />
        <Testimonials/>
       <Title subtitle='Contact us' title='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
