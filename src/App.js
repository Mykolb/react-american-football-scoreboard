//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    // const [currentValue, setState] = useState(0);
  const [homeTeamScore, setHomeTeamScore] = useState(0) //setting initial state
  
  const [awayTeamScore, setAwayTeamScore] = useState(0)


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            {/* added JS in {} */}
            <div className="home__score">{homeTeamScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTeamScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      {/* {homeTeamScore === 20 || awayTeamScore === 20 ? "Lions crushed the Tigers" : "Tigers won"} */}
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {setHomeTeamScore(homeTeamScore + 7)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {setHomeTeamScore(homeTeamScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayTeamScore(awayTeamScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {setAwayTeamScore(awayTeamScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
