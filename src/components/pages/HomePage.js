import React from 'react'
import Header from '../homePage/HomePageHEDR';
import InfoBox from '../homePage/InfoBox';
import InfoBox2 from '../homePage/InfoBox2';
import Prepare from '../homePage/Prepare';
import NavbarBotton from './NavbarBottom';
function HomePage() {
    return (
      <div>
        <Header />
        <InfoBox />
        <InfoBox2 />
        <Prepare />
        <NavbarBotton />
      </div>
    );
  }
  
  export default HomePage;
  