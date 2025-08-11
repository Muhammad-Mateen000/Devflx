import React from 'react'
import Navbar from '../components/Navbar'
import { Hero1 } from '../components/Hero'
import { Services4 } from '../components/Services'
import { About3 } from '../components/About'
import Footer from '../components/Footer'
import Contact1 from '@/components/ContactUs'
import { Faq1 } from '@/components/FAQs'
const Home = () => {
  return (
    <div className=' max-w-7xl m-auto'>
        <Navbar />
        <Hero1/>
        <About3/>
        <Services4/>
        <Faq1/>
        <Contact1/>
        <Footer />
    </div>
  )
}

export default Home