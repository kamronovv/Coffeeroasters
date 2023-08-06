import React from 'react';
import "./Create.scss";
// images


function CreatePrepare() {
    return (
      <div className='prepareContainer prepareBgColor'>
        <div className='corridors'>
            <div className='stans'> </div>
            <div className='corridor'> </div>
            <div className='stans'> </div>
            <div className='corridor'> </div>
            <div className='stans'> </div>
        </div>
        <div className="prepareBoxs">
            <div className='preparebox'>
                <h1 className='prepareNbr '>01</h1>
                <p className='prepareText PrepareTextColor'>Pick your coffee</p>
                <p className='preparePrf'>Select from our evolving
                range of artisan coffees. Our beans are ethically 
                sourced and we pay fair prices for them. There are 
                new coffees in all profiles every month for you to try out.</p>
            </div>
            <div className='preparebox'>
                <h1 className='prepareNbr'>02</h1>
                <p className='prepareText PrepareTextColor'>Pick your coffee</p>
                <p className='preparePrf'>Select from our evolving
                range of artisan coffees. Our beans are ethically 
                sourced and we pay fair prices for them. There are 
                new coffees in all profiles every month for you to try out.</p>
            </div>
            <div className='preparebox'>
                <h1 className='prepareNbr'>03</h1>
                <p className='prepareText PrepareTextColor'>Pick your coffee</p>
                <p className='preparePrf'>Select from our evolving
                range of artisan coffees. Our beans are ethically 
                sourced and we pay fair prices for them. There are 
                new coffees in all profiles every month for you to try out.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default CreatePrepare;
  