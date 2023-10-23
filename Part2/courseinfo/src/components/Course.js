import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((part) => {
        return <div key={part.id}>{part.name} {part.exercises}</div>;
      })}
      
        <div>
            <br></br>
            <span><strong>Total exercises: {course.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)}</strong></span>
        </div>
    </>
  );
};

export default Course;
