import React from 'react';
import './filter.css'

const Filter=()=>{
    return(
      <>
        <div className='filter-box'>
          <div className='filter-text'>FILTERS</div>
            <div className='question-text'>Question-Score
            </div>
            <div className='score'>
              <div className='score-box1'>All</div>
              <div className='score-box2'>10</div>
              <div className='score-box3'>15</div>
              <div className='score-box4'>20</div> 
              </div>
            <div className='Attempt'>Question Attempt</div>
            <div className='check-box'>
              <div className='check-option'>
            <div className='all'>All(40) </div>
            <div className='attempted'>Attempt(3) </div> 
            </div>
            <div className='unattempted'>Unattempted() </div> 
              </div>
            </div>
            <div className='mobile-filter'>
              <img src='Filter.png' className='filter-img'></img>
              {/* <div> */}
              {/* <div className='border-1'></div>
              <div className='border-2'></div>
              <div className='border-3'></div>
              </div> */}

            </div>
            </>
    )

}
export default Filter;