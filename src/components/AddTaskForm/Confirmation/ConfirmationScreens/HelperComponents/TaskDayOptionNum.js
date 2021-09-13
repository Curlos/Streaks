import React, { useState } from 'react'
import styled from 'styled-components'

const DaysContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => (props.checked === true ? props.color : 'gray')};
  opacity: ${props => props.checked === true ? '1': '0.50'};
  width: 50px;
  height: 50px;
  margin: 10px;
`

const DayName = styled.span`
  font-size: 1.33em;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const getArraySequence = (end, start=1) => {
  return [...Array(end + 1).keys()].slice(start)
}

const TaskDayOptionNum = ({ chosenColor, handleClick }) => {
  const [selectedNum, setSelectedNum] = useState(7)

  const changeSelectedDay = (e) => {
    

    if (e.target.value) {
      setSelectedNum(Number(e.target.value))
    } else {
      setSelectedNum(Number(e.target.textContent))
    }

    console.log(e.target.value || e.target.textContent)

    handleClick(e)
  }

  return (
    <DaysContainer>
      {getArraySequence(7).map((num) => {

        return (
          <Day key={num} color={chosenColor} value={num} checked={num === selectedNum} onClick={changeSelectedDay}>
            <DayName>{num}</DayName>
          </Day>
        )
      })}
    </DaysContainer>
  )
}

export default TaskDayOptionNum;