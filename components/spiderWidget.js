import React, { useEffect, useState } from "react";
import styled from "styled-components";
const realTestIds = [
    41887923, 37844091, 41763039
  ];

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
`


function SpiderWidget () {
    const [gameCounter, setGameCounter] = useState(0);
  /*  const [spiderClass, setSpiderClass] = useState("pm-spider-container");
    
    const changeSpiderStyle = () => {
      setSpiderClass((prevClass) => {
        if (prevClass === "pm-spider-container") {
          return "pm-spider-container2";
        } else {
          return "pm-spider-container";
        }
      });
    };*/

    useEffect(() => {
        const spiderWidget = PM("addSpiderWidget", {
            matchId: "41763099",
            selectorId: "selector2",
            settings: {
                displayMode: "entireSeason",
               tooltipOpen: false,
               theme: "light"
           },
       });
       widgets["game1"] = spiderWidget;
  /*     const randomizeBtn = document.getElementById("b14");

    randomizeBtn.addEventListener("click", () => {
      const nextCounter = gameCounter + 1;
      setGameCounter(nextCounter);
      const id = realTestIds[nextCounter % realTestIds.length];
      if (widgets["game1"]) widgets["game1"].update({ matchId: id });
    });

    // Komponentens avmontering, rensa upp
    return () => {
      randomizeBtn.removeEventListener("click", () => {
        const nextCounter = gameCounter + 1;
        setGameCounter(nextCounter);
        const id = realTestIds[nextCounter % realTestIds.length];
        if (widgets["game1"]) widgets["game1"].update({ matchId: id });
      });
    };*/
  }, [gameCounter]);
   return (
    <div id="selector2" style={{backgroundColor: '#2c2c2c' }}>
        <br></br>
        <br></br>

         </div>
  );
}
export default SpiderWidget
