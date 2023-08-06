import React from 'react'
import "./HomePage.scss"

function HomePage() {
    return (
      <div>
        <header className='Header'>
            <h1 className='headerTitle'> 
            Great coffee made simple.
            </h1>
            <p className='headerText'>
            Start your mornings with the world’s best coffees.
            Try our expertly curated artisan coffees from our
            best roasters delivered directly to your door, at
            your schedule.
            </p>
            <a className='bottom' href='#'>Create your plan</a>
        </header>
      </div>
    );
  }
  
  export default HomePage;
  