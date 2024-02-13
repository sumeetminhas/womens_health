
import React, { useState } from "react";
import "./DragDrop.css";
import { PuzzleWon } from "./PuzzleWon";
import ft_left from "./anatomy_pictures/fallopian_tube_left.png"
import ft_right from "./anatomy_pictures/fallopian_tube_right.png"
import cervix from "./anatomy_pictures/cervix.png"
import ovary_left from "./anatomy_pictures/ovary_left.png";
import ovary_right from "./anatomy_pictures/ovary_right.png";
import uterus from "./anatomy_pictures/uterus.png";
import vagina from "./anatomy_pictures/vagina.png";

function GridCell({onClick, children, correct}) {
  return <div className={`grid-cell${(correct && ' correct') || ''}`} onClick={onClick}>{children}</div>
}

const photos = [
  {
    id: 0,
    src: ft_left,
    correct: false
  },
  {
    id: 4,
    src: cervix,
    correct: false
  },
  {
    id: 2,
    src: ft_right,
    correct: false
  },
  {
    id: 3,
    src: ovary_left,
    correct: false
  },
  {
    id: 1,
    src: uterus,
    correct: false
  },
  {
    id: 5,
    src: ovary_right,
    correct: false
  },
  {
    id: 7,
    src: vagina,
    correct: false
  }
]

export const DragDrop = () => {
  const [ grid, setGrid ] = useState(Array(9).fill(null));
  const [ selectedImage, setSelectedImage ] = useState(null);
  const [ previouslySelected, setPreviouslySelected ] = useState([]);
  const [ win, setWin ] = useState(false);
  const [ wrongMove, setWrongMove ] = useState(false);

  const handleImageClick = () => {
    if (selectedImage || wrongMove) {
      return
    }
    const remainingPhotos = photos.filter(photo => !previouslySelected.includes(photo))

    if (remainingPhotos.length > 0) {
      const newSelectedImage = remainingPhotos[(Math.floor(Math.random() * remainingPhotos.length))]
      setSelectedImage(newSelectedImage)
      setPreviouslySelected(prevHistory => [...prevHistory, newSelectedImage])
    } else {
      setWin(true)
        console.log("all photos have been selected")
    }
  };

    const handleGridCellClick = (index) => {
    if (selectedImage !== null || wrongMove) {
      const newGrid = [...grid]

      if (selectedImage && selectedImage.id === index) {
        newGrid[index] = {...selectedImage, correct: true}
        setWrongMove(false)
        console.log("right spot")
      } else if (selectedImage) {
        setWrongMove(true)
        console.log('wrong spot')
      }
      if (selectedImage && selectedImage.id === index) {
        setGrid(newGrid)
        setSelectedImage(null)
      }
    }
  };


  return (
    <div className="grid">
      <h1>Puzzle</h1>
      {wrongMove && <div className="err-msg">wrong move. select a new square </div>}
      <div className="grid-image">
        {grid.map((item, index) => (
          <GridCell key={index} correct={item?.correct} onClick={() => handleGridCellClick(index)}>
            {item && <img src={item.src} alt={`Image ${index}`}/>}
          </GridCell>
        ))}
      </div>
      <div className="img-container">
        {selectedImage ? (
        <img src={selectedImage.src} alt="Selected" onClick={handleImageClick} />
        ) : (
          <button onClick={handleImageClick}>Select image</button>
        )}
      </div>
      {win && <PuzzleWon />}
    </div>
  )
}