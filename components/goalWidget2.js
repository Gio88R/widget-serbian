import React, { useEffect, useState } from "react";
import styled from "styled-components";

const realTestIds = [
  34151845, 34151851, 34151857, 34151861, 34151863, 31603211,
  34172161, 34286655, 34286659, 34277327, 34277329, 34169091
];

const widgets = {};

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  opacity: 0.9;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


function GoalWidget() {
  const [gameCounter, setGameCounter] = useState(5);


  useEffect(() => {
    const handleRandomizeClick = () => {
      const nextCounter = gameCounter + 1;
      setGameCounter(nextCounter);
      const id = realTestIds[nextCounter % realTestIds.length];
      if (widgets["game1"]) widgets["game1"].update({ matchId: id });
    };

    const randomizeBtn = document.getElementById("b14");
    randomizeBtn.addEventListener("click", handleRandomizeClick);


    return () => {
      randomizeBtn.removeEventListener("click", handleRandomizeClick);
    };
  }, [gameCounter]); 

  return (
    <div id="selector1">

      <Button id="b14">Randomize game</Button>
    </div>
  );
}

export default GoalWidget;
