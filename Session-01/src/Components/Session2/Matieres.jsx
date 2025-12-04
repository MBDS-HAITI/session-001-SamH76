
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from "../../assets/data.json";
import { DataGrid } from '@mui/x-data-grid';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';

function Matieres(){
    return (
        //<BasicTable rows={data}/>
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
    if(element.course === newList[i].course && element.course === newList[i].course){
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
    
    let newList = Filter(rows);    
    return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Matières</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newList.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.course}</TableCell>
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
    id: index,
    course: item.course
  }));
  const columns = [
    { field: "id", headerName: "No", flex: 1 },
    { field: "course", headerName: "Intitulé cours", flex: 1 }
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

export {Matieres}