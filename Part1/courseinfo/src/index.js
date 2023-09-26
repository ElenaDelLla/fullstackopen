import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ ex }) => {
    return (
      <p>
        {ex.name} {ex.exercises}
      </p>
    );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((element) => {
        return <Part ex={element}></Part>;
      })}
    </div>
  );
};

const Total = ({ parts }) => {
  let total = 0;
  for (let i = 0; i < parts.length; i++) {
    total += parts[i].exercises;
  }
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
