import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css'

export const Homepage = () => {
    return (
        <div className="container">
            <h1>vagtastic learning</h1>
            <div className="games-container">
                <Link className="puzzle-board" to="/puzzle">puzzle</Link>
                <Link className="word-search" to="/wordSearch">word search</Link>
            </div>
        </div>
    )
}

