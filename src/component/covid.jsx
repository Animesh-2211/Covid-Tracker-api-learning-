import React from "react";
import { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/covid19");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []); //[] = it gets rendered first time only

  return (
    <div>
      <>
        <h1>CoronaVirus Tracker</h1>
      </>
    </div>
  );
};

export default Covid;
