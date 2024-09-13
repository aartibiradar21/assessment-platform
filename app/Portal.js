import React from 'react';
import "./globals.css";

const Portal = () => {
  return (
    <div className="portal">
       <h1 className="portal-title">MCQ Test Portal</h1>
        <div className="portal-content">
        <div className="instructions-title">
          Instructions
        </div>
        <div className='info'>
           Please read the instructions carefully before you begin: 
          </div>
        <div className='info-list'>
          <ul>
            <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
            <li> Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li> 
            <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
            <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting. </li>
            <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out. </li>
            <li>Review:After submission,you may review your answers and scores.</li> 
          </ul>  
        </div>
        <div className='internet'>
         Please ensure a stable internet connection. If you encounter any issues, contact support immediately.
        </div>
        <div className='good'>
        Click 'Lets Start' to begin the test. 
        </div>
        <div className='luck'>
         Good luck! 
        </div>
        <div className='line'></div>
        
        <div className="start-button-container">
          <a href="/Question">
            <button className="start-button">Let's Start</button>
          </a>
        </div>
      </div> 
    </div>
  );
};

export default Portal;
