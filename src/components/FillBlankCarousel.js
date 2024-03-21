import React, { useState } from "react";
import "./FillBlankCarousel.css"


export const FillBlankCarousel = ({ data, handleResponse }) => {
  const [ positions, setPositions ] = useState([0])

  const translateBox = (i) => {
    return `translateY(${i * 30}px)`
  }

  // const style = {
  //   transform: ` translateX(${position * 325}px) `,
  //   transition: `all 2s`
  // }

  const addNewBox = () => {
    setPositions([...positions, positions.length])
    handleResponse();
  }

  return (
    <div className="fill-blank-carousel-container">
      {positions.map((position, i) => (
        <div className="boxes-container"
          key={position}
        >
        <div className="img-container">
          <img className="img" alt="" src={data[position]?.image}></img>
        </div>

        <div 
          className="box" 
          >
            {data[position] && (
              <>
                <p>{data[position].info}</p>
              </>
            )}
          </div>
        
      </div>
      ))}

      <div className="button" onClick={addNewBox}>
        next
      </div>
      {console.log("positions.length", positions.length)}
    </div>
  )
}

