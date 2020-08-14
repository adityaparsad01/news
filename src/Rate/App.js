import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const REST_COUNTRIES_API = "https://restcountries.eu/rest/v2/all";

const App = () => {
  const [countrydata, setCountryData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(search);

  const data = async () => {
    await axios
      .get(REST_COUNTRIES_API)
      .then((res) => {
        setCountryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h1>Hello</h1>
      <input type="text" onChange={handleChange} />
      <div className="container-fluid">
        <div className="row">
          {countrydata.map((data, i) => {
            return (
              <>
                <CountryCard
                  name={data.name}
                  img={data.flag}
                  index={i}
                  border={data.borders.length}
                  list={data.borders}
                  population={(data.population / 1000000000).toFixed(2)}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
