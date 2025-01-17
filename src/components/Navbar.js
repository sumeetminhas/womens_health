import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
const location = useLocation()
console.log(location)
    const navigate = useNavigate()

  return (
      <div className={`navbar ${location.pathname === "/" ? "homepage" : ""}`}>
        <div>
            <h1 onClick={() => navigate("/")}>vagtastic learning</h1>
            {location.pathname === "/" && <h2> let's learn together </h2>}
        </div>

        {location.pathname === "/" && <div className="flower">
            <div className="ball">
                <div className="petal1 petal"></div>
                <div className="petal2 petal"></div>
                <div className="petal3 petal"></div>
                <div className="petal4 petal"></div>
                <div className="petal5 petal"></div>
                <div className="petal6 petal"></div>
            </div>
        </div>}

          <div className="links">
              <Link className="learn" to="/learn">learn</Link>
              <Link className="games" to="/games">games</Link>
              <Link className="blog" to="/blog">blog</Link>
          </div>
      </div>
  )
}