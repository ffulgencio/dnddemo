import React from 'react'
import TableCell from '@mui/material/TableCell';

export default function Row({item}) {
  return (
    <React.Fragment>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.nombre}</TableCell>
        <TableCell>{item.descripcion}</TableCell>
        <TableCell>{item.precio}</TableCell>
    </React.Fragment>
  )
}
