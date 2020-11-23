import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [remainingTime, setRemainingTime] = useState();

  const handelKeyDown = (event) => {
    let value = parseInt(event.target.value);
    console.log(value);
    if (event.keyCode === 13 && !isNaN(value)) {
      setRemainingTime(value);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (remainingTime) {
        let reduceTime = remainingTime - 1;
        setRemainingTime(reduceTime);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handelKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{remainingTime}</div>
    </div>
  );
};

export default App;
