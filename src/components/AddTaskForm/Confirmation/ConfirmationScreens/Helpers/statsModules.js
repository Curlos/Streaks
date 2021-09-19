export const getAllTimePercentage = (task) => {

  const completedDaysLen = Object.keys(task.completedDays).length
  const missedDaysLen = Object.keys(task.missedDays).length
  const totalDaysLen = completedDaysLen + missedDaysLen
  const allTimePercentageCompletion = ((completedDaysLen / totalDaysLen) * 100).toFixed(1)

  const allTimePercentageMissed = ((missedDaysLen / totalDaysLen) * 100).toFixed(1)

  return {completedDaysLen, missedDaysLen, totalDaysLen, allTimePercentageCompletion, allTimePercentageMissed}
}

export const getCompletionRates = (task) => {
  const allDates = {...task.completedDays, ...task.missedDays}
  const orderedDates = Object.fromEntries(Object.entries(allDates).sort())

  let completionRate = 0
  let completedDays = 0
  const completionRateOverTime = []

  const completionOnSpecifcDays = {
    'Sunday': [],
    'Monday': [],
    'Tuesday': [],
    'Wednesday': [],
    'Thursday': [],
    'Friday': [],
    'Saturday': []
  }

  const completionRateOverHours = {}

  for (let i = 0; i < 24; i++) {
    completionRateOverHours[i] = []
  }

  Object.keys(orderedDates).forEach((date, dayCount) => {

    let completionStatus = true

    if (Object.keys(task.completedDays).includes(date)) {
      completedDays += 1
    } else {
      completionStatus = false
    }

    completionRate = completedDays / (dayCount + 1)

    completionRateOverTime.push({
      dayNum: dayCount + 1,
      date: date,
      completionRate: (completionRate * 100).toFixed(1),
    })

    const dayOfCompletion = Object.keys(completionOnSpecifcDays)[new Date(orderedDates[date]).getDay()]

    completionOnSpecifcDays[dayOfCompletion].push(completionStatus)
  })

  return { 
    completionRateOverTime, 
    completionOnSpecifcDays, 
    completionRateOverHours
  }
}