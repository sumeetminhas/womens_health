import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
const location = useLocation()
console.log(location)


  return (
      <div className={`navbar ${location.pathname === "/" ? "homepage" : ""}`}>
          <h1>vagtastic learning</h1>
          <div className="links">
              <Link className="puzzle-board" to="/puzzle">puzzle</Link>
              <Link className="blog" to="/blog">blog</Link>
          </div>
      </div>
  )
}