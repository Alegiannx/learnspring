import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './Form.css';

function UnitForm(id, label) {
    return (
        <Grid item xs={2}>
            <TextField id={id} label={label} variant="outlined" />
        </Grid>
    );
}

function FormMain(props) {
    if (props.type === "department") {
        return (
            <Grid container justify="center">
                {UnitForm("title", "Title")}
                <Grid item xs={2}>
                    <Button variant="contained">Sumbit</Button>
                </Grid>
            </Grid>
        );
    } else if (props.type === "employee") {
        return (
            <Grid container justify="center">
                {UnitForm("fname", "First Name")}
                {UnitForm("lname", "Last Name")}
                {UnitForm("afm", "AFM")}
                {UnitForm("job", "Job")}
                {UnitForm("depId", "Department ID")}
                <Grid item xs={2}>
                    <Button variant="contained">Sumbit</Button>
                </Grid>
            </Grid>
        );
    }
}

export default function Form(props) {
    return (
        <div className="Form">
            <p>{props.text}</p>
            <form noValidate autoComplete="off">
                {FormMain(props)}
            </form >
        </div>
    );
}

