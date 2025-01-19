import React from 'react'
import ContactUs from '../../component/JinraiUI/Contact/ContactUs'
import MapSection from '../../component/JinraiUI/Contact/MapSection'
import ContactSection from '../../component/JinraiUI/Contact/ContactSection'
import Navbar from '../../component/JinraiUI/Navbar'
import Footer from '../../component/JinraiUI/Footer'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <ContactUs />
      <ContactSection />
      <MapSection />
      <Footer/>
    </>
  )
}
export default Contact