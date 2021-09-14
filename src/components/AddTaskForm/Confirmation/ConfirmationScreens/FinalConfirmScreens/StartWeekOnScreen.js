import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListElem from '../../../ListElem/ListElem'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
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

const StartWeekOnScreen = ({ currentTask, handleTaskChange, automaticColor }) => {

  const [checkedDays, setCheckedDays] = useState({
    sunday: true,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  })

  const handleCheck = (e) => {
    const checkedDay = e.target.getAttribute('value')
    const newCheckedDays = {}

    Object.keys(checkedDays).forEach((day) => {
      if (day === checkedDay) {
        console.log(`Selected ${[day]}`)
        newCheckedDays[day] = true
        const titleCaseDay = day[0].toUpperCase() + day.slice(1)
        const newWeekly = {...currentTask.weekly, startWeekOn: titleCaseDay}
        handleTaskChange({...currentTask, weekly: newWeekly})
      } else {
        newCheckedDays[day] = false
      }
    })

    setCheckedDays(newCheckedDays)
  }

  return (
    <div>
      <ListHeader>
        <Link to="/confirm">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Start Week On</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc></ListDesc>
        <GroupedTasks>
          {['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => {
            const titleCaseDay = day[0].toUpperCase() + day.slice(1)

            return (
              <ConfirmationListElem title={titleCaseDay} clickHandler={handleCheck} checked={checkedDays[day]} automaticColor={automaticColor} value={day}/>
            )
          })}
        </GroupedTasks>

      </ListBody>
    </div>
  )
}

export default StartWeekOnScreen;