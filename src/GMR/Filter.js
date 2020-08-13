import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import bgimg from "./gmrl.png";

var date = new Date();

var cDate = date.toDateString();

const Filter = () => {
  const [question, setQuestion] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await fetch("https://waitominuteapi.tk/tnc");
    const data = await res.json();
    setQuestion(data.tnc);
  };

  useEffect(() => {
    getData("");
    setSearch();
  }, []);

  const filterMan = question.filter((question) => {
    return question.date.toLowerCase().includes(search);
  });

  const rev = filterMan.reverse([]);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          <img src={bgimg} width="200" height="90" alt="" loading="lazy" />
        </a>
        <a>{cDate}</a>
      </nav>
      <div className="container-fluid mt-6">
        <div className="row-cols-12 mt-3">
          <input
            className="form-control ds-input mb-4"
            type="text"
            placeholder="Format 6/20/2019 (DD/MM/YYYY)"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="row">
          {rev.map((data, i) => {
            return (
              <>
                <FilterCard
                  b1a={(data.b1a / 1000).toFixed(2)}
                  b1b={(data.b1b / 1000).toFixed(2)}
                  esu06={(data.esu06 / 1000).toFixed(2)}
                  incomingsolarpanel={data.incomingsolarpanel}
                  date={data.date}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
