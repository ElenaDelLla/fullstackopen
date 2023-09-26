import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
};
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [moreVoted, setMoreVoted] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const voteAnecdote = ()=>{
    const copyPoints = [...points];
    if(copyPoints[selected]){
      copyPoints[selected]+=1;
    } else {
      copyPoints[selected]=1;
    }
    setPoints(copyPoints);
    let position = moreVoted;
    for (let index = 0; index < copyPoints.length; index++) {
      const value = copyPoints[index];
      if(value>copyPoints[moreVoted]){
        position=index;
      }
    }
    setMoreVoted(position);
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <Button onClick={voteAnecdote} text={'Vote'}></Button>
      <Button onClick={() => {setSelected(Math.floor(props.anecdotes.length * Math.random()))}} text={'Next Anecdote'}></Button>
      <p>Has {points[selected]} votes</p>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[moreVoted]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" anecdotes={anecdotes} />);
