import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data);
  let number = 1;
  return (
    <div className="app">
      Triviaaa!!
      <Question text={Question.text} />
    </div>
  );
}
function Question(props) {
  console.log(props);
  return <div>{props.text}</div>;
}
export default App;
//----
