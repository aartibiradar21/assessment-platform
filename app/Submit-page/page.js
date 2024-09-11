import './submit.css'

const Submit=()=>{
    return(
        <div className='submit-header-container'>
            <div className='image-container'>
            <img src="Logo.png"></img>
            </div>
            <div className='submitpage'>
                <div className='submit-container'>
                    <div className='correct-image'>
                        <img className='img' src="Group 32.svg"></img>
                    </div>
                    <div className='submit-box'>
                        <div className='submit-text'>Successfully Sumbitted</div>
                        <div className='thank-you'>Thank you for completing the test! </div>
                        <div className='last-text'>Review your results and keep practicing. <br></br>
                        Great job and keep up the hard work!</div>
                    </div>
                    <div className="check-score-container">
                        <a href="/Score-page">
                        <button className="score-button">Check Your Score</button>
                         </a>
                </div> 
                </div>

            </div>
        </div>
    )
}
export default Submit;