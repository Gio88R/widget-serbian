import React, { useEffect, useState, useRef } from "react";
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
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;
function XWidget() {
  const [gameCounter, setGameCounter] = useState(0);
  const [theme, setTheme] = useState("light");
  const isUpdatingRef = useRef(false);

  const updateWidgets = () => {
    if (isUpdatingRef.current) {
      return;
    }

    isUpdatingRef.current = true;

    const xId = realTestIds[gameCounter % realTestIds.length];
    const xWidgetKey = `xWidget${gameCounter}-${theme}`;
    const xgWidgetKey = `xgWidget${gameCounter}-${theme}`;

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
        theme: theme,
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
  }, [gameCounter, theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div id="selector3"></div>
      <div id="selector4">
        
      </div>
      <ButtonGroup>
        <Button id="b14">Randomize game</Button>
        <Button onClick={changeTheme}>Change Style</Button>
        </ButtonGroup>
    </>
  );
}

export default XWidget;
