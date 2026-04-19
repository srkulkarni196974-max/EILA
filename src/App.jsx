import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import HowItIsMade from './components/HowItIsMade'
import Product from './components/Product'
import Impact from './components/Impact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Story />
      <HowItIsMade />
      <Product />
      <Impact />
      <Footer />
    </div>
  )
}

export default App
