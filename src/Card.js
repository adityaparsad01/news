import React from "react";

const Card = ({ answer, question, qno, logo }) => {
  return (
    <div key={qno} className="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-3">
      <div className="card shadow" style={{ width: "18rem" }}>
        <img src={logo} className="card-img-top" alt={logo} />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{question}</h5>
          <p className="card-text ">{answer}</p>
          <a href="/" className="btn btn-warning">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
