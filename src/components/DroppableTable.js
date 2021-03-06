import React from "react";
import { Droppable } from "react-beautiful-dnd";


export default function DroppableTable({ droppableId, children }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div style={{backgroundColor:snapshot.isDraggingOver ? 'lightblue':'lightgray'}} {...provided.droppableProps} ref={provided.innerRef}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

