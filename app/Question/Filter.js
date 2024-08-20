import React from 'react';
import './Filter.css'

const Filter=()=>{
    return(
        <div className='filter-box'>
          <div className='filter-text'>FILTERS</div>
            <div className='question-text'>Question Score
            </div>
            <div className='score'>
              <div className='score-box1'>All</div>
              <div className='score-box2'>10</div>
              <div className='score-box3'>15</div>
              <div className='score-box4'>20</div> 
              </div>
            <div className='Attempt'>Question Attempt</div>
            <div className='check-box'>
            <div className='all'>All(40) </div>
              <div className='attempted'>Attempt() </div>
              <div className='unattempted'>unattempted() </div>
              </div>
            </div>
    )

}
export default Filter;