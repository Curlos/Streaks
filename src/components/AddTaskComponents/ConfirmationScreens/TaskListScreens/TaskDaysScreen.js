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

  const handleCheck = (taskDayType) => {
    const newCheckedTaskDays = {}
    Object.keys(checkedTaskDays).forEach((taskDay) => {
      if (taskDay === taskDayType) {
        newCheckedTaskDays[taskDay] = true
        const newDaily = {...currentTask.daily, taskDays: []}
        handleTaskChange({...currentTask, daily: newDaily})
      } else {
        newCheckedTaskDays[taskDay] = false
      }
    })

    setCheckedTaskDays(newCheckedTaskDays)
  }

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
          <ListElem name="Specific days of the week" type="smallForm" checkable={true} checked={true}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per week" checkable={true} checked={false}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per fortnight" checkable={true} checked={false}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Number of days per month" checkable={true} checked={false}/>
        </GroupedTasks>

        <GroupedTasks>
          <ListElem name="Every 2 Days" checkable={true} checked={false}/>
        </GroupedTasks>
      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;