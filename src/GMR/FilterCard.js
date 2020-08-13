import React from "react";

const FilterCard = ({ b1a, b1b, date, esu06, incomingsolarpanel }) => {
  return (
    <>
      <div style={{ userSelect: "none" }} className="col-lg-3 col-sm-12 mb-4">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Load Details</h2>
            <h6 className="card-text">
              B1A Substation Consumption:
              <span style={{ userSelect: "none" }}>
                <strong
                  className="bg-dark shadow rounded-pill p-1"
                  style={{ color: "red" }}
                >
                  {b1a}
                </strong>
              </span>
            </h6>
            <h6 className="card-text">
              B1B Substation Consumption:
              <span style={{ userSelect: "none" }}>
                <strong className="bg-dark shadow" style={{ color: "yellow" }}>
                  {b1b}
                </strong>
              </span>
            </h6>
            <h6 className="card-text">
              ESU06 Substation Consumption:
              <span style={{ userSelect: "none" }}>
                <strong className="bg-dark shadow" style={{ color: "red" }}>
                  {esu06}
                </strong>
              </span>
            </h6>
            <h6 className="card-text">
              SolorPower Consumption:
              <span style={{ userSelect: "none" }}>
                <strong className="bg-dark shadow" style={{ color: "green" }}>
                  {incomingsolarpanel}
                </strong>
              </span>
            </h6>
            <p className="card-text">
              <small className="text-muted">Last updated {date}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
