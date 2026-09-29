import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Creatorbyte from '../components/creatorByte'
import Packages from '../components/Packages'
import TutorialCard from '../components/TutorialCard'
import Lastsection from '../components/lastsection' 
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Header />
    <Hero />
   
    <Packages />
    <TutorialCard />
    <Services />
     <AboutUs />
   
    <Creatorbyte />
    
    <Lastsection />
    <Footer />
    </>
 
 
  )
}

export default HomePage
