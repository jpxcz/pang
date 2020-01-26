import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("fetchin!!")
    fetch('http://127.0.0.1:5000')
      .then((response) => {
        return response.json();
      }).then((response) => {
        setRows(response.query);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          rows.map((i, idx) => {
            return <p key={idx}>{i}</p>
          })
        }
      </header>
    </div>
  );
}

export default App;
