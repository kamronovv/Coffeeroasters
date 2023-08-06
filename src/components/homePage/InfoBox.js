import React from 'react';
import "./HomePage.scss";
import cofe1 from "./homeImage/kopi1.svg";
import cofe2 from "./homeImage/kopi2.svg";
import cofe3 from "./homeImage/kopi3.svg";
import cofe4 from "./homeImage/kopi4.svg";


function InfoBox() {
    return (
      <div className='infoBox'>
        <h1 className='BackText'>our collection</h1>
        {/* box-1 */}
        <div className='infoItems'>
          <div className='infoLists'>
            <img src={cofe1}/>
            <h1 className='infoText'>Gran Espresso</h1>
            <p className='infoPrf'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
          </div>
          {/* box-2 */}
          <div className='infoLists'>
            <img src={cofe2}/>
            <h1 className='infoText'>Gran Espresso</h1>
            <p className='infoPrf'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
          </div>
          {/* box-3 */}
          <div className='infoLists'>
            <img src={cofe3}/>
            <h1 className='infoText'>Gran Espresso</h1>
            <p className='infoPrf'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
          </div>
          {/* box-4 */}
          <div className='infoLists'>
            <img src={cofe4}/>
            <h1 className='infoText'>Gran Espresso</h1>
            <p className='infoPrf'>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default InfoBox;
  