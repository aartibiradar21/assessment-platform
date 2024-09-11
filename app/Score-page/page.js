import React from 'react';
import './score.css';

const Score = () => {
    return (
        <>
            <div className='header-image'>
                <div className='final-image'>
                    <img src='Logo.png' alt='Logo' />
                </div>
            </div>
            <div className='score-container'>
            <div className='main-container'>
            <div className='score-page-container'>
                <div className='your-score'>
                <div className='total-score'>35/40
                <div className='total-text'>Your Scored</div></div>
   
                    <div className='unattempt-count'>
                    <img className='grp' src='grp.svg'></img>
                    Unattempted :3
                    </div>

                    <div className='attempt-count'>
                    <img className='attempt' src='Check.svg'></img>
                    Correct:35
                    </div>
                    <div className='wrong-count'>
                    <img className='wrong' src='wrong.svg'></img>
                    Wrong : 2
                </div>
                </div> 
            </div>
            <div className='check-text'>Check Your Answers</div>
            <div className='straight-line'></div>
            <div className='question-check'>
            <div className='question-point'>
                <img className='correct-img' src='Check.svg'></img>
                <div className='question-text'>10</div>
                <div className='question-number-text'>Q1</div>
            </div>
            <div className='question-click'>
                <img src='click-image.png'></img></div>
            </div>
            <div className='question-container'>
                <div className='write-que'>
                    <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                </div>
            </div>
            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
                <img className='wrong-img' src='wrong.svg'></img>
                <div className='question-text'>00</div>
                <div className='question-number-text'>Q2</div>
            </div>

            <div className='question-click'>
                <img src='click-image.png'></img></div>
            </div>
            <div className='question-container'>
                <div className='write-que'>
                    <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                </div>
            </div>

            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
            <img className='correct-img' src='Check.svg'></img>
                <div className='question-text'>00</div>
                <div className='question-number-text'>Q3</div>
            </div>

            <div className='question-click'>
                <img src='Collapse Expand.png'></img></div>
            </div>

            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
            <img className='correct-img' src='Check.svg'></img>
                <div className='question-text'>10</div>
                <div className='question-number-text'>Q4</div>
            </div>
            <div className='question-click'>
                <img src='Collapse Expand.png'></img></div>
            </div>

            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
            <img className='correct-img' src='Check.svg'></img>
                <div className='question-text'>10</div>
                <div className='question-number-text'>Q5</div>
            </div>
            <div className='question-click'>
                <img src='Collapse Expand.png'></img></div>
            </div>

            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
            <img className='correct-img' src='Check.svg'></img>
                <div className='question-text'>10</div>
                <div className='question-number-text'>Q6</div>
            </div>
            <div className='question-click'>
                <img src='Collapse Expand.png'></img></div>
            </div>


            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
                <img className='umattempt-img' src='grp.svg'></img>
                <div className='question-text'>00</div>
                <div className='question-number-text'>Q7</div>
            </div>

            <div className='question-click'>
                <img src='click-image.png'></img></div>
            </div>
            <div className='question-container'>
                <div className='write-que'>
                    <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                </div>
            </div>

            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
                <img className='umattempt-img' src='grp.svg'></img>
                <div className='question-text'>00</div>
                <div className='question-number-text'>Q8</div>
            </div>
            <div className='question-click'>
                <img src='Collapse Expand.png'></img></div>
            </div>


            <div className='straight-line-1'></div>
            <div className='question-check'>
            <div className='question-point'>
                <img className='umattempt-img' src='grp.svg'></img>
                <div className='question-text'>00</div>
                <div className='question-number-text'>Q9</div>
            </div>

            <div className='question-click'>
                <img src='Collapse Expand.png'></img></div>
            </div>
            </div>
            </div>
            
        </>
    );
};

export default Score;


