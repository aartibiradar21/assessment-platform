import "./header_assessment.css";
import Pagination from "./Pagination.js";


const Headerassessment = () => {
  return (
   
    <div className="header-container">
      <div className="logo-pagination">
        <div className="header">
          <img src="/Logo.png" className="img1"/>
      </div>
      <Pagination/>
      </div>
      <div className="submit-button-container">
                <a href="/Submit-page">
                    <button className="submit-button">Submit</button>
                </a>
            </div>  
      </div>
     
          
  );
};


export default  Headerassessment;





      

