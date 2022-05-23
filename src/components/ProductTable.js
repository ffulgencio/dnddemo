import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductTable({children}) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Nombre</TableCell>
        <TableCell>Descripcion</TableCell>
        <TableCell>Precio</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
        {children}
    </TableBody>
    </Table>
    </TableContainer>
  )
}
