export const completeTask = (currentDateStr, currentTask, currentYear, currentMonth, dayNum, handleTaskChange) => {
  const newMissedDays = {...currentTask.missedDays}
  delete newMissedDays[currentDateStr]

  const newCompletedDays = {...currentTask.completedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

  const {longestStreak, currentStreak, streaks} = checkStreaks({...currentTask, completedDays: newCompletedDays})
  
  let newTask = {...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays, longestStreak: longestStreak, currentStreak: currentStreak, streaks: streaks}

  console.log(newTask)

  handleTaskChange({...newTask})
}

export const missTask = (currentDateStr, currentTask, currentYear, currentMonth, dayNum, handleTaskChange) => {

  const newCompletedDays = {...currentTask.completedDays}
  delete newCompletedDays[currentDateStr]

  const newMissedDays = {...currentTask.missedDays, [currentDateStr]: new Date(currentYear, currentMonth, dayNum).toString()}

  const {longestStreak, currentStreak, streaks} = checkStreaks({...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays})
  
  let newTask = {...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays, longestStreak: longestStreak, currentStreak: currentStreak, streaks: streaks}

  console.log(newTask)
  handleTaskChange({...newTask})
}

export const skipTask = (currentDateStr, currentTask, currentYear, currentMonth, dayNum, handleTaskChange) => {
  const newCompletedDays = {...currentTask.completedDays}
  delete newCompletedDays[currentDateStr]

  const newMissedDays = {...currentTask.missedDays}
  delete newMissedDays[currentDateStr]

  const {longestStreak, currentStreak, streaks} = checkStreaks({...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays})
  
  let newTask = {...currentTask, missedDays: newMissedDays, completedDays: newCompletedDays, longestStreak: longestStreak, currentStreak: currentStreak, streaks: streaks}

  console.log(newTask)
  handleTaskChange({...newTask})
}

export const dateDiffInDays = (a, b) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const daysMissingInBetween = (newTask, startDate, endDate) => {

  console.log(`Days missing? ${startDate} - ${endDate}`)

  const startDateObj = new Date(startDate)
  startDateObj.setDate(startDateObj.getDate() + 1)

  const endDateObj = new Date(endDate)
  endDateObj.setDate(endDateObj.getDate() + 1)

  const numOfDays = dateDiffInDays(startDateObj, endDateObj)

  let currDate = startDate

  for (let i = 1; i < numOfDays + 1; i++) {
    console.log(Object.keys(newTask.missedDays))
    console.log(currDate)

    if (Object.keys(newTask.missedDays).includes(currDate)) {
      console.log(`${currDate} is missing`)
      return true
    }

    const dayAfter = new Date(currDate)
    dayAfter.setDate(dayAfter.getDate() + 1)
    currDate = dayAfter.toISOString().split('T')[0]
  }

  return false
}

export const checkStreaks = (newTask) => {
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

export const getCurrentStreak = (newTask, streaks) => {
  const currentDate = new Date().getDate()
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const currentDay = new Date(currentYear, currentMonth, currentDate)
  const dayBefore = new Date(currentDay.toDateString())
  dayBefore.setDate(dayBefore.getDate() - 1)

  let dayBeforeStr = dayBefore.toISOString().split('T')[0]
  let currentDayStr = currentDay.toISOString().split('T')[0]

  if (Object.keys(newTask.missedDays).includes(currentDayStr)) {
    return {num: 0, from: '', to: ''}
  }

  for (let streak of streaks) {
    if (streak.to === dayBeforeStr || streak.to === currentDayStr) {
      return streak
    }
  }

  // if day is not found in current streaks, set it back to 0

  if (!Object.keys(newTask.completedDays).includes(dayBeforeStr)) {
    return {num: 0, from: '', to: ''}
  }
}