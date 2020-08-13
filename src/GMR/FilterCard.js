import React from "react";

const FilterCard = ({ b1a, b1b, date, esu06, incomingsolarpanel, bg }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-12 mb-4">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Load Details</h2>
            <h6 className="card-text">
              B1A Substation Cunsumption:
              <span style={{ userSelect: "none" }}>
                <strong className="bg-dark shadow" style={{ color: "red" }}>
                  {b1a}
                </strong>
              </span>
            </h6>
            <h6 className="card-text">
              B1B Substation Cunsumption:
              <span style={{ userSelect: "none" }}>
                <strong className="bg-dark shadow" style={{ color: "yellow" }}>
                  {b1b}
                </strong>
              </span>
            </h6>
            <h6 className="card-text">
              ESU06 Substation Cunsumption:
              <span style={{ userSelect: "none" }}>
                <strong className="bg-dark shadow" style={{ color: "red" }}>
                  {esu06}
                </strong>
              </span>
            </h6>
            <h6 className="card-text">
              SolorPower Cunsumption:
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
