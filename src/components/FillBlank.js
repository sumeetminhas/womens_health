import React from "react";
import { Link } from "react-router-dom";
// import { ExternalSystem } from "./ExternalSystem.js"

export const FillInBlank = () => {
  return (
    <div>
    <Link className="external-sys" to="/external">external</Link>
    <Link className="internal-sys" to="/internal">internal</Link>
    </div>
  )
}