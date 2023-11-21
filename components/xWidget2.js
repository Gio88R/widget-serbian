import React, { useState } from "react";
import styled from "styled-components";

const realTestIds = [41887923, 37844091, 41763079];

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

function XWidget() {
  const [gameCounter, setGameCounter] = useState(0);
 
  const updateWidgets = () => {
    const xId = realTestIds[gameCounter % realTestIds.length];
    const xWidgetKey = `xWidget${gameCounter}-${theme}`;
    const xgWidgetKey = `xgWidget${gameCounter}-${theme}`;

    if (widgets[xWidgetKey]) widgets[xWidgetKey].update({ matchId: xId });
    if (widgets[xgWidgetKey]) widgets[xgWidgetKey].update({ matchId: xId });
  };

  const handleRandomizeGame = () => {
    const nextCounter = gameCounter + 1;
    setGameCounter(nextCounter);
    updateWidgets();
  };



  const initializeWidgets = () => {
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
        theme: dark,
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
        theme: theme,
      },
    });

    widgets[`xWidget${gameCounter}-${theme}`] = xWidget;
    widgets[`xgWidget${gameCounter}-${theme}`] = xgWidget;
  };

  initializeWidgets();

  return (
    <>
      <div id="selector3"></div>
      <div id="selector4">
        <Button onClick={handleRandomizeGame}>Randomize game</Button>
        <Button onClick={handleThemeChange}>Change Style</Button>
      </div>
    </>
  );
}

export default XWidget;

