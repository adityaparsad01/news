import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import bgimg from "./gmrl.png";
const Filter = () => {
  const [question, setQuestion] = useState([]);

  const rev = question.reverse([]);
  console.log(rev);

  const getData = async () => {
    const res = await fetch("https://waitominuteapi.tk/tnc");
    const data = await res.json();
    setQuestion(data.tnc);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={bgimg} width="200" height="90" alt="" loading="lazy" />
        </a>
      </nav>
      <div className="container-fluid mt-6">
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
                  bg={bgimg}
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
