import { React, useState} from "react";
import "./DragDrop.css";
import { Draggable } from "./Draggable";
import {DndContext} from '@dnd-kit/core';
import {Droppable} from './Droppable';
import cervix from "./anatomy_pictures/cervix.png";
import ft_left from "./anatomy_pictures/fallopian_tube_left.png";


import ft_right from "./anatomy_pictures/fallopian_tube_right.png";
import ovary_left from "./anatomy_pictures/ovary_left.png";
import ovary_right from "./anatomy_pictures/ovary_right.png";
import uterus from "./anatomy_pictures/uterus.png";
import vagina from "./anatomy_pictures/vagina.png";

const initialPosition = [
  {
    id: "ft_left",
    src: ft_left,
    position: {x: 0, y: 0}
  },
  {
    id: "cervix",
    src: cervix,
    position: {x: 0, y: 0}
  },
  {
    id: "ft_right",
    src: ft_right,
    position: {x: 0, y: 0}
  },
  {
    id: "ovary_left",
    src: ovary_left,
    position: {x: 0, y: 0}
  },
  {
    id: "uterus",
    src: uterus,
    position: {x: 0, y: 0}
  },
  {
    id: "ovary_right",
    src: ovary_right,
    position: {x: 0, y: 0}
  },
  {},
  {
    id: "vagina",
    src: vagina,
    position: {x: 0, y: 0}
  },
  {},
].map((item, i) => ({
  ...item,
  position: {
    x: i % 2 === 0 ? 0 : 200,
    y: 100 * Math.floor(i / 2)
  }
}))

export const DragDrop = () => {
  
  //represents whether an item is dropped
  const [isDropped, setIsDropped] = useState(false);

  //keeps track of the draggable items with their positions
  const [draggableItems, setDraggableItems] = useState(initialPosition);

  //tracks whether each grid position had a correct item placed
  const [correctPlacements, setCorrectPlacements] = useState(Array(9).fill(false))

  //triggered when a drag operation ends
  function handleDragEnd(event) {
    console.log("over?", event.over)
    let itemIndex
    //finds the item being dragged
    const item = draggableItems.find((item, i) => {
      if (item.id === event.active.id) {
        itemIndex = i
        return true
      }
      return false
    });
    //calculates its new position based on the drag movement
    const newPosition = {
      x: item.position.x + event.delta.x,
      y: item.position.y + event.delta.y,
    };

    // Check if the dropped position is correct by calculating grid index
    // where item is dropped (droppedIndex) and checks if the item 
    //matches the expected item in the grid from initialPosition
    const droppedIndex = Math.floor(newPosition.y / 100) * 3 + Math.floor(newPosition.x / 200);
    const isCorrect = item.id === initialPosition[droppedIndex]?.id;

    //if correct, it updates the correctPlacements state to mark 
    //that grid position as correct
    if (isCorrect) {
      const updatedPlacements = [...correctPlacements];
      updatedPlacements[droppedIndex] = true;
      setCorrectPlacements(updatedPlacements);
    }

    const newState = {
      ...item,
      position: newPosition,
    };

    setDraggableItems(state => {
      return state.toSpliced(itemIndex, 1, newState)
    })

  }

  //array that represents the 3x3 grid structure
  const gridLayout = Array.from({ length: 3 }, (_, row) =>
    // Array.from({ length: 3 }, (_, col) => row * 3 + col)
    Array.from(Array(3).keys())
  );
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="dragDropRow">
        <div className="pieces">
          {draggableItems.map((item) => (
            <Draggable key={item.id} id={item.id} position={item.position}>
              <img src={item.src} alt={item.id} />
            </Draggable>
          ))}
        </div>

        <div className="grid-container">
          {gridLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((colIndex) => (
                <Droppable key={colIndex} id={draggableItems[(rowIndex * 3) + colIndex]?.id}>
                  {correctPlacements[rowIndex * 3 + colIndex] ? (
                    <div className="correct-box">{draggableItems[(rowIndex * 3) + colIndex]?.id}</div>) : (<div className="custom-box">{draggableItems[(rowIndex * 3) + colIndex]?.id}</div> )}
                </Droppable>
              ))}
            </div>
          ))}
        </div>
      </div>
    </DndContext>
  );
};
