import "./pagination.css"

const Pagination = () => {
    return (
        <>
        <div className="pagination-container">
        <div className="pagination">
            <img src="./previous.svg" className="previous"></img>
            <a className="link-page" href="#">1</a>
            <a className="link-page" href="#">2</a>
            <a className="link-page" href="#">3</a>
            <a className="link-page" href="#">4</a>
            <a className="link-page" href="#">5</a>
            <a className="link-page" href="#">6</a>
            <a className="link-page" href="#">7</a>
            <a className="link-page" href="#">8</a>   
            <a className="mobile-page-link" href="#">1</a>
            <a className="mobile-page-link" href="#">..</a>
            <a className="mobile-page-link" href="#">5</a>
            <a className="mobile-page-link" href="#">..</a>
            <a className="mobile-page-link" href="#">8</a>
            <img src="next.png" className="next"></img>    
        </div>
        </div>
        </>
    );
};

export default Pagination;