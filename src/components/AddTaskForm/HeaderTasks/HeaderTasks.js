import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderTask from './HeaderTask'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`


const HeaderTasks = ({ clickHandler, selectedTaskType }) => {

  const allHeaderTasks = [
    {link: '/', iconClassName: "fas fa-check"},
    {link: '/health-task', iconClassName: "fas fa-heart"},
    {link: '/eat-task', iconClassName: "fas fa-utensils"},
    {link: '/timed-task', iconClassName: "far fa-clock"},
    {link: '/negative-task', iconClassName: "fas fa-ban"},
  ]

  return (
    <HeaderContainer>
      {allHeaderTasks.map((headerTask, i) => {
        
        return (
          <Link to={headerTask.link} key={i}>
            <HeaderTask iconClassName={headerTask.iconClassName} clickHandler={clickHandler} />
           </Link>
        )
      })}
      
    </HeaderContainer>
  )
}

export default HeaderTasks;