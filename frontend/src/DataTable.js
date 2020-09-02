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

export default function DataTable(props) {
    const data = props.data; //array of objects of type type
    const type = guessType(data); //either employee or department
    let keys = getTrimmedKeys(data, type);
    let causeUpdate = props.causeUpdate;

    function capitalize(string) { //capitalize the first letter of a string
        if (string) {
            if (typeof string !== "number") {
                return string.charAt(0).toUpperCase() + string.slice(1);
            } else {
                return string;
            }
        }
    }

    function HeaderCell(props) {//everything here is bolded with a box
        return (
            <TableCell>
                <Box fontWeight="fontWeightBold">
                    {capitalize(props.content)}
                </Box>
            </TableCell>
        );
    }

    function TableHeader(props) {
        let keys = props.keys;
        let type = props.type;
        if (type === "department") keys.unshift("id");

        return (
            <TableHead>
                <TableRow>
                    {/* the first cell is the type of each entry */}
                    <HeaderCell content={type} />
                    { //the rest are the keys of the properties
                        keys.map((key) =>
                            <HeaderCell content={key} />
                        )
                    }
                </TableRow>
            </TableHead>
        );
    }

    function selectPrimaryKey(type) { //returns the KEY of the primary property of each entry
        if (type === "department") {
            return "title";
        } else if (type === "employee") {
            return "lname";
        }
    }

    function DepartmentCell(props) { //helper fuction used in table body
        if (props.type === "employee") {
            return (
                <TableCell component="th" scope="row">
                    {capitalize(props.entry.department.title)}
                </TableCell >
            );
        } else {
            return null;
        }
    }

    function TableForms(props) {
        return (
            <Grid item xs={11} md={8}>
                <Form causeUpdate={causeUpdate} type="department" text="Add a new Department:" />
                <Form causeUpdate={causeUpdate} type="employee" text="Add a new Employee:" />
            </Grid>
        );
    }

    function TableMain(props) {
        let type = props.type;
        let keys = props.keys;
        const departmentIndex = keys.indexOf("department");
        if (departmentIndex !== -1) keys.splice(departmentIndex, 1); //cant add entire object to a cell!

        if (props.data.map) {
            return (
                <TableBody>
                    {
                        props.data.map((entry) => (
                            <TableRow key={entry[selectPrimaryKey(type)]}>
                                {/* every row starts with the entry's "primary key" */}
                                <TableCell component="th" scope="row">
                                    {capitalize(entry[selectPrimaryKey(type)])}
                                </TableCell >
                                { //map the rest of the properties
                                    keys.map((key) =>
                                        <TableCell align="right">{capitalize(entry[key])}</TableCell>
                                    )
                                }
                                { /*if employee, add department which needs special handling*/}
                                <DepartmentCell type={type} entry={entry} />
                            </TableRow >
                        ))
                    }
                </TableBody>
            );
        }
        return null;
    }

    function getTrimmedKeys(data, type) {
        let keys = [];
        if (data[0]) { //defensive
            keys = Object.keys(data[0]); //get the keys of the data object
            const idIndex = keys.indexOf("id");
            if (idIndex !== -1) keys.splice(idIndex, 1); //remove db id key
            const primaryIndex = keys.indexOf(selectPrimaryKey(type));
            if (primaryIndex !== -1) keys.splice(primaryIndex, 1); //remove title or name, those are handled with conditionals  
        }
        return keys;
    }

    function guessType(data) { //infer type from data
        if (data[0]) {
            let d = data[0];
            if (d.title) {
                return "department";
            } else if (d.lname) {
                return "employee";
            }
        }
        return null;
    }

    return (
        <div className="DataTable">
            {/* use grid to make responsive */}
            <Grid container direction="column" alignItems="center">
                <TableForms />
                <hr />
                <Grid item xs={10} md={6}>
                    <p>Our Data Table for {type + "s"}:</p>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            {/* split the table in 2 parts for readability */}
                            <TableHeader type={type} keys={keys} />
                            <TableMain type={type} data={data} keys={keys} />
                        </Table>
                    </TableContainer >
                </Grid>
            </Grid>
        </div>
    );
}
