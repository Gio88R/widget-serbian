import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const realTestIds = [41763099, 41763099, 41763099];

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
  padding: 5px;
  z-index: 1;
  bottom: 125%;
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
function XWidget() {
  const [gameCounter, setGameCounter] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
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

    if (widgets[xWidgetKey]) widgets[xWidgetKey].update({ matchId: "41763099" });
    if (widgets[xgWidgetKey]) widgets[xgWidgetKey].update({ matchId: "41763099" });

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

 /*   const randomizeBtn = document.getElementById("b14");

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
    }*/;
  }, [gameCounter]);


  return (
    <>
    <div>
<span style={{display: 'flex', justifyContent: 'center', color: '#c2c2c2', fontFamily: 'sans-serif', backgroundColor: '#2c2c2c', paddingTop: '10px'}}> Očekivani bodovi(oB)</span></div>
    <IconWrapper>
      <FontAwesomeIcon 
        icon={faInfoCircle} 
        style={{color: 'white'}}
        onClick={() => setShowTooltip(!showTooltip)}
      />
      {showTooltip && <Tooltip show={showTooltip}>Očekivani bodovi se baziraju na statističkom performansu tima umesto stvarnog ishoda. Koristeći verovatnoću svake date šanse za gol, moguće je simulirati različite rezultate, ukazujući na to koliko često bi tim trebalo da pobedi, odigra nerešeno ili izgubi. Očekivana pozicija na tabeli pokazuje na kojoj poziciji se tim nalazi na tabeli na osnovu xP. Posmatranje xP i očekivane pozicije na tabeli je način detaljnijeg procenjivanja stvarnog performansa tima umesto samo posmatranja stvarnih rezultata.</Tooltip>}
    </IconWrapper>
    
    <div id="selector3" style={{backgroundColor: '#2c2c2c' }}>
    </div> 

    <div style={{ height: '1px' }}></div>
    <div>
<span style={{display: 'flex', justifyContent: 'center', color: '#c2c2c2', fontFamily: 'sans-serif', backgroundColor: '#2c2c2c', paddingTop: '10px'}}> Golovi statistika (xG)</span></div>
    <IconWrapper>
      <FontAwesomeIcon 
        icon={faInfoCircle} 
        style={{color: 'white'}}
        onClick={() => setShowTooltip2(!showTooltip2)}
      />
      {showTooltip2 && <Tooltip show={showTooltip2}>xG = Očekivani golovi. Broj golova koje se postići da će tim postići na osnovu svojih šansi.
     <br></br>xGC = Očekivani primljeni golovi. Broj golova koje se očekuje da će tim primiti na osnovu šansi koje dozvoljavaju ka svom golu.</Tooltip>}
    </IconWrapper>
    <div id="selector4" style={{backgroundColor: '#2c2c2c' }}>
    </div>

    </>
  );
}

export default XWidget;
