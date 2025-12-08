
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

function Notes(){
    
    return (
        //<BasicTable rows={data}/>
        <GridMode/>
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
              <TableCell>{row.student.lastname}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.grade}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function GridMode(){
    /*  const rows = data.map((item, index) => ({
    id: item.student.id,
    firstname: item.student.firstname,
    lastname: item.student.lastname,
    course : item.course,
    grade : item.grade
  })); */
  const [newList, setNewList] = React.useState([]);
  React.useEffect(()=>{
          fetch("http://localhost:8010/api/grades")
          .then(data => data.json())
          .then( result =>{
            const newFormat = result.map(g => ({
                _id: g._id,
                studentId: g.student?._id || "",
                firstName: g.student?.firstName || "",
                lastName: g.student?.lastName || "",
                courseName: g.course?.name || "",
                grade: g.grade
            })); 
            setNewList(newFormat)})
          .catch(error => console.error('erreur dans le chargement des notes: ', error));
      }, []);
  const columns = [
    { field: "studentId", headerName: "Id étudiant", flex: 1 },
    { field: "firstName", headerName: "Prénom", flex: 1},
    { field: "lastName", headerName: "Nom", flex: 1},
    { field: "courseName", headerName: "Cours", flex: 1},
    { field: "grade", headerName: "Note", flex: 1 }
  ];
    return(
<ThemeProvider theme={theme}>
      <DataGrid
        rows={newList}
        getRowId={(row) => row._id}
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
export {Notes}