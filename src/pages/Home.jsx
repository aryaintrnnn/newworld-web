import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Intrn from '../components/loaderHome/intrn/Intrn'
import About from '../components/about/About'
import Navbar from '../components/navbar/Navbar'
import Work from '../components/work/Work'
import Service from '../components/service/Service'
import Contact from '../components/contact/Contact'

const home = () => {
  return (
    <div>
        <LoaderHome />
        <Navbar />
        <Intrn />
        <About />
        <Work />
        <Service />
        <Contact />
    </div>
  )
}

export default home