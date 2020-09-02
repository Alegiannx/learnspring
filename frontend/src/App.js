import React, { useState, useEffect } from 'react';
import './App.css';
import DataTable from './DataTable';
import Title from './Title';
import Navbar from './Navbar';

export default function App() {

  const [data, setData] = useState([]);
  const [requestType, setRequestType] = useState("employee");
  const [dirty, setDirty] = useState(false);

  async function updateData(t) {
    await fetch("/api/" + t + "s")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setDirty(false);
      },
        (err) => console.log(err));
  }

  useEffect(() => {
    updateData(requestType);
  }, [requestType, dirty]);

  if (data) {
    return (
      <div className="App">
        <Navbar setRequestType={setRequestType} />
        <Title text="Welcome to the Company Website" />
        <DataTable causeUpdate={() => { setDirty(true); }} data={data} />
      </div>
    );
  }
  return <p>Loading...</p>;

}
