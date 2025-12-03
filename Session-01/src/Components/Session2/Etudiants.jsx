import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from "../../assets/data.json"

function Etudiants(){
    
    return (
        <BasicTable rows={data}/>
    )
}

function BasicTable({ rows }) {
let newList = [];
newList.push(rows[0]);
let exists;
rows.forEach((element) => {
    exists = false;
    for(let i = 0; i < newList.length; i++)
    {
    if(element.student.firstname === newList[i].student.firstname && element.student.lastname === newList[i].student.lastname){
        exists = true;
        break;
    }
    }
    if(!exists){
        newList.push(element);
    }
});

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newList.map((row, index) => (
            
            <TableRow key={index}>
              <TableCell>{row.student.firstname}</TableCell>
              <TableCell>{row.student.lastname}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {Etudiants}