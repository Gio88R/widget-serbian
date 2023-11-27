import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const realTestIds = [
    41887923, 37844091, 41763039
  ];

const widgets = {};
const Button = styled.button`
  background-color: #FFDE00;
  color: black;
  font-size: 20px;
  padding: 10px 15px;
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
const Tooltip = styled.div`
  position: absolute;
  background-color: #555;
  color: #c2c2c2;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  z-index: 1;
  padding: 5px;
  bottom: auto;
  right: 70%;
  width: 200px;
  opacity: 0;
  font-size: small;
  transition: opacity 0.3s;
  ${props => props.show && 'opacity: 1; visibility: visible;'}
`;
const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  float: right;
`;



function SpiderWidget () {
    const [gameCounter, setGameCounter] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
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
    <div>
    <span style={{display: 'flex', justifyContent: 'center', color: '#c2c2c2', fontFamily: 'sans-serif', backgroundColor: '#2c2c2c', paddingTop: '5px'}}> In-depth Team Statistics</span>
    <IconWrapper>
      <FontAwesomeIcon 
        icon={faInfoCircle} 
        style={{color: 'white'}}
        onClick={() => setShowTooltip(!showTooltip)}
      />
      {showTooltip && <Tooltip show={showTooltip}>The spider diagram illustrates six different parameters to assess each team's strengths. It is based on a scale of 0-1, where a complete team covers the entire diagram. If a team faces no chances against them, the figure is 1, located at the outermost edge of the diagram.</Tooltip>}
    </IconWrapper>
    <div id="selector2" style={{backgroundColor: '#2c2c2c' }}>

  
        <br></br>
        <br></br>
        </div>
         </div>
  );
}
export default SpiderWidget
