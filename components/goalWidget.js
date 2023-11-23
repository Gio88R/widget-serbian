import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const realTestIds = [
  34151845, 34151851, 34151857, 34151861, 34151863, 31603211,
  34172161, 34286655, 34286659, 34277327, 34277329, 34169091
];

const Button = styled.button`
  background-color: #FFDE00;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  opacity: 0.9;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  @media (max-width: 720px) {
    padding: 10px 5px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2c2c2c;
`;

function GoalWidget() {
  const [gameCounter, setGameCounter] = useState(10);
  const goalWidgetRef = useRef(null);

  function randomizeGame() {
    setGameCounter((prevGameCounter) => {
      const nextGameCounter = prevGameCounter + 1;
      const id = realTestIds[nextGameCounter % realTestIds.length];

      console.log(nextGameCounter);
      return nextGameCounter;
    });
  };


  useEffect(() => {
    const initWidget = () => {
    const goalWidget = window.PM("addGoalWidget", {
      selectorId: "selector1",
      matchId: realTestIds[gameCounter % realTestIds.length],
      settings: [
        "xG",
        "xGC",
        "averageScored",
        "averageConceded",
        "averageScoredHomeAndAway",
        "topScorersXG",
      ],
    });
    
    goalWidgetRef.current = goalWidget;



  };
  if (window.PM) {
    initWidget();
  } else {
    document.addEventListener("playmakerWidgetReady", initWidget);
  }

  return () => {
    if (goalWidgetRef.current && goalWidgetRef.current.remove) {
      goalWidgetRef.current.remove();
    }
    document.removeEventListener("playmakerWidgetReady", initWidget);
  };
}, [gameCounter]); 
  return (
    <div>
    <div id="selector1">
 
    </div>
         <ButtonGroup>
         <Button onClick={randomizeGame}>Рандомизе гаме</Button>
         </ButtonGroup>
         </div>
  );
}

export default GoalWidget;

