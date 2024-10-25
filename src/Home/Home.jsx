import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSpraed from './LocationSpraed'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponser from './Sponsor'
//import Cart from './Cart'

const Home = () => {
  return (
    <div>
        <Banner />
        <HomeCategory/>
        <CategoryShowCase />
        <Register />
        <LocationSpraed />
        <AboutUs />
        <AppSection />
        <Sponser />
        
    </div>
  )
}

export default Home