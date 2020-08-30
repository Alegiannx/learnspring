import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Box } from '@material-ui/core';
import './DataTable.css';
import Form from './Form.js';

function capitalize(string) { //capitalize the first letter of a string
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

function TableHeader(type, keys) {
    return ( //everything here is bolded with a box
        <TableHead>
            <TableRow>
                {/* the first cell is the type of each entry */}
                <TableCell>
                    <Box fontWeight="fontWeightBold">
                        {capitalize(type)}
                    </Box>
                </TableCell>
                { //the rest are the keys of the properties
                    keys.map((key) =>
                        <TableCell align="right">
                            <Box fontWeight="fontWeightBold">
                                {capitalize(key)}
                            </Box>
                        </TableCell>
                    )
                }
                {DepartmentCell(type, null, true)}
            </TableRow>
        </TableHead>
    );
}

function selectPrimary(type) { //returns the KEY of the primary property of each entry
    if (type === "department") {
        return "title";
    } else if (type === "employee") {
        return "lname";
    }
}

function DepartmentCell(type, entry, header) { //helper fuction used in table
    if (header) {
        return (
            <TableCell>
                <Box fontWeight="fontWeightBold">
                    {capitalize("department")}
                </Box>
            </TableCell>
        );
    }
    if (type === "employee") {
        return (
            <TableCell component="th" scope="row">
                {capitalize(entry.department.title)}
            </TableCell >);
    }


}

function TableMain(type, data, keys) {
    return (
        <TableBody>
            {
                data.map(function (entry) {
                    return (
                        <TableRow key={entry[selectPrimary(type)]}>
                            {/* every row starts with the entry's "primary key" */}
                            <TableCell component="th" scope="row">
                                {capitalize(entry[selectPrimary(type)])}
                            </TableCell >
                            { //map the rest of the properties
                                keys.map((key) =>
                                    <TableCell align="right">{capitalize(entry[key])}</TableCell>
                                )
                            }
                            { //if employee, add department object which needs special treatment
                                DepartmentCell(type, entry)
                            }
                        </TableRow >
                    );
                }
                )
            }
        </TableBody>
    );
}

export default function DataTable(props) {
    const type = props.type; //either employee or department
    const data = props.data; //array of objects of type type
    const keys = Object.keys(props.data[0]); //get the keys of the data object
    const idIndex = keys.indexOf("id");
    if (idIndex != -1) keys.splice(idIndex, 1); //remove db id key
    const primaryIndex = keys.indexOf(selectPrimary(type));
    if (primaryIndex != -1) keys.splice(primaryIndex, 1); //remove title or name, those are handled with conditionals
    const departmentIndex = keys.indexOf("department");
    if (departmentIndex != -1) keys.splice(departmentIndex, 1); //same here

    return (
        <div className="DataTable">
            {/* use grid to make responsive */}
            <Grid container direction="column" alignItems="center">
                <Grid item xs={11} md={8}>
                    <Form type="department" text="Add a new Department:" />
                    <Form type="employee" text="Add a new Employee:" />
                </Grid>
                <Grid item xs={10} md={6}>
                    <Box>
                        <p>Our Data Table:</p>
                    </Box>
                    <Box>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                {/* split the table in 2 parts for readability */}
                                {TableHeader(type, keys)}
                                {TableMain(type, data, keys)}
                            </Table>
                        </TableContainer >
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
