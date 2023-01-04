import React, { useState } from "react";

const Pagination = ({ len, rowPerPage, setPage, setRowPerPage, page}) => {
  const [noOfButtons, setNoOfButtons]= useState(Math.ceil(len / rowPerPage));
  const[counter,setCounter]=useState(1)

  const handleNext = () => {
    if (rowPerPage <= len - 10) {
      setPage(page + 10);
      setRowPerPage(rowPerPage + 10);
      setCounter(counter+1)
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 10);
      setRowPerPage(rowPerPage - 10);
      setCounter(counter-1)
    }
  };
  console.log(page,rowPerPage)

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="!#" onClick={handlePrevious}>
              Previous
            </a>
          </li>
          {new Array(noOfButtons).fill("").map((i, index) => (
            <li className={`page-item ${index+1 === counter ? "active" : null } `} key={index}>
              <a className="page-link" href="!#" onClick={()=>{
                setPage((index+1)*10-10)
                setRowPerPage((index+1)*10)
              }}>
                {index+1}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="!#" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
