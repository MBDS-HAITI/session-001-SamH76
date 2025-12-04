import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from "../../assets/data.json"
import { DataGrid } from '@mui/x-data-grid';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';

function Etudiants(){
    
    return (
        // <BasicTable rows={data}/>
        <GridMode/>
    )
}

function Filter(rows){
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
return newList;
}

function BasicTable({ rows }) {
let newList = Filter(data);
newList.push(rows[0]);
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

function GridMode(){
    let newList = Filter(data);
     const rows = newList.map((item, index) => ({
    id: item.student.id,
    firstname: item.student.firstname,
    lastname: item.student.lastname,
  }));
  const columns = [
    { field: "id", headerName: "Id", flex: 1 },
    { field: "firstname", headerName: "Prénom", flex: 1 },
    { field: "lastname", headerName: "Nom", flex: 1 }
  ];
    return(
    <ThemeProvider theme={theme}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
      />
      </ThemeProvider>
    
    )
}

export {Etudiants}