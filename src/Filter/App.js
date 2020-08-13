import React, { useEffect, useState } from "react";
import ManCard from "./ManCard";

const vals = {
  man: [
    { name: "Aditya", location: "delhi" },
    { name: "Ajit", location: "Mumbai" },
    { name: "Arun", location: "USA" },
    { name: "Sachin", location: "Banguluru" },
  ],
};

console.log(vals);

const App = () => {
  const [search, setSearch] = useState("");
  const [val, setVal] = useState([]);
  console.log(val);
  console.log(search);

  useEffect(() => {
    setVal(vals.man);
    setSearch();
  }, []);

  const filterMan = val.filter((man) => {
    return man.name.includes(search);
  });

  return (
    <div>
      <h1>Filter World</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {filterMan.map((data, i) => {
        return (
          <>
            <ManCard name={data.name} location={data.location} />
          </>
        );
      })}
    </div>
  );
};

export default App;
