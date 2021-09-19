import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import HeaderIcon from '../HelperComponents/HeaderIcon'
import FooterIcon from '../HelperComponents/FooterIcon'
import styled from 'styled-components'

const ListContainer = styled.div`
  width: ;
  height: 96%;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const FooterIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const FooterClose = styled.div`
  float: right;
`

const CenteredElem = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const CompletionCharts = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  margin: 0;
  padding; 0px;
  margin-right: 0px;
`

const StatsScreen = ({ toggleModal, tasksObj }) => {


  const { id } = useParams()

  console.log(id)

  const [chosenId, setChosenId] = useState(id)
  const currentTask = tasksObj[chosenId]

  const handleClose = () => {
    toggleModal()
  }

  console.log(chosenId)

  const getLongestStreak = () => {
    return currentTask.longestStreak.num
  }

  const getAllTimePercentage = () => {

    const completedDaysLen = Object.keys(currentTask.completedDays).length
    const missedDaysLen = Object.keys(currentTask.missedDays).length
    const totalDaysLen = completedDaysLen + missedDaysLen

    return ((completedDaysLen / totalDaysLen) * 100).toFixed(1)
  }

  const getCompletions = () => {
    return Object.keys(currentTask.completedDays).length
  }

  const getMisses = () => {
    return Object.keys(currentTask.missedDays).length
  }

  const getCompletionRates = () => {
    const allDates = {...currentTask.completedDays, ...currentTask.missedDays}
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

      if (Object.keys(currentTask.completedDays).includes(date)) {
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

  const getCompletionRateOfSpecificDays = () => {
    const {completionOnSpecifcDays} = getCompletionRates()
    const completionRateOnSpecificDays = {}

    Object.entries(completionOnSpecifcDays).forEach((arr) => {
      const day = arr[0]
      const completions = arr[1]

      let completedDays = 0
      let totalDays = completions.length

      completions.forEach((completed) => {
        completedDays += completed ? 1 : 0
      })

      const completionRate = ((completedDays / totalDays) * 100).toFixed(1)

      completionRateOnSpecificDays[day] = {
        day,
        dayOneLetter: day[0],
        completionRate,
        completedDays,
        totalDays,
      }
    })

    return completionRateOnSpecificDays
  }

  const renderCompletionRateLineChart = () => {

    const { completionRateOverTime } = getCompletionRates()

    // Line chart for completion percentage over time
    return (

      <ResponsiveContainer width="100%" height="40%">
        <LineChart margin={{ top: 5, left: 5, right: 5, bottom: 5 }} data={completionRateOverTime}>
          <Line type="monotone" dataKey="completionRate" stroke={currentTask.color.color} strokeWidth={4} dot={false}/>
          <Tooltip cursor={{fill: 'transparent'}} />
          <XAxis dataKey="date" />
          <YAxis width={40}/>
        </LineChart>
      </ResponsiveContainer>
    )
  };

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p className="label">{`${label} : ${payload[0].value}`}</p>
  //         <p className="intro">{getIntroOfPage(label)}</p>
  //         <p className="desc">Anything you want can be displayed here.</p>
  //       </div>
  //     );
  //   }
  
  //   return null;
  // };

  const CompletionRateOverDays = () => {

    const completionRateOfSpecificDays = getCompletionRateOfSpecificDays()
    const data = Object.values(completionRateOfSpecificDays)

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, left: 5, right: 5, bottom: 5 }}
        >
          <XAxis dataKey="dayOneLetter" />
          <YAxis width={40}/>
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="completionRate" fill={currentTask.color.color} radius={[20, 20, 20, 20]}/>
        </BarChart>
      </ResponsiveContainer>
    )
  }

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
        {renderCompletionRateLineChart()}
      </LineChartContainer>

      <ListBorder color={currentTask.color.color}/>

      <CenteredElem>
        Completions
      </CenteredElem>

      <CompletionCharts>
        <CompletionRateOverDays />
        <CompletionRateOverDays />
      </CompletionCharts>



      <FooterContainer>

        <FooterIcons>
          <span onClick={() => setChosenId(id)}>
            <Link to={`/confirm/edit/stats/all`}>
              <FooterIcon currentTask={currentTask} footerType={'allTasks'}/>
            </Link>
          </span>
          
          {Object.keys(tasksObj).map((id) => {
            
            return (
              <span onClick={() => setChosenId(id)}>
                <Link to={`/confirm/edit/stats/${id}`}>
                  <FooterIcon currentTask={tasksObj[id]} chosenId={currentTask.id}/>
                </Link>
              </span>
            )
          })}
        </FooterIcons>
      </FooterContainer>

      <FooterClose>
        <Link to="/">
          <FooterIcon handleClick={handleClose} footerType={'close'}/>
        </Link>
      </FooterClose>

      
    </ListContainer>
  )
}

export default StatsScreen;