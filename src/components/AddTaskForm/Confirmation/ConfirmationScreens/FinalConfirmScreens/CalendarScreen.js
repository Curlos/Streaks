import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import getIcons from '../Helpers/getIcons'
import CalendarHeaderIcon from '../HelperComponents/CalendarHeaderIcon'
import CalendarIcon from '../HelperComponents/CalendarIcon'
import styled from 'styled-components'

const ListTitle = styled.span`
  font-size: 30px;
`

const ListIconHeader = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px 20px 0 0;
`

const ListIcon = styled.span`

`

const ListTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`

const ListBody = styled.div`
  background-color: black;
`

const DaysHeader = styled.div`
  display: flex;
  justify-content: space-around;
`

const DayOfWeek = styled.div`
  font-size: 20px;
`

const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`


const CalendarScreen = ({ currentTask, handleTaskChange, taskObj, edit, date }) => {

  const { id } = useParams()
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const goToPrevMonth = () => {
    const prevDate = new Date(currentYear, currentMonth - 1)
    setCurrentMonth(prevDate.getMonth())
    setCurrentYear(prevDate.getFullYear())

    console.log(prevDate)
  }

  const goToNextMonth = () => {
    const nextDate = new Date(currentYear, currentMonth + 1)
    setCurrentMonth(nextDate.getMonth())
    setCurrentYear(nextDate.getFullYear())
  }

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }

  const getArraySequence = (end=7, start=1) => {
    return [...Array(end + 1).keys()].slice(start)
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div>
      <ListIconHeader>
        <CalendarHeaderIcon currentTask={currentTask} />
      </ListIconHeader>

      <ListTitleHeader>
        <ListIcon onClick={goToPrevMonth}>
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </ListIcon>
        <ListTitle>{monthNames[currentMonth]} {currentYear}</ListTitle>
        <ListIcon onClick={goToNextMonth}>
          <i value="goBack" className="fas fa-greater-than fa-2x"></i>
        </ListIcon>
      </ListTitleHeader>

      <ListBody>
          <DaysHeader>
            {daysOfWeek.map((day) => (
              <DayOfWeek key={day}>
                {day[0]}
              </DayOfWeek>
            ))}
          </DaysHeader>
          <DaysContainer>
            {getArraySequence(daysInMonth(currentMonth + 1, currentYear), 1).map((dayNum) => {

              const currentDate = new Date(currentYear, currentMonth, dayNum).toISOString().split('T')[0]

              return (
                <CalendarIcon key={currentDate} dayNum={dayNum} currentTask={currentTask} handleTaskChange={handleTaskChange} currentMonth={currentMonth} currentYear={currentYear}/>
              )
            })}
          </DaysContainer>
      </ListBody>
    </div>
  )
}

export default CalendarScreen;