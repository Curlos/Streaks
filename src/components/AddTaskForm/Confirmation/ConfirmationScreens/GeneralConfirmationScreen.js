import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListElemWithIcon from '../../ListElem/ListElemWithIcon'
import ConfirmationTask from './HelperComponents/ConfirmationTask'
import { Link } from 'react-router-dom'

const ConfirmTaskTitle = styled.div`
  text-align: center;
  font-size: 25px;
`

const ConfirmTaskHeader = styled.div`
  background-color: black;
  padding: 15px;
`

const ConfirmTaskBody = styled.div`
  background-color: black;
`

const GroupedTasks = styled.div`
  margin-bottom: 25px;
`

const SaveTaskButton = styled.div`
  text-align: center;
  background-color: ${props => props.color};
  border-radius: 10px;
  padding: 15px;
`

const ConfirmationScreen = ({ selectedTaskType, currentTask, handleTaskChange, chosenColor, handleSave }) => {


  console.log(currentTask)

  const changeMeasurementDuration = (newMeasurementDuration) => {
    handleTaskChange({...currentTask, measurementDuration: newMeasurementDuration})
  }

  const changeFrequency = (numChange) => {

    switch (currentTask.measurementDuration.type) {
      case 'daily':
        const newDaily = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newDaily})
        break
      case 'weekly':
        const newWeekly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newWeekly})
        break
      case 'monthly':
        const newMonthly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newMonthly})
        break
      default:
        break
    }
  }

  const changeTaskDays = (newTaskDays) => {
    const newDaily = {...currentTask.daily, taskDays: newTaskDays}
    handleTaskChange({...currentTask, daily: newDaily})
  }

  const changeStartWeekOn = (newStartDay) => {
    const newWeekly = {...currentTask.weekly, startWeekOn: newStartDay}
    handleTaskChange({...currentTask, weekly: newWeekly})
  }

  const changeColor = (newColor) => {
    handleTaskChange({...currentTask, color: newColor})
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
    return currentTask[currentTask.measurementDuration.type].frequency
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

  const measurementTitle = `${currentTask.measurementDuration.type[0].toUpperCase() + currentTask.measurementDuration.type.slice(1,).toLowerCase()} Task`
  const measurementIconName = currentTask.measurementDuration.iconName


  return (
    <div>
      <ConfirmTaskHeader>
        <Link to={getLinkURL(selectedTaskType)}>
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ConfirmTaskTitle>Confirm Task</ConfirmTaskTitle>
        <ConfirmationTask taskObject={currentTask} iconClassName={currentTask.icon} chosenColor={chosenColor}/>
      </ConfirmTaskHeader>

      <ConfirmTaskBody>
        <div>Title:</div>
        <GroupedTasks>
          <Link to="/confirm/measurement-duration">
            <ListElemWithIcon title={measurementTitle} iconClassName={`fas fa-${measurementIconName}`} changeMeasurementDuration={changeMeasurementDuration} currentTask={currentTask} chosenColor={chosenColor}/>
          </Link>

          {currentTask.measurementDuration.type === 'daily' ? 
          (<Link to="/confirm/task-days">
            <ListElemWithIcon title={"Task Days"} iconClassName={"fas fa-calendar"} changeTaskDays={changeTaskDays} currentTask={currentTask} chosenColor={chosenColor}/>
          </Link>) : null
          }

          <ListElemWithIcon title={`${getTaskFrequency()}/${getTaskDuration()}`} iconClassName={"far fa-circle"} changeFrequency={changeFrequency} currentTask={currentTask} chosenColor={chosenColor}/>

          {currentTask.measurementDuration.type === 'weekly' ?
          (<Link to="/confirm/start-week-on">

            <ListElemWithIcon title={"Start Week On"} iconClassName={"fas fa-calendar"} changeStartWeekOn={changeStartWeekOn} currentTask={currentTask} chosenColor={chosenColor}/>

          </Link>) : null
          }
        </GroupedTasks>

        <GroupedTasks>
          <Link to="/confirm/color">
            <ListElemWithIcon title={"Color"} iconClassName={"fas fa-palette"} changeColor={changeColor} currentTask={currentTask} chosenColor={chosenColor} description="color"/>
          </Link>
        </GroupedTasks>

        <GroupedTasks>
          <Link to="/">
            <SaveTaskButton color={chosenColor} onClick={handleSave}>Save Task</SaveTaskButton>
          </Link>
        </GroupedTasks>
      </ConfirmTaskBody>
    </div>
  )
}

export default ConfirmationScreen;