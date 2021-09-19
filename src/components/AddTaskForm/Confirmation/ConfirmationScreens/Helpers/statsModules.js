export const getAllTimePercentage = (task) => {

  const completedDaysLen = Object.keys(task.completedDays).length
  const missedDaysLen = Object.keys(task.missedDays).length
  const totalDaysLen = completedDaysLen + missedDaysLen
  const allTimePercentageCompletion = ((completedDaysLen / totalDaysLen) * 100).toFixed(1)

  const allTimePercentageMissed = ((missedDaysLen / totalDaysLen) * 100).toFixed(1)

  return {completedDaysLen, missedDaysLen, totalDaysLen, allTimePercentageCompletion, allTimePercentageMissed}
}