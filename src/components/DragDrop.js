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
    id: "cervix",
    src: cervix,
    position: {x: 0, y: 0}
  },
  {
    id: "ft_left",
    src: ft_left,
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
    id: "ovary_right",
    src: ovary_right,
    position: {x: 0, y: 0}
  },
  {
    id: "uterus",
    src: uterus,
    position: {x: 0, y: 0}
  },
  {
    id: "vagina",
    src: vagina,
    position: {x: 0, y: 0}
  },
].map((item, i) => ({
  ...item,
  position: {
    x: i % 2 === 0 ? 0 : 200,
    y: 200 * (i -(i % 2))
  }
}))

export const DragDrop = () => {

  const [isDropped, setIsDropped] = useState(false);
  const [draggableItems, setDraggableItems] = useState(initialPosition);


  function handleDragEnd(event) {
    console.log("event", event)
    const item = draggableItems.find((item) => item.id === event.active.id)
    const newState = {
      ...item,
      position: {x: item.position.x + event.delta.x, y: item.position.y + event.delta.y}
    }

    setDraggableItems([
      ...draggableItems.filter((item) => item.id !== event.active.id),
      newState
    ])

    // if (event.over && event.over.id === 'droppable') {
    //   setIsDropped(true);
    //   // const updateItems = draggableItems.filter(item => item.id !== event.active.id)
    //   // console.log("event.active.id", event.active.id)
    //   // setDraggableItems(updateItems);
    //   setDraggableItems(prevItems => prevItems.filter(item => item.id !== event.active.id))
    // }
  }
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
        <div className="dragDropRow">
          <div className="pieces">
            {draggableItems.map(item => (
              <Draggable key={item.id} id={item.id}  position={item.position}>
                <img src={item.src} alt={item.id} />
              </Draggable>
              )
            )}
          </div>
          <Droppable>
            {/* {isDropped ? draggableItems.content : (<div className="custom-box"></div>)} */}
            {isDropped ? null : <div className="custom-box"></div>}
          </Droppable>
        </div>
      </DndContext>
    )

} 

