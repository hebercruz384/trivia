import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data);
  let number = 0;
  return (
    <div className="app">
      Triviaaa!!
      <Question text={data[number].question.text} />
      <NextQuestion />
    </div>
  );
}
function Question(props) {
  console.log(props);
  return <div>{props.text}</div>;
}
function NextQuestion() {
  return <button type="button">Next Question</button>;
}
export default App;
//----
