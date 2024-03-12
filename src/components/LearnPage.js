import React, { useState } from "react";
import "./LearnPage.css";
import { Module1 } from "./Module1";
import { Module2 } from "./Module2";
import { Module3 } from "./Module3";
import { Module4 } from "./Module4";

const Modules = {
  1: <Module1 />,
  2: <Module2 />,
  3: <Module3 />,
  4: <Module4 />
}

export const Learn = () => {
  
  const [ readingMaterial, setReadingMaterial ] = useState()

  return (
    <div className="learn-container">

      <div className="mod-container">
        <div className="mod" onClick={() => setReadingMaterial(1)}>
          <p>mod 1</p>
        </div>
        <div className="mod" onClick={() => setReadingMaterial(2)}>
          <p>mod 2</p>
        </div>
        <div className="mod" onClick={() => setReadingMaterial(3)}>
          <p>mod 3</p>
        </div>
        <div className="mod" onClick={() => setReadingMaterial(4)}>
          <p>mod 4</p>
        </div>

      </div>

      {readingMaterial && <div className="material-container">
        <div className="material">
          {Modules[readingMaterial]}
        </div>
      </div>}

    </div>
  )
}