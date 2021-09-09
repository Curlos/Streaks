import React, { useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import './style.css';

const App = () => {


  return (
    <div className="App">
      <div>Streaks App</div>
      <Tasks />
      <i class="fas fa-cog"></i>
    </div>
  );
}

export default App;
