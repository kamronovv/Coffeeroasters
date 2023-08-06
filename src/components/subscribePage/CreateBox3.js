import React from 'react';
import "./Create.scss"
import strelk from "./createImage/strlk.svg"


function HomePage() {
    return (
      <div className='CreateBox3Container'>
        <div className='Left'>
            <ul>
                <li><a><span className='Nbr'>01</span>Preferences</a></li>
                <li><a><span className='Nbr'>02</span>Bean Type</a></li>
                <li><a><span className='Nbr'>03</span>Quantity</a></li>
                <li><a><span className='Nbr'>04</span>Grind Option</a></li>
                <li><a><span className='Nbr'>05</span>Deliveries</a></li>
            </ul>
        </div>
        <div className='Right'>
                <h1 className='bgTitle'>How do you drink your coffee? <span className='strelk'><a href='#'><img src={strelk}/></a></span></h1>
            <div className='RightBoxs'>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threboxB threboxB'>
                    <h1 className='threboxTitleB'>Filter</h1>
                    <p className='threboxPrfB'>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Espresso</h1>
                    <p className='threboxPrf'>Dense and finely ground beans for an intense, flavorful experience</p>
                </div>
            </div>

            {/* rightbox-2 */}
            <h1 className='bgTitle'>What type of coffee? <span className='strelk'><a href='#'><img src={strelk}/></a></span></h1>
            <div className='RightBoxs'>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Single Origin</h1>
                    <p className='threboxPrf'>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                </div>
                <div className='threboxB'>
                    <h1 className='threboxTitleB'>Capsule</h1>
                    <p className='threboxPrfB'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
            </div>

            {/* Right box-3 */}
            <h1 className='bgTitle'>How do you drink your coffee? <span className='strelk'><a href='#'><img src={strelk}/></a></span></h1>
            <div className='RightBoxs'>
                <div className='threboxB'>
                    <h1 className='threboxTitleB'>Capsule</h1>
                    <p className='threboxPrfB'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
            </div>

            {/* Right box-4 */}
            <h1 className='bgTitle'>How do you drink your coffee? <span className='strelk'><a href='#'><img src={strelk}/></a></span></h1>
            <div className='RightBoxs'>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threboxB'>
                    <h1 className='threboxTitleB'>Capsule</h1>
                    <p className='threboxPrfB'>Compatible with Nespresso systems and similar brewers</p>
                </div>
            </div>

            {/* Right box-5 */}
            <h1 className='bgTitle'>How do you drink your coffee? <span className='strelk'><a href='#'><img src={strelk}/></a></span></h1>
            <div className='RightBoxs'>
                <div className='threboxB'>
                    <h1 className='threboxTitleB'>Capsule</h1>
                    <p className='threboxPrfB'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div className='threbox'>
                    <h1 className='threboxTitle'>Capsule</h1>
                    <p className='threboxPrf'>Compatible with Nespresso systems and similar brewers</p>
                </div>
            </div>
            {/* right box finshed */}
            
            <div className='SummaryContainer'>
          <h3 className='SummaryTitle'>Order Summary</h3>
          <p className='SummaryPrf'>“I drink my coffee as <span>Filter</span>, with a <span>Decaf</span>  type of bean. <span>250g</span> ground ala <span>Cafetiére</span>, sent to me <span>EveryWeek</span>.”</p>
         </div>
         <a className='bottom ButtonSumr' href='#'>Create your plan</a>
        </div>
      </div>
    );
  }
  
  export default HomePage;
  