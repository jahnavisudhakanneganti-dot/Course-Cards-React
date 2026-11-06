
import React from "react";
import "./App.css";

function CourseCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Duration: {props.duration}</p>
      <p>Fee: ₹{props.fee}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Available Courses</h1>

      <CourseCard name="React JS" duration="3 Months" fee="5000" />
      <CourseCard name="Python" duration="2 Months" fee="3000" />
      <CourseCard name="Java" duration="4 Months" fee="6000" />
    </div>
  );
}

export default App;
