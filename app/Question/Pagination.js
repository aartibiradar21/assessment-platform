import "./pagination.css"

const Pagination = () => {
    return (
        <>
        <div className="pagination">
            <img src="./previous.svg"></img>
            <a className="page-link" href="#">1</a>
            <a className="page-link" href="#">2</a>
            <a className="page-link" href="#">3</a>
            <a className="page-link" href="#">4</a>
            <a className="page-link" href="#">5</a>
            <a className="page-link" href="#">6</a>
            <a className="page-link" href="#">7</a>
            <a className="page-link" href="#">8</a>   
            <a className="mobile-page-link" href="#">1</a>
            <a className="mobile-page-link" href="#">..</a>
            <a className="mobile-page-link" href="#">5</a>
            <a className="mobile-page-link" href="#">..</a>
            <a className="mobile-page-link" href="#">8</a>
            <img src="next.png"></img>    
        </div>
        </>
    );
};

export default Pagination;