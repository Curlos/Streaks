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
  const currentDateStr = new Date(currentYear, currentMonth, dayNum).toISOString().split('T')[0]

  const [dateStatus, setDateStatus] = useState(getTaskCompletion(currentTask, currentDateStr))

  const toggleIcon = () => {

    if (dateStatus === 'skipped') {
      // If the task is completed
      setDateStatus('complete')
      const newCompletedDays = {...currentTask.completedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

      const newLongestStreak = checkLongestStreak({...currentTask, completedDays: newCompletedDays})

      const newCurrentStreak = checkCurrentStreak({...currentTask, completedDays: newCompletedDays})
      
      let newTask = {...currentTask, completedDays: newCompletedDays, longestStreak: newLongestStreak, currentStreak: newCurrentStreak}

      console.log(newTask)
      handleTaskChange(newTask)
    } else if (dateStatus === 'complete') {
      // If the task is missed
      setDateStatus('missed')

      const newMissedDays = {...currentTask.missedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

      const newLongestStreak = checkLongestStreak({...currentTask, missedDays: newMissedDays})

      const newCurrentStreak = checkCurrentStreak({...currentTask, missedDays: newMissedDays})
      
      let newTask = {...currentTask, missedDays: newMissedDays, longestStreak: newLongestStreak, currentStreak: newCurrentStreak}

      console.log(newTask)
      handleTaskChange(newTask)
    } else {
      // If the task is skipped
      setDateStatus('skipped')
    }
  }

  const checkCurrentStreak = (newTask) => {
    const currentDay = new Date()
    const dayBefore = new Date(currentDay.toDateString())
    dayBefore.setDate(dayBefore.getDate() - 1)

    let dayBeforeStr = dayBefore.toISOString().split('T')[0]
    let currentDayStr = currentDay.toISOString().split('T')[0]
    const newCurrentStreak = {num: 1, from: currentDayStr, to: currentDayStr}

    while (true) {
      if (Object.keys(newTask.completedDays).includes(dayBeforeStr)) {
        newCurrentStreak.num += 1
        newCurrentStreak.from = dayBeforeStr
        dayBefore.setDate(dayBefore.getDate() - 1)
        dayBeforeStr = dayBefore.toISOString().split('T')[0]
      } else {
        break
      }
    }

    const newTaskCurrentStreak = {num: newCurrentStreak.num, from: newCurrentStreak.from, to: currentDayStr}

    return newTaskCurrentStreak
  }


  const checkLongestStreak = (newTask) => {
    const currentDay = new Date(currentYear, currentMonth, dayNum)

    const dayBefore = new Date(currentDay.toDateString())
    dayBefore.setDate(dayBefore.getDate() - 1)

    const dayAfter = new Date(currentDay.toDateString())
    dayAfter.setDate(dayAfter.getDate() + 1)


    let dayBeforeStr = dayBefore.toISOString().split('T')[0]
    let dayAfterStr = dayAfter.toISOString().split('T')[0]
    let currentDayStr = currentDay.toISOString().split('T')[0]
    const newLongestStreak = {num: 1, from: currentDayStr, to: currentDayStr}

    // console.log(pastStreak)
    // console.log(Object.keys(newTask.completedDays))

    while (true) {
      if (Object.keys(newTask.completedDays).includes(dayBeforeStr)) {
        console.log(`Day before: ${dayBeforeStr}`)
        newLongestStreak.num += 1
        newLongestStreak.from = dayBeforeStr
        dayBefore.setDate(dayBefore.getDate() - 1)
        dayBeforeStr = dayBefore.toISOString().split('T')[0]

      } else if (Object.keys(newTask.completedDays).includes(dayAfterStr)) {
        console.log(`Day after: ${dayAfterStr}`)
        newLongestStreak.num += 1
        newLongestStreak.to = dayAfterStr
        dayAfter.setDate(dayAfter.getDate() + 1)
        dayAfterStr = dayAfter.toISOString().split('T')[0]
        
      } else {
        break
      }
    }
    dayBefore.setDate(dayBefore.getDate() + 1)
    dayAfter.setDate(dayAfter.getDate() - 1)

    if (newLongestStreak.num > currentTask.longestStreak.num) {
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

  const currentDateInSec = new Date(currentYear, currentMonth, dayNum).getTime()
  const todayInSec = new Date().getTime()
  // A date can only be clicked if it is either the current day (today) or before the current day
  const clickableDate = todayInSec >= currentDateInSec

  return (
      <span>
        <TaskContainer onClick={clickableDate ? toggleIcon : null}>
          {getIcon()}
        </TaskContainer>
      </span>
  )
}


export default CalendarIcon;