import React from 'react';
import "./AbautePage.scss"
// Imgs 
import canada from "./AbauteImage/Combined Shape.svg";
import kngDom from "./AbauteImage/Combined Shape (1).svg";
import australia from "./AbauteImage/Combined Shape (2).svg";





function Headquarters() {
  return (
    <div className='HeadquartersContainer'>
        <h1 className='HqsTitle'>Our headquarters</h1>

        <div className='HqsLists'>
            <div className='HqsItems'>
                <img className='grb' src={kngDom}/>
                <h1 className='CountName'>United Kingdom</h1>
                <ul>
                    <li>68  Asfordby Rd</li>
                    <li>Alcaston</li>
                    <li>SY6 1YA</li>
                    <li>+44 1241 918425</li>
                </ul>
            </div>
            <div className='HqsItems'>
                <img className='grb' src={canada}/>
                <h1 className='CountName'>Canada</h1>
                <ul>
                    <li>68  Asfordby Rd</li>
                    <li>Alcaston</li>
                    <li>SY6 1YA</li>
                    <li>+44 1241 918425</li>
                </ul>
            </div>
            <div className='HqsItems'>
                <img className='grb' src={australia}/>
                <h1 className='CountName'>Australia</h1>
                <ul>
                    <li>68  Asfordby Rd</li>
                    <li>Alcaston</li>
                    <li>SY6 1YA</li>
                    <li>+44 1241 918425</li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Headquarters;
