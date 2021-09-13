import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListElemWithIcon from '../../../ListElem/ListElemWithIcon'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
import styled from 'styled-components'

const ListTitle = styled.span`
  font-size: 25px;
`

const ListHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 15px;
  border-radius: 0 20px 20px 20px;
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

const GroupedTasksLarge = styled(GroupedTasks)`
  margin-bottom: 45px;
`

const MeasurementDurationScreen = ({ currentTask, handleTaskChange, automaticColor }) => {

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

  console.log(checkedDuration)

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
          <ConfirmationListElem title="Daily Task" iconClassName="fas fa-calendar-day" clickHandler={handleCheckDaily} checkable={true} checked={checkedDuration.daily} automaticColor={automaticColor}/>
        </GroupedTasksLarge>

        <GroupedTasksLarge>
          <ConfirmationListElem title="Weekly Task" iconClassName="fas fa-calendar-week" clickHandler={handleCheckWeekly} checkable={true} checked={checkedDuration.weekly} automaticColor={automaticColor} description="Streak measures number of weeks."/>
        </GroupedTasksLarge>

        <GroupedTasksLarge>
          <ConfirmationListElem title="Monthly Task" iconClassName="fas fa-calendar" clickHandler={handleCheckMonthly} checkable={true} checked={checkedDuration.monthly} automaticColor={automaticColor} description="Streak measures number of months."/>
        </GroupedTasksLarge>
      </ListBody>
    </div>
  )
}

export default MeasurementDurationScreen;