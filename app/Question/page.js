import  Headerassessment from "./Header_assessment.js"
import Content from './Content.js'
// import Data from "./Data.js"
// import './data.css'

const Routing = () => {
    return (
      <div className="page-content">
          < Headerassessment/> 
         {/* <div className="assignment-container"> */}
          <Content/>
         {/* <Data/> */}
         {/* </div>  */}
      
      </div>
    );
  };
  
  export default Routing;
  