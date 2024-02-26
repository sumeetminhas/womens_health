import React from "react";
import "./PlayAgain.css";

export const PlayAgainButton = ({resetPuzzle}) => {
  return (
    <button className="ReplayButton"
      onClick={resetPuzzle}>
        Restart
    </button>

  )
}