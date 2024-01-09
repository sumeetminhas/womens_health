import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
    return (
        <div className="container">
            <Link className="puzzle-board" to="/puzzle">Puzzle Game</Link>
        </div>
    )
}