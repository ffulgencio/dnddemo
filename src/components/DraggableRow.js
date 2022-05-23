import { TableRow } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function DraggableRow({ id, index, children }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <TableRow
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          {children}
        </TableRow>
      )}
    </Draggable>
  );
}
