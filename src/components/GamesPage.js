import React from "react";
import { Link } from "react-router-dom";
import "./GamesPage.css"


export const Games = () => {
  return (
    <div className="games-container">

      <div className="game-tile">
        <Link className="fill-blank" to="/fillblank">label body parts</Link>
      </div>

      <div className="game-tile">
        <Link className="puzzle-board" to="/puzzle">puzzle</Link>
      </div>

      <div className="game-tile">
        <Link className="puzzle-board" to="/puzzle">puzzle</Link>
      </div>

      <div className="game-tile">
        <Link className="fill-blank" to="/fillblank">label body parts</Link>
      </div>
      
    </div>
  )
}