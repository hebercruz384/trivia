import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data);
  let [answerDisplayed, setAnswerDisplayed] = useState();
  let number = 0;
  return (
    <div className="app">
      Triviaaa!!
      <Question
        text={data[number].question.text}
        Choices={data[number].question.choices}
      />
      <NextQuestion />
      <DisplayAnswer />
    </div>
  );
}
function DisplayAnswer(props){
  return <button type="button">Correct Answer</button>;
  <div> </div>
}
function Question(props) {
  console.log(props);
  return (
    <div>
      {props.text}
      <Answer answers={props.Choices} />
    </div>
  );
}
function NextQuestion() {
  return <button type="button">Next Question</button>;
}
function Answer(props) {
  let answerParagraphs = props.answers.map(displayParagraphs);
  function displayParagraphs(element) {
    return <p>{element}</p>;
  }
  return <div>{answerParagraphs}</div>;
}
export default App;
//----
