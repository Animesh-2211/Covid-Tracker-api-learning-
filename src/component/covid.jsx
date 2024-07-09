import React, { useState, useEffect } from "react";
import "./covid.css";
const Covid = () => {
  const [data, setData] = useState({}); // Initialize data as an object
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actual = await res.json();
      console.log(actual.statewise[0]);
      setData(actual.statewise[0]);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []); // Empty array means it runs once on mount

  return (
    <>
      <section>
        <h1>CoronaVirus Tracker</h1>
        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card-inner"></div>
              <p className="card_name">
                <span>Our</span> Country
              </p>
              <p className="class_data">{data.recovered}</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
