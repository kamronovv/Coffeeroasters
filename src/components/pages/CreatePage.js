import React from 'react';
import CreateHeader from "../subscribePage/CreateHeader";
import CreatePrepare from '../subscribePage/CreatePrepare';
import CreateBox3 from "../subscribePage/CreateBox3";
import NavbarBotton from './NavbarBottom';

function HomePage() {
    return (
      <div>
        <CreateHeader/>
        <CreatePrepare />
        <CreateBox3 />
        <NavbarBotton />
      </div>
    );
  }
  
  export default HomePage;
  