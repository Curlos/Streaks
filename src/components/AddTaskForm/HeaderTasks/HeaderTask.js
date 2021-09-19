import React, { useState } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 60
const taskContainerHeight = 60

const TaskContainer = styled.span`

`
// ${props => props.colors.backgroundColor}
const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.colors.color || 'gray'};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;

`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const HeaderTask = ({ headerObj, chosenColor, clickHandler }) => {

  const {link, iconClassName } = headerObj

  const [colors, setColors] = useState({
    color: 'gray',
    backgroundColor: "none",
    chosenColor
  })

  return (
  
      <div>
        <TaskContainer onClick={clickHandler}>
            <TaskIconContainer colors={colors}>
            <TaskIcon colors={colors}>
              <i className={iconClassName}></i>
            </TaskIcon>

          </TaskIconContainer>
          
        </TaskContainer>
      </div>
  )
}

export default HeaderTask;