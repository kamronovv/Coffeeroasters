import React from 'react'
import AbauteHeader from '../abautePage/AbauteHeader';
import CommitmentPage from '../abautePage/CommitmentPage';
import Factors from '../abautePage/Factors';
import Headquarters from '../abautePage/Headquarters';
import NavbarBottom from "./NavbarBottom"
function AbautePage() {
    return (
      <div>
        <AbauteHeader />
        <CommitmentPage />
        <Factors />
        <Headquarters />
        <NavbarBottom />
      </div>
    );
  }
  
  export default AbautePage;
  