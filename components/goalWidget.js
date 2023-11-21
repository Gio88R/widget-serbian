import React, { useEffect, useState, useRef } from "react";
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
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

function GoalWidget() {
  const [gameCounter, setGameCounter] = useState(5);
  const [containerClass, setContainerClass] = useState("pm-container");
  const goalWidgetRef = useRef(null);

  const changeStyleTo2 = () => {
    setContainerClass((prevStyle) => {
      if (prevStyle.backgroundColor === "#f6f0f9") {
        return { backgroundColor: "#aa7ed3" };
      } else if (prevStyle.backgroundColor === "#aa7ed3") {
        return { backgroundColor: "#D3D3D3" };
      } else {
        return { backgroundColor: "#f6f0f9" };
      }
    });
  };

  const removeWidget = () => {
    if (goalWidgetRef.current && goalWidgetRef.current.remove) {
      console.log("Removing widget...");
      goalWidgetRef.current.remove();
      console.log("Widget removed!");
    }
  };

  useEffect(() => {
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

    const randomizeBtn = document.getElementById("b14");
    const removeBtn = document.getElementById("removeButton");

    randomizeBtn.addEventListener("click", () => {
      const nextCounter = gameCounter + 1;
      setGameCounter(nextCounter);
      const id = realTestIds[nextCounter % realTestIds.length];
      if (goalWidgetRef.current) goalWidgetRef.current.update({ matchId: id });
    });

    removeBtn.addEventListener("click", removeWidget);

 
    return () => {
      randomizeBtn.removeEventListener("click", () => {
        const nextCounter = gameCounter + 1;
        setGameCounter(nextCounter);
        const id = realTestIds[nextCounter % realTestIds.length];
        if (goalWidgetRef.current) goalWidgetRef.current.update({ matchId: id });
      });
      removeBtn.removeEventListener("click", removeWidget);
    };
  }, [gameCounter, containerClass]);

  return (
    <div id="selector1">
      <div className={containerClass}>{}</div>
      <ButtonGroup>
      <Button id="b14">Randomize game</Button>
       
        <Button id="removeButton">Remove before you:</Button>
        <Button onClick={changeStyleTo2}>Change Style</Button>
      </ButtonGroup>
    </div>
  );
}

export default GoalWidget;

