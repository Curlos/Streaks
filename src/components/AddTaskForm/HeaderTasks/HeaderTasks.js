import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderTask from './HeaderTask'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`


const HeaderTasks = ({ chosenColor, clickHandler }) => {

  const allHeaderTasks = [
    {link: '/', iconClassName: "fas fa-check"},
    {link: '/health-task', iconClassName: "fas fa-heart"},
    {link: '/eat-task', iconClassName: "fas fa-utensils"},
    {link: '/timed-task', iconClassName: "far fa-clock"},
    {link: '/negative-task', iconClassName: "fas fa-ban"},
  ]

  return (
    <HeaderContainer>
      {allHeaderTasks.map((headerObj, i) => {
        
        return (
          <Link to={headerObj.link} key={i}>
            <HeaderTask headerObj={headerObj} chosenColor={chosenColor} clickHandler={clickHandler} />
           </Link>
        )
      })}
      
    </HeaderContainer>
  )
}

export default HeaderTasks;