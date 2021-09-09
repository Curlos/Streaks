import React, { useState } from 'react'
import { GroupedTasks } from '../../../StyledComponents/StyledPresetTask'
import { ListTitle, ListHeader, ListBody, ListDesc } from '../../../StyledComponents/StyledConfirmation'
import ListElem from '../../ListElem' 
import { Link } from 'react-router-dom'


const TaskDaysScreen = ({ currentTask, handleTaskChange }) => {

  const [checkedTaskDays, setCheckedTaskDays] = useState({
    specificDaysOfWeek: currentTask.daily.type === 'specificDaysOfWeek',
    numOfDaysPerWeek: currentTask.daily.type === 'numOfDaysPerWeek',
    numOfDaysPerFortnight: currentTask.daily.type === 'numOfDaysPerFortnight',
    numOfDaysPerMonth: currentTask.daily.type === 'numOfDaysPerMonth',
    everyTwoDays: currentTask.daily.type === 'everyTwoDays',
  })

  const handleCheck = (periodType) => {
    const newCheckedTaskDays = {}
    Object.keys(checkedTaskDays).forEach((period) => {
      if (period === periodType) {
        newCheckedTaskDays[period] = true
        const newDaily = {...currentTask.daily, taskDays: []}
        handleTaskChange({...currentTask, daily: newDaily})
      } else {
        newCheckedTaskDays[period] = false
      }
    })

    setCheckedTaskDays(newCheckedTaskDays)
  }

  const toggleDropdown = (period) => {
    if (period === 'specificDaysOfWeek') {
      
    }
  }

  const handleSpecificDaysOfWeek = () => {
    handleCheck('specificDaysOfWeek')
    toggleDropdown('specificDaysOfWeek')
  }

  const handleNumOfDaysPerWeek = () => {
    handleCheck('numOfDaysPerWeek')
  }

  const handleNumOfDaysPerFortnight = () => {
    handleCheck('numOfDaysPerFortnight')
  }

  const handleNumOfDaysPerMonth = () => {
    handleCheck('numOfDaysPerMonth')
  }

  const handleEveryTwoDays = () => {
    handleCheck('everyTwoDays')
  }

  console.log(checkedTaskDays)

  return (
    <div>
      <ListHeader>
        <Link to="/confirm">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Task Days</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc>
          Determines the period of time a single completion is measured over.
        </ListDesc>
        <GroupedTasks>
          <ListElem name="Specific days of the week" type="smallForm" checkable={true} checked={checkedTaskDays['specificDaysOfWeek'] === true} clickHandler={handleSpecificDaysOfWeek}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per week" checkable={true} checked={checkedTaskDays['numOfDaysPerWeek'] === true} clickHandler={handleNumOfDaysPerWeek}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per fortnight" checkable={true} checked={checkedTaskDays['numOfDaysPerFortnight'] === true} clickHandler={handleNumOfDaysPerFortnight}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per month" checkable={true} checked={checkedTaskDays['numOfDaysPerMonth'] === true} clickHandler={handleNumOfDaysPerMonth}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Every 2 Days" checkable={true} checked={checkedTaskDays['everyTwoDays'] === true} clickHandler={handleEveryTwoDays}/>
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;