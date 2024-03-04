import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import "./FillBlank.css"
// import { ExternalSystem } from "./ExternalSystem.js"
import { FillBlankCarousel } from "./FillBlankCarousel";

const data = [{
  image: "image",
  info: "some info about it"
}, {
  image: "another image",
  info: "more info"
}, {
  image: "another image",
  info: "even more info"
}
]

export const FillInBlank = () => {

  return (
    <div>
      <FillBlankCarousel data={data}/>
    </div>

  )
}

      {/* <div className="systems-container">
        
        <div className="ext-container">

          <div className="body-part-textbox">
            <div>some text</div>
            <button>next body part</button>
          </div>

        </div>

        <div className="int-container">
        </div>

      </div> */}


      {/* <div className="buttons">
        <Link className="external-sys" to="/external">external</Link>
        <Link className="internal-sys" to="/internal">internal</Link>
      </div> */}
    



