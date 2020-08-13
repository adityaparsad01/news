import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import bgimg from "./gmrl.png";

var data = [
  { date: "02/10/2018", name: "date is 10" },
  { date: "02/14/2018", name: "date is 14" },
  { date: "02/16/2018", name: "date is 16" },
  { date: "02/20/2018", name: "date is 20" },
  { date: "02/24/2018", name: "date is 24" },
  { date: "02/26/2018", name: "date is 26" },
  { date: "02/30/2018", name: "date is 30" },
  { date: "03/01/2018", name: "date is 01" },
  { date: "03/05/2018", name: "date is 05" },
  { date: "02/23/2018", name: "date is name 23" },
];

var today = new Date();
var todayTime = new Date().getTime();
var days_after_20 = new Date().setDate(today.getDate() + 20);
var days_before_5 = new Date().setDate(today.getDate() - 5);

var result = data.filter(function (item) {
  var itemTime = new Date(item.date).getTime();
  return itemTime >= days_before_5 && itemTime <= days_after_20;
});

console.log(result);

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
