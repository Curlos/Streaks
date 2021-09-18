import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LineChart, Line } from 'recharts';
import HeaderIcon from '../HelperComponents/HeaderIcon'
import styled from 'styled-components'

const ListContainer = styled.div`
  padding: 15px;
`

const ListTitle = styled.span`
  color: ${props => props.color};
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
  justify-content: center;
  margin: 15px;
`

const ListBorder = styled.div`
  border-bottom: 2px solid ${props => props.color};
  padding-top: 15px;
  margin-bottom: 15px;
  filter: brightness(0.5);
`

const StatBox = styled.div`
  text-align: center;
  width: 200px;
`

const StatBoxes = styled.div`
  display: flex;
  justify-content: space-around;
`

const StatNum = styled.div`
  font-size: 30px;
`

const StatDesc = styled.div`
  font-size: 15px;
  color: gray;
`

const LineChartContainer = styled.span`
  
`

const FooterContainer = styled.div`
  float: right;
`

const StatsScreen = ({ currentTask, handleTaskChange, handleEdit, fromConfirm, toggleModal }) => {

  console.log(currentTask)

  const { id } = useParams()

  const handleClose = () => {
    toggleModal()
  }

  const getLinkURL = () => {
    if (fromConfirm) {
      return `/confirm/edit/${id}`
    }

    return '/'
  }

  const getLongestStreak = () => {
    return currentTask.longestStreak.num
  }

  const getAllTimePercentage = () => {

    const completedDaysLen = Object.keys(currentTask.completedDays).length
    const missedDaysLen = Object.keys(currentTask.missedDays).length
    const totalDaysLen = completedDaysLen + missedDaysLen

    console.log(`${completedDaysLen} completed days`)
    console.log(`${missedDaysLen} missed days`)
    console.log(`${totalDaysLen} total days`)

    return ((completedDaysLen / totalDaysLen) * 100).toFixed(1)
  }

  const getCompletions = () => {
    return Object.keys(currentTask.completedDays).length
  }

  const getMisses = () => {
    return Object.keys(currentTask.missedDays).length
  }

  const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page A', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 700, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 600, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 1200, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 100, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 500, pv: 2400, amt: 2400}]

  const renderLineChart = () => {

    // Line chart for completion percentage over time
    return (
      <LineChart width={600} height={400} data={getCompletionRateOverTime()}>
        <Line type="monotone" dataKey="completionRate" stroke="#8884d8" />
      </LineChart>
    )
  };


  const getCompletionRateOverTime = () => {
    const allDates = {...currentTask.completedDays, ...currentTask.missedDays}
    const orderedDates = Object.fromEntries(Object.entries(allDates).sort())

    let completionRate = 0
    let completedDays = 0
    const completionRateOverTime = []

    const completionRateOverSpecificDays = {
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

      if (Object.keys(currentTask.completedDays).includes(date)) {
        completedDays += 1
      }

      completionRate = completedDays / (dayCount + 1)

      completionRateOverTime.push({
        dayNum: dayCount + 1,
        date: date,
        completionRate: (completionRate * 100).toFixed(1),
      })
    })

    console.log(completionRateOverTime)

    return completionRateOverTime
  }

  getCompletionRateOverTime()

  let renderChart = false

  return (
    <ListContainer>
      <ListIconHeader>
        <HeaderIcon currentTask={currentTask} />
      </ListIconHeader>

      <ListTitleHeader color={currentTask.color.color}>
        <ListTitle color={currentTask.color.color}>{currentTask.title}</ListTitle>
      </ListTitleHeader>

      <ListBorder color={currentTask.color.color}/>

      <StatBoxes>
        <StatBox>
          <StatNum>
            {getLongestStreak()}
          </StatNum>
          
          <StatDesc>
            BEST STREAK
          </StatDesc>
        </StatBox>

        <StatBox>
          <StatNum>
            {getAllTimePercentage()}%
          </StatNum>
          
          <StatDesc>
            ALL TIME
          </StatDesc>
        </StatBox>

        <StatBox>
          <StatNum>
            {getCompletions()}
          </StatNum>
          
          <StatDesc>
            COMPLETIONS
          </StatDesc>
        </StatBox>
      </StatBoxes>

      <ListBorder color={currentTask.color.color}/>

      <LineChartContainer>
        {renderChart ? renderLineChart() : null}
      </LineChartContainer>


      <FooterContainer>
        <Link to="/">
          <i value="start" className="fas fa-times fa-2x" onClick={toggleModal}></i>
        </Link>
      </FooterContainer>

      
    </ListContainer>
  )
}

export default StatsScreen;