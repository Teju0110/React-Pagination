import { useState } from "react";
import "./App.css";
import { data } from "./Data";
import Pagination from "./Pagination";

function App() {
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const len = data.length;

  // const handleNext = () => {
  //   if (rowPerPage <= len - 10) {
  //     setPage(page + 10);
  //     setRowPerPage(rowPerPage + 10);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (page > 0) {
  //     setPage(page - 10);
  //     setRowPerPage(rowPerPage - 10);
  //   }
  // };

  return (
    <div className="App">
      <div className="container py-4"></div>
      <div className="row">
        {data.slice(page, rowPerPage).map((item) => (
          <div className="col-md-3 mb-3" key={item.id}>
            <div className="card">
              <div className="card-body">
                <h5>
                  #{item.id} {item.title}
                </h5>
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination len={len} rowPerPage={rowPerPage} page={page} setPage={setPage} setRowPerPage={setRowPerPage}/>

      {/* <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div> */}
    </div>
  );
}

export default App;
