import React, {useState} from 'react';
import {Header} from './pageComponents/Header';
import {HeroSection} from './pageComponents/HeroSection';
import Footer from './pageComponents/Footer';
import AdvancedStats from './pageComponents/AdvancedStats';

import { NavBar } from './pageComponents/NavBar';

function LandingPage() {

  const [navBar, setNavBar] = useState(true);

const showNavBar =()=>{
  setNavBar(!navBar)
}

  return (
    <div>
    <Header showNavBar={showNavBar}
            navBar={navBar}
            setNavBar={setNavBar}/>
    {navBar ? null : <NavBar/>}
    <HeroSection/>
    <AdvancedStats/>
    <Footer/>
    </div>
  )
}

export default LandingPage