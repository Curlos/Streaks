import React, { useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import './style.css';

const App = () => {


  return (
    <div className="App">
      <div>Streaks App</div>
      <Tasks />
    </div>
  );
}

export default App;
