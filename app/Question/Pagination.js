import "./pagination.css"

const Pagination = () => {
    return (
        <>
        <div className="pagination-container">
        <div className="pagination">
            <img src="./previous.svg" className="previous"></img>
            <a className="mobile-desktop" >1</a>
            <a className="mobile-only"   >...</a>
            <a className="desktop"       >2</a>
            <a className="desktop"        >3</a>
            <a className="desktop"        >4</a>
            <a className="mobile-desktop"  >5</a>
            <a className="mobile-only"    >...</a>
            <a className="desktop"        >6</a>
            <a className="desktop"        >7</a>
            <a className="mobile-desktop" >8</a>   
            <img src="next.png" className="next"></img>    
        </div>
        </div>
        </>
    );
};

export default Pagination;