import React from 'react';
import "./HomePage.scss";
// images


function prepare() {
    return (
      <div className='prepareContainer'>
        <h1 className='prepareTitle'>How it works</h1>
        <div className='corridors'>
            <div className='stans'> </div>
            <div className='corridor'> </div>
            <div className='stans'> </div>
            <div className='corridor'> </div>
            <div className='stans'> </div>
        </div>
        <div className="prepareBoxs">
            <div className='preparebox'>
                <h1 className='prepareNbr'>01</h1>
                <p className='prepareText'>Pick your coffee</p>
                <p className='preparePrf'>Select from our evolving
                range of artisan coffees. Our beans are ethically 
                sourced and we pay fair prices for them. There are 
                new coffees in all profiles every month for you to try out.</p>
            </div>
            <div className='preparebox'>
                <h1 className='prepareNbr'>02</h1>
                <p className='prepareText'>Pick your coffee</p>
                <p className='preparePrf'>Select from our evolving
                range of artisan coffees. Our beans are ethically 
                sourced and we pay fair prices for them. There are 
                new coffees in all profiles every month for you to try out.</p>
            </div>
            <div className='preparebox'>
                <h1 className='prepareNbr'>03</h1>
                <p className='prepareText'>Pick your coffee</p>
                <p className='preparePrf'>Select from our evolving
                range of artisan coffees. Our beans are ethically 
                sourced and we pay fair prices for them. There are 
                new coffees in all profiles every month for you to try out.</p>
            </div>
        </div>
        <a className='bottom buttom2' href='#'>Create your plan</a>
      </div>
    );
  }
  
  export default prepare;
  