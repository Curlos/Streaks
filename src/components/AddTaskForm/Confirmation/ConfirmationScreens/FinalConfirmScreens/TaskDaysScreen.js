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

const TaskDaysScreen = ({ currentTask, handleTaskChange, chosenColor }) => {

  const [checkedDays, setCheckedDays] = useState({
    specificDaysOfWeek: {
      checked: currentTask.daily.taskDaysType === 'specificDaysOfWeek',
      days: {
        sunday: true,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true
      }
    },
    numOfDaysPerWeek: {
      checked: currentTask.daily.taskDaysType === 'numOfDaysPerWeek',
      frequency: 7
    },
    numOfDaysPerFortnight: {
      checked: currentTask.daily.taskDaysType === 'numOfDaysPerFortnight',
      frequency: 7
    },
    numOfDaysPerMonth: {
      checked: currentTask.daily.taskDaysType === 'numOfDaysPerMonth',
      frequency: 7
    },
    everyXDays: {
      checked: currentTask.daily.taskDaysType === 'everyXDays',
      frequency: 2
    },
  })

  const handleCheck = (checkedDayType) => {
    const newCheckedDays = {...checkedDays}
    Object.keys(checkedDays).forEach((checkedDay) => {

      console.log(checkedDay)
      if (checkedDay === checkedDayType) {
        newCheckedDays[checkedDay].checked = true
        const newCheckedDay = {
          taskDaysType: checkedDay,
          frequency: newCheckedDays[checkedDay].frequency,
        }
        handleTaskChange({...currentTask, daily: newCheckedDay})
      } else {
        newCheckedDays[checkedDay].checked = false
      }
    })

    console.log(newCheckedDays)

    setCheckedDays(newCheckedDays)
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
    console.log([checkedDaysType, frequency])
    const newCheckedDaysType = {
      checked: true, frequency: frequency
    }
    setCheckedDays({...checkedDays, [checkedDaysType]: newCheckedDaysType})

    console.log({...checkedDays, [checkedDaysType]: newCheckedDaysType})
  }

  const handleToggleDay = (newSelectedDays) => {
    setCheckedDays({...checkedDays, 'specificDaysOfWeek': {
      checked: true,
      days: newSelectedDays
    }})
    console.log({...checkedDays, 'specificDaysOfWeek': {
      checked: true,
      days: newSelectedDays
    }}['specificDaysOfWeek'].days)
    console.log(newSelectedDays)
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

  return (
    <div>
      <ListHeader>
        <Link to="/confirm">
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Color</ListTitle>
      </ListHeader>

      <ListDesc></ListDesc>

      <ListBody>
        <GroupedTasks>
          <ConfirmationListElem title="Specific days of the week" clickHandler={handleCheckSpecificDaysOfWeek} checked={checkedDays.specificDaysOfWeek.checked} chosenColor={chosenColor}/>
          
          {checkedDays.specificDaysOfWeek.checked ? (
            <TaskDayOptionDays chosenColor={chosenColor} handleClick={handleToggleDay}/>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Number of days per week" clickHandler={handleCheckNumOfDaysPerWeek} checked={checkedDays.numOfDaysPerWeek.checked} chosenColor={chosenColor}/>

          {checkedDays.numOfDaysPerWeek.checked ? (
            <TaskDayOptionNum chosenColor={chosenColor} handleClick={handleSelectPerWeekFrequency}/>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Number of days per fortnight" clickHandler={handleFortnight} checked={checkedDays.numOfDaysPerFortnight.checked} chosenColor={chosenColor}/>
          
          {checkedDays.numOfDaysPerFortnight.checked ? (
            <TaskDayOptionNum chosenColor={chosenColor} handleClick={handleSelectPerFortnight}/>
          ) : null}
        </GroupedTasks>

        {
          /*
          <GroupedTasks>
          <ConfirmationListElem title="Number of days per fortnight" clickHandler={handleFortnight} checked={checkedDays.numOfDaysPerFortnight.checked} chosenColor={chosenColor}/>
          
          {checkedDays.numOfDaysPerFortnight.checked ? (
            <DaysContainer>
            {getArraySequence(14).map((num) => {

              return (
                <Day color={chosenColor}>
                  <DayName>{num}</DayName>
                </Day>
              )
            })}
          </DaysContainer>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Number of days per month" clickHandler={handleMonth} checked={checkedDays.numOfDaysPerMonth.checked} chosenColor={chosenColor}/>

          {checkedDays.numOfDaysPerMonth.checked ? (
            <DaysContainer>
            {getArraySequence(31).map((num) => {

              return (
                <Day color={chosenColor}>
                  <DayName>{num}</DayName>
                </Day>
              )
            })}
          </DaysContainer>
          ) : null}
        </GroupedTasks>

        <GroupedTasks>
          <ConfirmationListElem title="Every 2 Days" clickHandler={handleEveryXDays} checked={checkedDays.everyXDays.checked} chosenColor={chosenColor}/>

          {checkedDays.everyXDays.checked ? (
            <DaysContainer>
            {getArraySequence(15, 2).map((num) => {

              return (
                <Day color={chosenColor}>
                  <DayName>{num}</DayName>
                </Day>
              )
            })}
          </DaysContainer>
          ) : null}
        </GroupedTasks>
          */
        }

      </ListBody>
    </div>
  )
}

export default TaskDaysScreen;