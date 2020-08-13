import React from "react";

const ManCard = ({ name, location }) => {
  return (
    <div style={{ width: 200, border: "solid" }}>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ManCard;
