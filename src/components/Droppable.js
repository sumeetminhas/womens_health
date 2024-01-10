import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div className="droppable-container" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

