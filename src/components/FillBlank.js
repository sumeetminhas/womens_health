import React from "react";
import { Link } from "react-router-dom";
import "./FillBlank.css"
// import { ExternalSystem } from "./ExternalSystem.js"

export const FillInBlank = () => {
  return (
    <div className="fill-buttons">
    <Link className="external-sys" to="/external">external</Link>
    <Link className="internal-sys" to="/internal">internal</Link>
    </div>
  )
}