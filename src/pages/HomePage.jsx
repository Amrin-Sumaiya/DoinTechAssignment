import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Packages from '../components/Packages'
import TutorialCard from '../components/TutorialCard'
import CallToAction from '../components/CallToAction' 
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Header />
    <Hero />
   
    <Packages />
    <TutorialCard />
     <AboutUs />
    <Services />
    <WhyChooseUs />
    
    <CallToAction />
    <Footer />
    </>
 
 
  )
}

export default HomePage
