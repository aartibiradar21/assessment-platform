import React from 'react';
import './timer.css'

const Timer = () => {
  return (
    <>
    {/* <div className='timer'> */}
      <div className="clock">
        <div className='circle1'>
          <div className='circle2'>
            <div className='time-count'>
            <div className='min-col'>52
            <div className='min-text'>min</div>
            </div>
            <div className='timer-dot'>:</div>
            <div className='sec-col'>30
            
            <div className='sec-text'>sec</div>
            </div>
            </div>
          </div>
          </div>
        <div className='text'>Remaining Time</div>
    </div>
    
     {/* </div> */}
    </>
  );
};

export default Timer;