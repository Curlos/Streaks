import React, { useState } from 'react'
import { GroupedTasks } from '../../../StyledComponents/StyledPresetTask'
import { ListTitle, ListHeader, ListBody, ListDesc } from '../../../StyledComponents/StyledConfirmation'
import ListElem from '../../ListElem' 
import { Link } from 'react-router-dom'
import Task from '../../../Task'
import styled from 'styled-components'

const GroupedTasksLarge = styled(GroupedTasks)`
  margin-bottom: 45px;
`

const MeasurementDurationScreen = ({ currentTask, handleTaskChange }) => {

  const [checkedDuration, setCheckedDuration] = useState({
    daily: currentTask.measurementDuration.type === 'daily',
    weekly: currentTask.measurementDuration.type === 'weekly',
    monthly: currentTask.measurementDuration.type === 'monthly'
  })

  const handleCheck = (durationType) => {
    const newCheckedDuration = {}
    Object.keys(checkedDuration).forEach((duration) => {
      if (duration === durationType) {
        newCheckedDuration[duration] = true
        const newMeasurementDuration = {type: duration, iconName: getIconName(duration)}
        handleTaskChange({...currentTask, measurementDuration: newMeasurementDuration})
      } else {
        newCheckedDuration[duration] = false
      }
    })

    setCheckedDuration(newCheckedDuration)
  }

  const getIconName = (duration) => {
    switch(duration) {
      case 'daily':
        return 'calendar-day'
      case 'weekly':
        return 'calendar-week'
      case 'monthly':
        return 'calendar'
      default:
        return 'calendar'
    }
  }

  const handleCheckDaily = () => {
    handleCheck('daily')
  }

  const handleCheckWeekly = () => {
    handleCheck('weekly')
  }

  const handleCheckMonthly = () => {
    handleCheck('monthly')
  }

  return (
    <div>
      <ListHeader>
        <Link to="/confirm">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Measurement Duration</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc>Determines the period of time a single completion is measured over.</ListDesc>
        <GroupedTasksLarge>
          <ListElem name="Daily Task" icon={<i value="customTask" className={`fas fa-calendar-day fa-2x`}></i>} clickHandler={handleCheckDaily} checkable={true} checked={checkedDuration.daily}/>
        </GroupedTasksLarge>

        <GroupedTasksLarge>
          <ListElem name="Weekly Task" icon={<i value="customTask" className={`fas fa-calendar-week fa-2x`}></i>} clickHandler={handleCheckWeekly} checkable={true} checked={checkedDuration.weekly}/>
        </GroupedTasksLarge>

        <GroupedTasksLarge>
          <ListElem name="Monthly Task" icon={<i value="customTask" className={`fas fa-calendar fa-2x`}></i>} clickHandler={handleCheckMonthly} checkable={true} checked={checkedDuration.monthly}/>
        </GroupedTasksLarge>
      </ListBody>
    </div>
  )
}

export default MeasurementDurationScreen;