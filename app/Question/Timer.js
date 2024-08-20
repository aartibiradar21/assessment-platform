import React from 'react';
import './Timer.css'
import './Content.css'; 
import Filter from './Filter.js'

const Timer = () => {
  return (
    <div className="timer">
      <div className="clock">
        <div className='circle1'>
          <div className='circle2'></div></div>
        <div className='text'>Remaining Time</div>
    </div>
    <Filter/>
      </div>
  );
};

export default Timer;