import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {

  return (
    <div>
            <Banner />
            <HomeCategory />
            <CategoryShowCase />
            <Register />
            <LocationSprade />
            <AboutUs />
            <AppSection />
            <Sponsor />
            <Outlet />
    </div>
  )
}

export default Home
