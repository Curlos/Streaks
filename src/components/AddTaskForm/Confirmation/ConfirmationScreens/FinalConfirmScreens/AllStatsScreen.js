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
  justify-content: space-between;
`

const FooterIcons = styled.div`
  display: flex;
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
  }

  

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
          
          
          <StatDesc>
            ALL TIME
          </StatDesc>
        </StatBox>

        <StatBox>
          
          
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
                  <FooterIcon currentTask={tasksObj[id]} chosenId={id}/>
                </Link>
              </span>
            )
          })}
        </FooterIcons>

        

        <Link to="/">
          <FooterIcon handleClick={handleClose} footerType={'close'}/>
        </Link>
      </FooterContainer>

      
    </ListContainer>
  )
}

export default AllStatsScreen;