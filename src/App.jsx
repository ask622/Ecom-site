import React from 'react';
import Navbar  from './components/Navbar';
import Hero  from './components/HeroSection';
import HeroSection from './components/HeroSection';
import Icon from './components/Icon';
import Gallery from './components/gallery';
import About from './components/About';
import OurServices  from './components/OurServices';
import CountingSection from './components/countingSection';
import Includes from './components/Includes';
import Testimonial from './components/Testimonial';
import SingleSidebar from './components/SingleSiderbar';
import CallToAction from './components/CallToAction';
import Blog from './components/blog';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <HeroSection/>
      <Icon/>
      <About/>
      <Gallery/>
      <OurServices/>
      <CountingSection/>
      <Includes/>
      <Contact/>
      <Testimonial/>
      <SingleSidebar/>
      <CallToAction/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;