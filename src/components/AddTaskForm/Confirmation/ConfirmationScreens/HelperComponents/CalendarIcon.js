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
      completeTask(currentDateStr, dateStatus)
    } else if (dateStatus === 'complete') {
      // If the task is missed
      missTask(currentDateStr, dateStatus)
    } else {
      // If the task is skipped
      skipTask(currentDateStr, dateStatus)
    }
  }

  const completeTask = (currentDateStr, dateStatus) => {
    setDateStatus('complete')
    const newMissedDays = {...currentTask.missedDays}
    delete newMissedDays[currentDateStr]

    const newCompletedDays = {...currentTask.completedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

    const {longestStreak, currentStreak, streaks} = checkStreaks({...currentTask, completedDays: newCompletedDays})
    
    let newTask = {...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays, longestStreak: longestStreak, currentStreak: currentStreak, streaks: streaks}

    console.log(newTask)
    handleTaskChange(newTask)
  }

  const missTask = (currentDateStr, dateStatus) => {
    setDateStatus('missed')

    const newCompletedDays = {...currentTask.completedDays}
    delete newCompletedDays[currentDateStr]

    const newMissedDays = {...currentTask.missedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

    const {longestStreak, currentStreak, streaks} = checkStreaks({...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays})
    
    let newTask = {...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays, longestStreak: longestStreak, currentStreak: currentStreak, streaks: streaks}

    console.log(newTask)
    handleTaskChange(newTask)
  }

  const skipTask = (currentDateStr, dateStatus) => {
    setDateStatus('skipped')

    const newCompletedDays = {...currentTask.completedDays}
    delete newCompletedDays[currentDateStr]

    const newMissedDays = {...currentTask.missedDays}
    delete newMissedDays[currentDateStr]

    const {longestStreak, currentStreak, streaks} = checkStreaks({...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays})
    
    let newTask = {...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays, longestStreak: longestStreak, currentStreak: currentStreak, streaks: streaks}

    console.log(newTask)
    handleTaskChange(newTask)
  }

  const dateDiffInDays = (a, b) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  const daysMissingInBetween = (newTask, startDate, endDate) => {

    const startDateObj = new Date(startDate)
    startDateObj.setDate(startDateObj.getDate() + 1)

    const endDateObj = new Date(endDate)
    endDateObj.setDate(endDateObj.getDate() + 1)

    const numOfDays = dateDiffInDays(startDateObj, endDateObj)
    console.log(`date difference ${startDate} - ${endDate}`)
    console.log(numOfDays)

    let currDate = startDate

    for (let i = 1; i < numOfDays; i++) {
      console.log(Object.keys(newTask.missedDays))
      console.log(currDate)

      if (Object.keys(newTask.missedDays).includes(currDate)) {
        return true
      }

      const dayAfter = new Date(currDate)
      dayAfter.setDate(dayAfter.getDate() + 1)
      currDate = dayAfter.toISOString().split('T')[0]
    }

    return false
  }

  const checkStreaks = (newTask) => {
    const orderedDates = Object.fromEntries(Object.entries(newTask.completedDays).sort())
    const firstDate = Object.keys(orderedDates)[0]
    const orderedDatesKeys = Object.keys(orderedDates)

    const currentStreak = {num: 1, from: firstDate, to: firstDate}
    const streaks = []

    for (let i = 0; i < orderedDatesKeys.length - 1; i++) {
      const currentDate = orderedDatesKeys[i]
      const dayAfter = new Date(currentDate)
      dayAfter.setDate(dayAfter.getDate() + 1)
      const dayAfterStr = dayAfter.toISOString().split('T')[0]
      const nextDate = orderedDatesKeys[i + 1]

      const anyDaysMissingInBetween = daysMissingInBetween(newTask, currentDate, nextDate)

      if (nextDate !== dayAfterStr && anyDaysMissingInBetween) {
        streaks.push({...currentStreak})
        currentStreak.num = 1
        currentStreak.from = nextDate
        currentStreak.to = nextDate
      } else {
        currentStreak.num += 1
        currentStreak.to = nextDate
      }
    }

    streaks.push({...currentStreak})

    streaks.sort((a, b) => (a.num > b.num) ? 1 : (a.num == b.num) ? ((a.from > b.from) ? 1 : -1): -1)
    console.log(streaks)

    const longestStreak = streaks[streaks.length - 1]

    return {longestStreak: longestStreak, currentStreak: getCurrentStreak(newTask, streaks), streaks: streaks}
  }

  const getCurrentStreak = (newTask, streaks) => {
    const currentDate = new Date().getDate()
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const currentDay = new Date(currentYear, currentMonth, currentDate)
    const dayBefore = new Date(currentDay.toDateString())
    dayBefore.setDate(dayBefore.getDate() - 1)

    let dayBeforeStr = dayBefore.toISOString().split('T')[0]
    let currentDayStr = currentDay.toISOString().split('T')[0]

    if (Object.keys(newTask.missedDays).includes(dayBeforeStr) || Object.keys(newTask.missedDays).includes(currentDayStr)) {
      return {num: 0, from: '', to: ''}
    } else if (!Object.keys(newTask.completedDays).includes(dayBeforeStr)) {
      return {num: 0, from: '', to: ''}
    } else {
      for (let streak of streaks) {
        if (streak.to === dayBeforeStr || streak.to === currentDayStr) {
          return streak
        }
      }
    }
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