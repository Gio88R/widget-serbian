import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const realTestIds = [41887923, 37844091, 41763079];

const widgets = {};

const Button = styled.button`
  background-color: #FFDE00;
  color: black;
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
  background-color: #2c2c2c;
`;
function XWidget() {
  const [gameCounter, setGameCounter] = useState(0);
  /*const [theme, setTheme] = useState("light");*/
  const isUpdatingRef = useRef(false);

  const updateWidgets = () => {
    if (isUpdatingRef.current) {
      return;
    }

    isUpdatingRef.current = true;

    const xId = realTestIds[gameCounter % realTestIds.length];
    const xWidgetKey = `xWidget${gameCounter}`;
    const xgWidgetKey = `xgWidget${gameCounter}`;

    if (widgets[xWidgetKey]) widgets[xWidgetKey].update({ matchId: xId });
    if (widgets[xgWidgetKey]) widgets[xgWidgetKey].update({ matchId: xId });

    isUpdatingRef.current = false;
  };

  useEffect(() => {
    const xWidget = PM("addXWidget", {
      matchId: realTestIds[gameCounter % realTestIds.length],
      selectorId: "selector3",
      settings: {
        displayMode: "entireSeason",
        metrics: [
          "xp",
          "points",
          "xpPointsDiff",
          "expectedTablePosition",
          "tablePosition",
        ],
        theme: "light",
      },
    });

    const xgWidget = PM("addXWidget", {
      matchId: realTestIds[gameCounter % realTestIds.length],
      selectorId: "selector4",
      settings: {
        displayMode: "entireSeason",
        metrics: [
          "xG",
          "xGC",
          "averageScored",
          "averageConceded",
          "averageScoredBetween",
          "averageScoredHomeAndAway",
        ],
        theme: "light",
      },
    });

    widgets[`xWidget${gameCounter}`] = xWidget;
    widgets[`xgWidget${gameCounter}`] = xgWidget;

    updateWidgets();

    const randomizeBtn = document.getElementById("b14");

    randomizeBtn.addEventListener("click", () => {
      const nextCounter = gameCounter + 1;
      setGameCounter(nextCounter);
      updateWidgets();
    });

    // Cleanup function
    return () => {
      randomizeBtn.removeEventListener("click", () => {
        const nextCounter = gameCounter + 1;
        setGameCounter(nextCounter);
        updateWidgets();
      });
    };
  }, [gameCounter]);


  return (
    <>
      <div id="selector3"style={{backgroundColor: '#2c2c2c' }}></div> 
      <div style={{ height: '4px' }}></div>
      <div id="selector4"style={{backgroundColor: '#2c2c2c' }}>
        
      </div>
      <ButtonGroup>
        <Button id="b14">Рандомизе гаме</Button>

        </ButtonGroup>
    </>
  );
}

export default XWidget;
