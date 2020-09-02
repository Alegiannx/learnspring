import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Work from '@material-ui/icons/Work';
import AccountBox from '@material-ui/icons/AccountBox';
import './Navbar.css'

export default function Navbar(props) {

    return (
        <div className="Navbar">
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton title="Menu" edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        <a title="CompanyApp" href="/">CompanyApp<sup>TM</sup></a>
                    </Typography>
                    {/* shoots anything below toward the right of the navbar */}
                    <div className="grow" />
                    <IconButton title="Departments" edge="end" onClick={() => props.setRequestType("department")} color="inherit" aria-label="menu">
                        <Work />
                    </IconButton>
                    <IconButton title="Employees" edge="end" onClick={() => props.setRequestType("employee")} color="inherit" aria-label="menu">
                        <AccountBox />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
