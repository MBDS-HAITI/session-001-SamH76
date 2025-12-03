import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from "../../assets/data.json"

  const student = {
    firstname : "Samantha",
    lastname : "Henry",
    tel : "+50947308348",
    email : "henrysamanta.pro@gmail.com"
};

function APropos(){
    
    return (
        <Infos/>
    )
}


function Infos() {
  
    return (
        <div>
            Ce projet est réalisé par {student.firstname} {student.lastname} | {student.tel} | {student.email}
        </div>
  );
}

export {APropos}