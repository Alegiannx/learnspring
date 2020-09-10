import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './Form.css';


export default function Form(props) {
    let type = props.type;

    function UnitForm(props) {
        return (
            <Grid item xs={2}>
                <TextField name={props.id} id={props.id} label={props.label} variant="outlined" />
            </Grid>
        );
    }

    async function createBody(type) {
        let $ = (selector) => document.querySelector(selector);

        let body = {};
        if (type === "employee") {
            body.fname = $("#fname").value;
            body.lname = $("#lname").value;
            body.afm = $("#afm").value;
            body.job = $("#job").value;
            let depId = $("#depId").value;
            if (depId) {
                await fetch("/api/department/" + depId)
                    .then((res) => res.json())
                    .then((res) => {
                        body.department = res;
                    },
                        (err) => console.log(err));
            }
        } else if (type === "department") {
            body.title = $("#title").value;
        }
        return body;
    }

    function clearForm(type) {
        let $ = (selector) => document.querySelector(selector);
        if (type === "employee") {
            $("#fname").value = "";
            $("#fname-label").classList.remove("MuiInputLabel-shrink");
            $("#lname").value = "";
            $("#lname-label").classList.remove("MuiInputLabel-shrink");
            $("#afm").value = "";
            $("#afm-label").classList.remove("MuiInputLabel-shrink");
            $("#job").value = "";
            $("#job-label").classList.remove("MuiInputLabel-shrink");
            $("#depId").value = "";
            $("#depId-label").classList.remove("MuiInputLabel-shrink");
        } else if (type === "department") {
            $("#title").value = "";
            $("#title-label").classList.remove("MuiInputLabel-shrink");
        }
    }

    function success() {
        document.querySelector("#success").textContent = "Entry Added!";
    }

    async function handleSubmit(type) {
        let body = await createBody(type);
        clearForm(type);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/" + type, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
        xhr.onloadend = success(); //inform user addition is done
    }

    function FormButton(props) {
        return (
            <Grid item xs={2}>
                <Button onClick={() => { handleSubmit(props.type); }} variant="contained">{props.content}</Button>
            </Grid>
        );
    }

    function FormMain(props) {
        if (props.type === "department") {
            return (
                <>
                    <UnitForm id="title" label="Title" />
                </>
            );
        } else if (props.type === "employee") {
            return (
                <>
                    <UnitForm id="fname" label="First Name" />
                    <UnitForm id="lname" label="Last Name" />
                    <UnitForm id="afm" label="AFM" />
                    <UnitForm id="job" label="Job" />
                    <UnitForm id="depId" label="Department ID" />
                </>
            );
        }
    }

    return (
        <div className="Form">
            <form id={type} noValidate autoComplete="off">
                <p>{props.text}</p>
                <Grid container>
                    <FormMain type={type} />
                    <FormButton type={type} content={"SAVE"} />
                </Grid>
                <p id="success"></p>
            </form >
        </div>
    );
}

