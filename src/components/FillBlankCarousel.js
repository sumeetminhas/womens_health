import React, { useState } from "react";
import "./FillBlankCarousel.css"

export const FillBlankCarousel = ({data}) => {
  const [ positions, setPositions ] = useState([0])

  const translateBox = (i) => {
    return `translateY(${i * 300}px)`
  }

  const addNewBox = () => {
    setPositions([...positions, positions.length])
  }

  return (
    <div className="carousel-container">
      <div className="button" onClick={addNewBox}>
        click
      </div>

      <div className="boxes-container">
        {positions.map((position, i) => (
        <div 
          className="box" 
          key={position}
          style={{
            transform: translateBox(i),
            transition: "all 2s"
          }}
          >
            {data[position] && (
              <>
                <p>{data[position].info}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

