//import React, { useState } from 'react'
import Tasks from './components/Tasks'
import './style.css';

function App() {

  // const [tasks, setTasks] = useState([{
  //   title: '',
  //   icon: '',
  //   color: '',
  //   measurementDuration: '',
  //   taskDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   numberOfDaysPerWeek: 7,
  //   timesADay: 1,
  //   timesDoneToday: 0,
  //   currentStreak: 0,
  //   completed: false,
  // }])

  return (
    <div className="App">
      Streaks App
      <Tasks />
    </div>
  );
}

export default App;
