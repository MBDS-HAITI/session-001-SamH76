
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from "../../assets/data.json"
function Notes(){
    
    return (
        <BasicTable rows={data}/>
    )
}


function BasicTable({ rows }) {
    return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id Etudiant</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Cours</TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            
            <TableRow key={index}>
              <TableCell>{row.student.id}</TableCell>
              <TableCell>{row.student.firstname}</TableCell>
              <TableCell>{row.student.firstname}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.grade}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {Notes}