import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  if(props.allClicks === 0){
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.allClicks}/>
      <StatisticLine text="average" value={props.average/props.allClicks}/>
      <StatisticLine text="positive" value={props.good/props.allClicks*100+' %'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value})=>{
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = ()=>{
    setAllClicks(allClicks +1)
    setGood(good +1)
    setAverage(average +1)
  }
  const handleNeutralClick = ()=>{
    setAllClicks(allClicks +1)
    setNeutral(neutral +1)
  }  
  const handleBadClick = ()=>{
    setAllClicks(allClicks +1)
    setBad(bad +1)
    setAverage(average -1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text = 'good'/>
      <Button handleClick={handleNeutralClick} text = 'neutral'/>
      <Button handleClick={handleBadClick} text = 'bad'/>

      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral}
      bad = {bad} allClicks = {allClicks}
      average = {average}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
