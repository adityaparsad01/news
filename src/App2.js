import React, { useEffect, useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./identity.svg";

const App2 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://waitominuteapi.tk/faq");
    const data = await res.json();
    setData(data.faq);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {data.map((data, i) => {
            return (
              <>
                <Card
                  answer={data.answer}
                  question={data.question}
                  qno={data.qno}
                  logo={logo}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App2;
