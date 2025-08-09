import React from 'react'
import Navbar from '../components/Navbar'
import { Hero1 } from '../components/Hero'
import Footer from '../components/Footer'
import { Services4 } from '../components/Services'
import { About3 } from '../components/About'
const Home = () => {
  return (
    <div className=' max-w-7xl m-auto'>
        <Navbar />
        <Hero1/>
        <About3/>
        <Services4/>

        <Footer />
    </div>
  )
}

export default Home