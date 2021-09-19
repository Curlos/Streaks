import React from 'react'
import { Link } from 'react-router-dom'
// import { LineChart, Line } from 'recharts';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAllTimePercentage } from '../Helpers/statsModules';
import HeaderIcon from '../HelperComponents/HeaderIcon'
import FooterIcon from '../HelperComponents/FooterIcon'
import styled from 'styled-components'

const ListContainer = styled.div`
  width: ;
  height: 96%;
  padding: 15px;
`

const ListIconHeader = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  padding-bottom: 50px;
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

const AllStatsScreen = ({ toggleModal, tasksObj }) => {

  const handleClose = () => {
    toggleModal()
  }

  const getLongestStreak = () => {
    const longestStreakObj = Object.values(tasksObj).reduce(function(prev, current) {
      console.log(prev.longestStreak.num)
      return (prev.longestStreak.num > current.longestStreak.num) ? prev : current
    })

    console.log(Object.values(tasksObj))

    console.log(longestStreakObj)

    return longestStreakObj.longestStreak.num
  }

  // const getAllDatesTogether = () => {
  //   Object.keys(tasksObj).forEach((id) => {
  //     const task = tasksObj[id]

  //     console.log({...task.completedDays, ...task.missedDays})
  //   })
  // }

  const getAllTasksAllTimeCompletion = () => {
    let completedDays = 0
    let totalDays = 0
    // const allDates = getAllDatesTogether()
    // const orderedDates = Object.fromEntries(Object.entries(allDates).sort())

    console.log(tasksObj)

    Object.keys(tasksObj).forEach((id) => {
      const task = tasksObj[id]

      const { completedDaysLen, totalDaysLen } = getAllTimePercentage(task)

      completedDays += completedDaysLen
      totalDays += totalDaysLen


    })

    const allTimePercentageCompletion = ((completedDays / totalDays) * 100).toFixed(1)

    return {allTimePercentageCompletion, completedDays, totalDays}
  }

  // const renderCompletionRateLineChart = () => {

  //   const { completionRateOverTime } = getCompletionRates()

  //   // Line chart for completion percentage over time
  //   return (

  //     <ResponsiveContainer width="100%" height="40%">
  //       <LineChart margin={{ top: 5, left: 5, right: 5, bottom: 5 }} data={completionRateOverTime}>
  //         <Line type="monotone" dataKey="completionRate" stroke={'gray'} strokeWidth={4} dot={false}/>
  //         <Tooltip cursor={{fill: 'transparent'}} />
  //         <XAxis dataKey="date" />
  //         <YAxis width={40}/>
  //       </LineChart>
  //     </ResponsiveContainer>
  //   )
  // };

  

  

  return (
    <ListContainer>
      <ListIconHeader>
        {Object.keys(tasksObj).map((id) => {
            const currentTask = tasksObj[id]

            return (
              <HeaderIcon key={id} currentTask={currentTask} />
            )
        })}
      </ListIconHeader>

      <ListBorder color={'gray'}/>

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
            {getAllTasksAllTimeCompletion().allTimePercentageCompletion}%
          </StatNum>
          
          <StatDesc>
            ALL TIME
          </StatDesc>
        </StatBox>

        <StatBox>
          <StatNum>
            {getAllTasksAllTimeCompletion().completedDays}
          </StatNum>
          
          <StatDesc>
            COMPLETIONS
          </StatDesc>
        </StatBox>
      </StatBoxes>

      <ListBorder color={'gray'}/>


      <ListBorder color={'gray'}/>

      <CenteredElem>
        Completions
      </CenteredElem>

      <CompletionCharts>
        
      </CompletionCharts>



      <FooterContainer>

        <FooterIcons>
          <span>
            <Link to={`/confirm/edit/stats/all`}>
              <FooterIcon footerType={'allTasks'}/>
            </Link>
          </span>
          
          {Object.keys(tasksObj).map((id) => {
            
            return (
              <span key={id}>
                <Link to={`/confirm/edit/stats/${id}`}>
                  <FooterIcon currentTask={tasksObj[id]}/>
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

export default AllStatsScreen;