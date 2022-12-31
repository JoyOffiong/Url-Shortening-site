import React from 'react';
import {Header} from './pageComponents/Header';
import {HeroSection} from './pageComponents/HeroSection';
import Footer from './pageComponents/Footer';
import AdvancedStats from './pageComponents/AdvancedStats';

function LandingPage() {
  return (
    <div>
    <Header/>
    <HeroSection/>
    <AdvancedStats/>
    <Footer/>
    </div>
  )
}

export default LandingPage