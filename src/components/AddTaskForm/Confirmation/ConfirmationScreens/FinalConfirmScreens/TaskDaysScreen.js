import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
import TaskDayOptionDays from '../HelperComponents/TaskDayOptionDays'
import TaskDayOptionNum from '../HelperComponents/TaskDayOptionNum'
import styled from 'styled-components'

const ListTitle = styled.span`
  font-size: 25px;
`

const ListHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 15px;
`

const ListBody = styled.div`
  background-color: black;
`

const ListDesc = styled.div`
  padding: 20px;
  padding-top: 40px;
  color: #9e9e9e;
`

const GroupedTasks = styled.div`
  margin-bottom: 25px;
`

const TaskDaysScreen = ({ currentTask, handleTaskChange, chosenColor }) => {

  const checkedDays = {...currentTask.daily}

  const handleCheck = (checkedDayType) => {
    const newDaily = {...checkedDays}
    Object.keys(checkedDays).forEach((checkedDay) => {
      if (checkedDay === checkedDayType) {
        newDaily[checkedDay].checked = true
      } else {
        newDaily[checkedDay].checked = false
      }
    })

    handleTaskChange({...currentTask, daily: newDaily})
  }

  const handleCheckSpecificDaysOfWeek = () => {
    handleCheck('specificDaysOfWeek')
  }

  const handleCheckNumOfDaysPerWeek = () => {
    handleCheck('numOfDaysPerWeek')
  }

  const handleFortnight = () => {
    handleCheck('numOfDaysPerFortnight')
  }

  const handleMonth = () => {
    handleCheck('numOfDaysPerMonth')
  }

  const handleEveryXDays = () => {
    handleCheck('everyXDays')
  }

  const handleSelectFrequency = (checkedDaysType, frequency) => {
    const newCheckedDaysType = {
      checked: true, frequency: frequency
    }

    const newDaily = {
      ...currentTask.daily,
      [checkedDaysType]: newCheckedDaysType
    }

    handleTaskChange({...currentTask, daily: newDaily})
  }

  const handleToggleDay = (newSelectedDays) => {
    const newDaily = {...checkedDays, 'specificDaysOfWeek': {
      checked: true,
      days: newSelectedDays
    }}

    handleTaskChange({...currentTask, daily: newDaily})

    console.log(currentTask)
  }
  
  const handleSelectPerWeekFrequency = (e) => {
    if (e.target.value) {
      handleSelectFrequency('numOfDaysPerWeek', Number(e.target.value))
    } else {
      handleSelectFrequency('numOfDaysPerWeek', Number(e.target.textContent))
    }
  }

  const handleSelectPerFortnight = (e) => {
    if (e.target.value) {
      handleSelectFrequency('numOfDaysPerFortnight', Number(e.target.value))
    } else {
      handleSelectFrequency('numOfDaysPerFortnight', Number(e.target.textContent))
    }
  }

  const handleSelectPerMonth = (e) => {
    if (e.target.value) {
      handleSelectFrequency('numOfDaysPerMonth', Number(e.target.value))
    } else {
      handleSelectFrequency('numOfDaysPerMonth', Number(e.target.textContent))
    }
  }

  const handleSelectPerXDays = (e) => {
    if (e.target.value) {
      handleSelectFrequency('everyXDays', Number(e.target.value))
    } else {
      handleSelectFrequency('everyXDays', Number(e.target.textContent))
    }
  }

  return (
    <div>
      <ListHeader>
        <Link to="/confirm">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Task Days</ListTitle>
      </ListHeader>

      <ListDesc></ListDesc>

      <ListBody>
        <GroupedTasks>
          <ConfirmationListElem title="Specific days of the week" clickHandler={handleCheckSpecificDaysOfWeek} checked={checkedDays.specificDaysOfWeek.checked} chosenColor={chosenColor}/>
          
          {checkedDays.specificDaysOfWeek.checked ? (
            <TaskDayOptionDays days={checkedDays.specificDaysOfWeek.days} chosenColor={chosenColor} handleClick={handleToggleDay}/>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Number of days per week" clickHandler={handleCheckNumOfDaysPerWeek} checked={checkedDays.numOfDaysPerWeek.checked} chosenColor={chosenColor}/>

          {checkedDays.numOfDaysPerWeek.checked ? (
            <TaskDayOptionNum chosenNum={checkedDays.numOfDaysPerWeek.frequency} chosenColor={chosenColor} handleClick={handleSelectPerWeekFrequency}/>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Number of days per fortnight" clickHandler={handleFortnight} checked={checkedDays.numOfDaysPerFortnight.checked} chosenColor={chosenColor}/>
          
          {checkedDays.numOfDaysPerFortnight.checked ? (
            <TaskDayOptionNum chosenNum={checkedDays.numOfDaysPerFortnight.frequency} chosenColor={chosenColor} handleClick={handleSelectPerFortnight} endNum={14} startNum={1}/>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Number of days per month" clickHandler={handleMonth} checked={checkedDays.numOfDaysPerMonth.checked} chosenColor={chosenColor}/>

          {checkedDays.numOfDaysPerMonth.checked ? (
            <TaskDayOptionNum chosenNum={checkedDays.numOfDaysPerMonth.frequency} chosenColor={chosenColor} handleClick={handleSelectPerMonth} endNum={31} startNum={1}/>

          
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title={`Every ${checkedDays.everyXDays.frequency} days`} clickHandler={handleEveryXDays} checked={checkedDays.everyXDays.checked} chosenColor={chosenColor}/>

          {checkedDays.everyXDays.checked ? (
            <TaskDayOptionNum chosenNum={checkedDays.everyXDays.frequency} chosenColor={chosenColor} handleClick={handleSelectPerXDays} endNum={15} startNum={2}/>

          ) : null}
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;