import React from 'react';
import './App.css';
import Home from './Home';
import DepartmentForm from './DepartmentForm';
import EmployeeForm from './EmployeeForm';
import DataTable from './DataTable';
import Navbar from './Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/employees">
            <DataTable view="employee" />
          </Route>
          <Route path="/departments">
            <DataTable view="department" />
          </Route>
          <Route path="/department/new">
            <DepartmentForm />
          </Route>
          <Route path="/employee/new">
            <EmployeeForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
