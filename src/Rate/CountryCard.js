import React from "react";

const CountryCard = ({ name, img, border, population, list }) => {
  return (
    <div className=" col-lg-3 col-md-4 col-sm-6 col-xl-3 col-sm-auto">
      <div style={{ width: "18rem" }} className="card text-center my-2">
        <img
          className="card-img-top img-fluid"
          //   style={{ height: "20px", width: "25px", border: "2px" }}
          src={img}
          alt={img}
        />
        <div className=" card-body">
          <div className="row ">
            <div className="col-10">
              <h6 className="text-capitalize align-content-end">
                Country Name: <small>{name}</small>
              </h6>
            </div>

            <div className="col-2">
              <h2 style={{ fontSize: "1rem" }}> {border}</h2>
            </div>
          </div>
          <div>
            {list.map((data, i) => {
              return <li key={i}>{data}</li>;
            })}
          </div>
        </div>
        <div className="card-footer text-muted">Population: {population}</div>
      </div>
    </div>
  );
};

export default CountryCard;
