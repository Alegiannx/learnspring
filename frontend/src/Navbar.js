import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Work from '@material-ui/icons/Work';
import AccountBox from '@material-ui/icons/AccountBox';
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="Navbar">
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton title="Menu" edge="start" color="inherit" aria-label="menu">
                        <Link to="/"><MenuIcon /></Link>
                    </IconButton>
                    <Typography variant="h6">
                        <a title="CompanyApp" href="/">CompanyApp<sup>TM</sup></a>
                    </Typography>
                    {/* shoots anything below toward the right of the navbar */}
                    <div className="grow" />
                    <IconButton title="Departments" edge="end" color="inherit" aria-label="menu">
                        <Link to="/departments"><Work /></Link>
                    </IconButton>
                    <IconButton title="Employees" edge="end" color="inherit" aria-label="menu">
                        <Link to="/employees"><AccountBox /></Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
