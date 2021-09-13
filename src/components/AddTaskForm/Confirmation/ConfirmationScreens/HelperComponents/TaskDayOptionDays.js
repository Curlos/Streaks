import React, { useState } from 'react'
import styled from 'styled-components'

const DaysContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => (props.checked === true ? props.color : 'gray')};
  opacity: ${props => props.checked === true ? '1': '0.50'};
  width: 50px;
  height: 50px;
  margin: 10px;
`

const DayName = styled.span`
  font-size: 1.33em;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskDayOptionDays = ({ chosenColor, handleClick }) => {
  const [selectedDays, setSelectedDays] = useState({
    sunday: true,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true
  })

  const changeSelectedDay = (e) => {
    
    let newSelectedDays = selectedDays

    if (e.target.getAttribute('value')) {
      const day = e.target.getAttribute('value').toLowerCase()
      newSelectedDays = {...selectedDays, [day]: !selectedDays[day]}
      setSelectedDays(newSelectedDays)
    }

    handleClick(newSelectedDays)
  }

  return (
    <DaysContainer>
      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => {
        
        const firstLetter = day[0]

        return (
          <Day key={day} value={day} color={chosenColor} checked={selectedDays[day]} onClick={changeSelectedDay}>
            <DayName value={day}>{firstLetter}</DayName>
          </Day>
        )
      })}
    </DaysContainer>
  )
}

export default TaskDayOptionDays;