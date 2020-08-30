import React, { useState, useEffect } from 'react';
import './App.css';
import DataTable from './DataTable';
import Title from './Title';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      },
        (err) => console.log(err));
  });


  if (data) {
    return (
      <div className="App">
        <Title text="Welcome to the Company Website" />
        <DataTable type="employee" data={data} />
      </div>
    );
  }
  return <p>Loading...</p>;

}

export default App;
