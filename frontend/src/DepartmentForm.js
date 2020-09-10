import React from 'react';
import { Grid } from '@material-ui/core';
import Form from './Form.js';

export default function DepartmentForm() {
    return (
        <Grid item xs={11} md={8}>
            <Form type="department" text="Add a new Department:" />
        </Grid>
    );
}