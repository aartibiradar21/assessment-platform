import './Score.css'

const Score=()=>{
    return(
        <div className='header-image'>
            <div className='final-image'>
                <img src='Logo.png'></img>
            </div>
            <div className='your-score'>
                <div className='total-score'>35/40
                <div className='total-text'>Your Scored</div></div>
               
                <div className='unattempt-count'>
                    <img className='grp' src='grp.svg'></img>
                </div>
                <div className='attempt-count'></div>
                <div className='wrong-ans'></div>
            </div>
        </div>
    )
}
export default Score;