import React from 'react';
import './content.css'
import Timer from './Timer.js'
import Filter from './Filter.js'
import Data from "./Data.js"

const Content = () => {
  return (
    <div className='content'>
      <div className="content-container">
        <div className='timer-filter-data-container'>
          <div className='timer-filter'>
            <Timer />
            <Filter />
          </div>
          <Data />
        </div>


      </div>

    </div>
  )
}

export default Content;