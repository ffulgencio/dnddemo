import { TableRow } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function DraggableRow({ id, index, children }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <TableRow
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          style={{userSelect:'none', backgroundColor:snapshot.isDragging ? 'lightpink': 'white', ...provided.draggableProps.style}}
        >
          {children}
        </TableRow>
      )}
    </Draggable>
  );
}
