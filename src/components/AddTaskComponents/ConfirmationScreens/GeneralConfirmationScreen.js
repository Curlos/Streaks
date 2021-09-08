import React, { useState } from 'react'
import ListElem from '../ListElem' 
import { GroupedTasks } from '../../StyledComponents/StyledPresetTask'
import { ConfirmTaskTitle, ConfirmTaskHeader, ConfirmTaskBody } from '../../StyledComponents/StyledConfirmTask'
import Task from '../../Task'
import { Link } from 'react-router-dom'

const ConfirmationScreen = ({ title, icon, selectedTaskType }) => {

  const [currentTask, setCurrentTask] = useState({
    title: title,
    icon: icon,
    color: 'automatic',
    measurementDuration: 'daily',
    daily: {
      taskDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      frequency: 1,

    },
    weekly: {
      startWeekOn: 'Sunday',
      frequency: 1,
    },
    monthly: {
      frequency: 1,
    },
    currentStreak: 0,
    completed: false,
  })

  const changeMeasurementDuration = (newMeasurementDuration) => {
    setCurrentTask({...currentTask, measurementDuration: newMeasurementDuration})
  }

  const changeFrequency = (numChange) => {

    switch (currentTask.measurementDuration) {
      case 'daily':
        const newDaily = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        setCurrentTask({...currentTask, daily: newDaily})
        break
      case 'weekly':
        const newWeekly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        setCurrentTask({...currentTask, daily: newWeekly})
        break
      case 'monthly':
        const newMonthly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        setCurrentTask({...currentTask, daily: newMonthly})
        break
      default:
        break
    }
  }

  const changeTaskDays = (newTaskDays) => {
    const newDaily = {...currentTask.daily, taskDays: newTaskDays}
    setCurrentTask({...currentTask, daily: newDaily})
  }

  const changeStartWeekOn = (newStartDay) => {
    const newWeekly = {...currentTask.weekly, startWeekOn: newStartDay}
    setCurrentTask({...currentTask, weekly: newWeekly})
  }

  const changeColor = (newColor) => {
    setCurrentTask({...currentTask, color: newColor})
  }

  const getTaskDuration = () => {
    const taskDuration = {
      daily: 'day',
      weekly: 'week',
      monthly: 'month'
    }

    return taskDuration
  }

  const getTaskFrequency = () => {
    return currentTask[currentTask.measurementDuration].frequency
  }

  const getLinkURL = (selectedTaskType) => {
    const LinkTypes = {
      'customTask': '/',
      'healthTask': '/health-task',
      'eatTask': '/eat-task',
      'timedTask': '/timed-task',
      'negativeTask': '/negative-task'
    }

    return LinkTypes[selectedTaskType]
  }

  console.log(getLinkURL())


  return (
    <div>
      <ConfirmTaskHeader>
        <Link to={getLinkURL(selectedTaskType)}>
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ConfirmTaskTitle>Confirm Task</ConfirmTaskTitle>
        <Task name={title} icon={icon} theme="mediumForm"/>
      </ConfirmTaskHeader>

      <ConfirmTaskBody>
        <div>Title:</div>
        <GroupedTasks>
          <Link to="/confirm/measurement-duration">
            <ListElem name="Daily Task" icon={<i value="customTask" className="fas fa-calendar-day fa-2x"></i>} displayType="Daily Task" changeMeasurementDuration={changeMeasurementDuration} currentTask={currentTask}/>
          </Link>

          {currentTask.measurementDuration === 'daily' ? 
          (<Link to="/confirm/task-days">
            <ListElem name="Task Days" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} changeTaskDays={changeTaskDays} currentTask={currentTask}/>
          </Link>) : null
          }

          <ListElem name={`${getTaskFrequency()}/${getTaskDuration()}`} icon={<i value="customTask" className="far fa-circle fa-2x"></i>} buttonType="plusMinusForm" changeFrequency={changeFrequency} currentTask={currentTask}/>

          {currentTask.measurementDuration === 'weekly' ? 
          (<Link to="/confirm/start-week-on">
            <ListElem name="Start Week On" icon={<i value="customTask" className="fas fa-calendar fa-2x"></i>} changeStartWeekOn={changeStartWeekOn} currentTask={currentTask} />
          </Link>) : null
          }
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Color" icon={<i value="customTask" className="fas fa-palette fa-2x"></i>} changeColor={changeColor} currentTask={currentTask} />
        </GroupedTasks>
      </ConfirmTaskBody>
    </div>
  )
}

export default ConfirmationScreen;