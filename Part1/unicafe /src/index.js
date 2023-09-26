import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom'

const StatisticsLine = ( {text, value}) => {
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr> 
    </>
  );
};

const Button = ({ onClick, text}) => {
return(
  <button onClick={onClick}>{text}</button>
  )
};

const Statistics = ({good,neutral,bad}) =>{
  
  if(!good && !neutral && !bad){ 
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }else{
  return (
<>
  <table>
    <tbody>
    <tr><th><h2>Statistics</h2></th></tr>
    
      <StatisticsLine text={'Good'} value={good}></StatisticsLine>
      <StatisticsLine text={'Neutral'} value={neutral}></StatisticsLine>
      <StatisticsLine text={'Bad'} value={bad}></StatisticsLine>
      
      <StatisticsLine text={'All'} value={good+neutral+bad}></StatisticsLine>
      <StatisticsLine text={'Average'} value={(good-bad)/(good+neutral+bad)}></StatisticsLine>
      <StatisticsLine text={'Positive'} value={good/(good+neutral+bad)+'%'}></StatisticsLine>
    </tbody>
  </table>
</>
  )
  };
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => {setGood(good+1)}} text={'Good'}></Button>
      <Button onClick={() =>{setNeutral(neutral+1)}} text={'Neutral'}></Button>
      <Button onClick={() =>{setBad(bad+1)}} text={'Bad'}></Button>
     
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

/*ReactDOM.render(<App />, 
  document.getElementById('root')
)*/

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);