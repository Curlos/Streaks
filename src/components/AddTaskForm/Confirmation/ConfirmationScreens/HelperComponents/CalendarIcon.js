import React, { useState } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 70
const taskContainerHeight = 70

const TaskContainer = styled.span`

`
const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;
  margin-bottom: 0px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskIconFont = styled.div`
  font-size: ${taskContainerWidth / 2}px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskIconSkipped = styled(TaskIconContainer)`
  opacity: 0.5;
`

const TaskIconX = styled.div`
  font-size: ${taskContainerWidth}px;
  color: gray;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const getTaskCompletion = (currentTask, currentDate) => {
  if (Object.keys(currentTask.completedDays).includes(currentDate)) {
    return 'complete' // complete
  } else if (Object.keys(currentTask.missedDays).includes(currentDate)) {
    return 'missed' // missed
  }

  return 'skipped' // skipped
}

const CalendarIcon = ({ currentTask, handleTaskChange, dayNum, currentMonth, currentYear }) => {
  const currentDate = new Date(currentYear, currentMonth, dayNum).toString()
  const currentDateStr = new Date(currentYear, currentMonth, dayNum).toISOString().split('T')[0]

  const [dateStatus, setDateStatus] = useState(getTaskCompletion(currentTask, currentDateStr))

  const toggleIcon = () => {

    if (dateStatus === 'skipped') {
      setDateStatus('complete')
      const newCompletedDays = {...currentTask.completedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

      const newLongestStreak = checkLongestStreak({...currentTask, completedDays: newCompletedDays})

      const newCurrentStreak = checkCurrentStreak({...currentTask, completedDays: newCompletedDays})
      
      let newTask = {...currentTask, completedDays: newCompletedDays, longestStreak: newLongestStreak, currentStreak: newCurrentStreak}

      console.log(`Adding ${currentDateStr}...`)
      console.log(Object.keys(newTask.completedDays))
      handleTaskChange(newTask)
    } else if (dateStatus === 'complete') {
      setDateStatus('missed')
    } else {
      setDateStatus('skipped')
    }

    console.log(currentTask)
  }

  const checkCurrentStreak = (newTask) => {
    const currentDay = new Date()
    const dayBefore = new Date(currentDay.toDateString())
    dayBefore.setDate(dayBefore.getDate() - 1)

    let dayBeforeStr = dayBefore.toISOString().split('T')[0]
    let currentStreak = 1

    while (true) {
      if (Object.keys(newTask.completedDays).includes(dayBeforeStr)) {
        currentStreak += 1
        dayBefore.setDate(dayBefore.getDate() - 1)
        dayBeforeStr = dayBefore.toISOString().split('T')[0]
      } else {
        break
      }
    }

    if (currentStreak > newTask.currentStreak.num) {
      const newCurrentStreak = {num: currentStreak, from: dayBefore, to: currentDay}
      return newCurrentStreak
    }

    return newTask.currentStreak
  }

  const checkLongestStreak = (newTask) => {
    const currentDay = new Date(currentYear, currentMonth, dayNum)
    const dayBefore = new Date(currentDay.toDateString())
    dayBefore.setDate(dayBefore.getDate() - 1)
    const dayAfter = new Date(currentDay.toDateString())
    dayAfter.setDate(dayAfter.getDate() + 1)


    let dayBeforeStr = dayBefore.toISOString().split('T')[0]
    let dayAfterStr = dayAfter.toISOString().split('T')[0]
    let pastStreak = 1 // the current day is complete so starts at one

    // console.log(pastStreak)
    // console.log(Object.keys(newTask.completedDays))

    while (true) {
      if (Object.keys(newTask.completedDays).includes(dayBeforeStr)) {
        pastStreak += 1
        // console.log(`Day before: ${dayBeforeStr}`)
        // console.log(pastStreak)

        dayBefore.setDate(dayBefore.getDate() - 1)
        dayBeforeStr = dayBefore.toISOString().split('T')[0]

      } else if (Object.keys(newTask.completedDays).includes(dayAfterStr)) {
        pastStreak += 1
        // console.log(`Day after: ${dayAfterStr}`)
        // console.log(pastStreak)

        dayAfter.setDate(dayAfter.getDate() + 1)
        dayAfterStr = dayAfter.toISOString().split('T')[0]
        
      } else {
        break
      }
    }

    if (pastStreak > currentTask.longestStreak.num) {
      const newLongestStreak = {num: pastStreak, from: dayBefore, to: dayAfter}
      return newLongestStreak
    }

    return currentTask.longestStreak
  }

  const getIcon = () => {
    switch (dateStatus) {
      case 'skipped':
        return (
          <TaskIconSkipped backgroundColor={currentTask.color.color}>
            <TaskIconFont backgroundColor={currentTask.color.color}>
              {dayNum}
            </TaskIconFont>
          </TaskIconSkipped>
        )
      case 'missed':
        return (
          <TaskIconContainer backgroundColor="none">
            <TaskIconX backgroundColor="none">
              {<i class="fas fa-times"></i>}
            </TaskIconX>
          </TaskIconContainer>
        )
      case 'complete':
        return (
          <TaskIconContainer backgroundColor={currentTask.color.color}>
            <TaskIconFont backgroundColor={currentTask.color.color}>
              {dayNum}
            </TaskIconFont>
          </TaskIconContainer>
        )
      default:
        return null
    }
  }

  return (
      <span>
        <TaskContainer onClick={toggleIcon}>
          {getIcon()}
        </TaskContainer>
      </span>
  )
}


export default CalendarIcon;