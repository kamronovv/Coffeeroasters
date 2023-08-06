import React from 'react';
import "./HomePage.scss";
// images
import Shape from './homeImage/Shape.svg';
import gift from './homeImage/gift.svg';
import truck from './homeImage/truck.svg';

function InfoBox2() {
    return (
      <div className='infoBox2Container'>
        <div className='textBox'>
        <h1 className='box2text'>Why choose us?</h1>
        <p className='box2Prf'>A large part of our role is choosing which particular coffees will be featured <br/>
        in our range. This means working closely with the best coffee growers to give<br/> 
        you a more impactful experience on every level.</p>
        </div>
        <div className='offerBoxs'>
            <div className='offerBox'>  
                <img className='OfferImage' src={Shape} />
                <h1 className='offerTitle'>Best quality</h1>
                <p className='offerPrf'>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
            <div className='offerBox'>  
                <img className='OfferImage' src={gift} />
                <h1 className='offerTitle'>Best quality</h1>
                <p className='offerPrf'>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
            <div className='offerBox'>  
                <img className='OfferImage' src={truck} />
                <h1 className='offerTitle'>Best quality</h1>
                <p className='offerPrf'>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default InfoBox2;
  