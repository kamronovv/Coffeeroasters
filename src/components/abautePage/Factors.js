import React from 'react';
import "./AbautePage.scss"
import facturyImg from "./AbauteImage/box-3img.jpg"




function Factors() {
  return (
    <div className='FactorsContainer'>
        <div className='factorsText'>
            <h1 className='factursTitle'>Uncompromising quality</h1>
            <p className='factursPrf'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
        <img className='factursImg' src={facturyImg} />
    </div>
  );
}

export default Factors;
