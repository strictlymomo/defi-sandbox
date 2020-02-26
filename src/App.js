import React from 'react';
import './App.css';
import Simplex from './components/Simplex';
import Lockup from './components/Lockup';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <Lockup />
      <Simplex />
      <Graph />
    </div>
  );
}

export default App;
