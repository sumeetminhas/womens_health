
import React, { useState } from "react";
import "./DragDrop.css";
import { PuzzleWon } from "./PuzzleWon";
import { PlayAgainButton } from "./PlayAgain";
import ft_left from "./anatomy_pictures/fallopian_tube_left.png"
import ft_right from "./anatomy_pictures/fallopian_tube_right.png"
import cervix from "./anatomy_pictures/cervix.png"
import ovary_left from "./anatomy_pictures/ovary_left.png";
import ovary_right from "./anatomy_pictures/ovary_right.png";
import uterus from "./anatomy_pictures/uterus.png";
import vagina from "./anatomy_pictures/vagina.png";

function GridCell({onClick, children, correct, hoverOnCorrect}) {
  return <div className={`grid-cell${(correct && ' correct') || ''}`} onClick={onClick}>
    <div className="t"></div>
    <div className="b"></div>
    <div className="r"></div>
      {children}
      {correct && (
        <div>
          {hoverOnCorrect}
        </div>
      )}
    </div>
}

const photos = [
  {
    id: 0,
    src: ft_left,
    correct: false,
    tip: "some fact about left ft",
    fact: "quick overview of left ft"
  },
  {
    id: 4,
    src: cervix,
    correct: false,
    tip: "some fact about cervix",
    fact: "quick overview of cervix"
  },
  {
    id: 2,
    src: ft_right,
    correct: false,
    tip: "some fact about right ft",
    fact: "quick overview of right ft"

  },
  {
    id: 3,
    src: ovary_left,
    correct: false,
    tip: "some fact about left ovary",
    fact: "quick overview of left ovary"
  },
  {
    id: 1,
    src: uterus,
    correct: false,
    tip: "some fact about uterus",
    fact: "quick overview of uterus"
  },
  {
    id: 5,
    src: ovary_right,
    correct: false,
    tip: "some fact about right ovary",
    fact: "quick overview of right ovary"
  },
  {
    id: 7,
    src: vagina,
    correct: false,
    tip: "some fact about vagina",
    fact: "quick overview of vagina"
  }
]

export const DragDrop = () => {
  const [ grid, setGrid ] = useState(Array(9).fill(null));
  const [ selectedImage, setSelectedImage ] = useState(null);
  const [ previouslySelected, setPreviouslySelected ] = useState([]);
  const [ win, setWin ] = useState(false);
  const [ wrongMove, setWrongMove ] = useState(false);
  const [ wrongIndex, setWrongIndex ] = useState(false);
  const [gameOver, setGameOver ] = useState(false);

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
      setGameOver(true)
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
        setWrongIndex(index)
        console.log('wrong spot')
      }
      if (selectedImage && selectedImage.id === index) {
        setGrid(newGrid)
        setSelectedImage(null)
      }
    }
  };

  const resetPuzzle = () => {
    setWin(false)
    setGameOver(false)
    setGrid((Array(9).fill(null)))
    setPreviouslySelected([])
  }

    return (
    <div className="grid">

      <h1 className="puzzle-name">Build Your Own Vulva</h1>

      <div className={`grid-image ${win? "grid-image--won" : ""}`}>
        {win && <PuzzleWon />  }
        {grid.map((item, index) => (
          <GridCell 
            key={index} 
            correct={item?.correct} 
            onClick={() => handleGridCellClick(index)}
            hoverOnCorrect={item && item.correct && selectedImage && <div className="hover-on-correct">{item.fact}</div>}
            >
            {item && item.correct  ? (
            <img src={item.src} alt={`Image ${index}`}/>
            ) : (
              wrongMove && wrongIndex === index && selectedImage && <div className="err-msg">{selectedImage.tip}</div>
            )}
          </GridCell>
        ))}
      </div>

      <div className="img-container">
        {selectedImage ? (
        <img src={selectedImage.src} alt="Selected" onClick={handleImageClick} />
        ) : (
          <button className="select-btn" onClick={handleImageClick}>New Piece</button>
        )}

        <PlayAgainButton onClick={gameOver ? resetPuzzle : handleGridCellClick} resetPuzzle={resetPuzzle} />
      </div>

    </div>
  )
}