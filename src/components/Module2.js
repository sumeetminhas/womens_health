import React, { useState } from "react";
import { ExternalSystem } from "./ExternalSystem.js"
import external from "./anatomy_pictures/external.png";
import "./Module2.css";
import { Link } from "react-router-dom";

const parts = [{
  style: {
    top: "28%",
    left: "15%"
  },
  openStyle: {
    top: "1.3%",
    left: "13%"
  },
  part: "labia majora",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "46%",
    left: "15%"
  },
  openStyle: {
    top: "46%",
    left: "15%"
  },
  part: "labia minora",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "68%",
    left: "10%"
  },
  openStyle: {
    top: "68%",
    left: "10%"
  },
  part: "bartholin's gland",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "85%",
    left: "72%"
  },
  openStyle: {
    top: "85%",
    left: "72%"
  },
  part: "anus",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "56%",
    left: "75%"
  },
  openStyle: {
    top: "56%",
    left: "75%"
  },
  part: "vaginal opening",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "43%",
    left: "75%"
  },
  openStyle: {
    top: "43%",
    left: "75%"
  },
  part: "urethra",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "30%",
    left: "72%"
  },
  openStyle: {
    top: "30%",
    left: "75%"
  },
  part: "clitoris",
  description: "some fact",
  open: false,
  hasBeenOpened: false
},{
  style: {
    top: "4%",
    left: "73%"
  },
  openStyle: {
    top: "4%",
    left: "73%"
  },
  part: "mons pubis",
  description: "some fact",
  open: false,
  hasBeenOpened: false
}]

export const Module2 = () => {
    const [ popups, setPopups ] = useState(parts)

    const handleClick = (i) => {
      setPopups(popups.map((popup, j) => {
        if (i === j ) {
          return {...popup, open: !popup.open, hasBeenOpened: true}
        }
        return popup
      }))
    }

    const allHaveBeenOpened = popups.every((popup) => popup.hasBeenOpened)

    return (
    <div className="mod2-container">
      <div>External Anatomy</div>
      <div className="ext-img-container">
        <img className="ext-img" src={external} alt="external"></img>
        {popups.map((part, i) => (
          <React.Fragment key={`popup${i}`}>
            <div 
              className="learn-more-container"
              style={part.style? part.style : {}}
              onClick={() => handleClick(i)}
              >{part.part}
            </div>
            {part.open && 
              <div className="popup" 
                style={part.openStyle}
                onClick={() => handleClick(i)}
                >
                  {part.description}
              </div>
            }
          </React.Fragment>
        ))}
      </div>
      { allHaveBeenOpened && <Link className="external-sys" to="/external">Test Your Knowledge!</Link> }
    </div>
  )
}

