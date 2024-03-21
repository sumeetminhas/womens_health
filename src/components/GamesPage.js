import React from "react";
import { Link } from "react-router-dom";
import "./GamesPage.css"


export const Games = () => {
  return (
    <div className="games-container">

      <div className="game-tile">
        <Link className="fill-blank" to="/internal">label internal body parts</Link>
      </div>

      <div className="game-tile">
        <Link className="puzzle-board" to="/puzzle">vulva puzzle</Link>
      </div>

      <div className="game-tile">
        <Link className="puzzle-board" to="/puzzle1">level 1 puzzle</Link>
      </div>

      <div className="game-tile">
        <Link className="fill-blank" to="/external">label external body parts</Link>
      </div>
      
    </div>
  )
}