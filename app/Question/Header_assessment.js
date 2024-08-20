import "./Header_assessment.css";
import Timer from './Timer.js'
import Pagination from "./Pagination.js";


const Headerassessment = () => {
  return (
    <div className="header-container">
    <div className="header">
      <div className="img1">
        <img src="/Logo.png" alt="Logo" />
        <Timer/>
        <Pagination/>
      </div>
      </div>
      </div>
          
  );
};


export default  Headerassessment;
