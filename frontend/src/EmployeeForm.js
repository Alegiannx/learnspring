import React from 'react';
import { Grid } from '@material-ui/core';
import Form from './Form.js';

export default function EmployeeForm() {
    return (
        <Grid item xs={11} md={8}>
            <Form type="employee" text="Add a new Employee:" />
        </Grid>
    );
}