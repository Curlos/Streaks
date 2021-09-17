import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import getIcons from '../Helpers/getIcons'
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

const GroupedTasks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`


const CalendarScreen = ({ currentTask, handleTaskChange, taskObj, edit }) => {

  const { id } = useParams()
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];



  const getLinkURL = () => {
    if (edit) {
      return `/confirm/edit/${id}`
    }

    return '/confirm'
  }

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

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div>
      <ListIconHeader>
        <CalendarIcon currentTask={currentTask} />
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
          {daysOfWeek.map((day) => (
            <div>
              {currentMonth + 1} {currentYear} Days in Month: {daysInMonth(currentMonth + 1, currentYear)}
            </div>
          ))}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((num) => {
            return num
          })}
      </ListBody>
    </div>
  )
}

export default CalendarScreen;