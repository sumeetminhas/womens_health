import React, { useState } from "react";
import external from "./anatomy_pictures/external.png";
import "./Module2.css";

const parts = [{
  style: {
    top: "28%",
    left: "15%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "labia majora",
  description: "some fact",
  open: false
},{
  style: {
    top: "46%",
    left: "15%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "labia minora",
  description: "some fact",
  open: false
},{
  style: {
    top: "68%",
    left: "10%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "bartholin's gland",
  description: "some fact",
  open: false
},{
  style: {
    top: "85%",
    left: "72%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "anus",
  description: "some fact",
  open: false
},{
  style: {
    top: "56%",
    left: "75%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "vaginal opening",
  description: "some fact",
  open: false
},{
  style: {
    top: "43%",
    left: "75%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "urethra",
  description: "some fact",
  open: false
},{
  style: {
    top: "30%",
    left: "75%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "clitoris",
  description: "some fact",
  open: false
},{
  style: {
    top: "4%",
    left: "73%"
  },
  openStyle: {
    top: "",
    left: ""
  },
  part: "mons pubis",
  description: "some fact",
  open: false
}]

export const Module2 = () => {
    const [ popups, setPopups ] = useState(parts)

    const handleClick = (i) => {
      setPopups(popups.map((popup, j) => {
        if (i === j ) {
          return {...popup, open: !popup.open}
        }
        return popup
      }))
    }

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
            {part.open && <div className="popup">{part.description}</div>}
          </React.Fragment>

        ))}
      </div>
    </div>
  )
}