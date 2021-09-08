import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Task from '../Task'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`


const HeaderTasks = ({ clickHandler, selectedTaskType }) => {

  return (
    <HeaderContainer>
      <Link to="/">
        <Task name="" icon={<i value="customTask" className="fas fa-check fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      </Link>

      <Link to="/health-task">
        <Task name="" icon={<i value="healthTask" className="fas fa-heart fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      </Link>

      <Link to="/eat-task">
        <Task name="" icon={<i value="eatTask" className="fas fa-utensils fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      </Link>

      <Link to="/timed-task">
        <Task name="" icon={<i value="timedTask" className="far fa-clock fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      </Link>

      <Link to="/negative-task">
        <Task name="" icon={<i value="negativeTask" className="fas fa-ban fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      </Link>
      
    </HeaderContainer>
  )
}

export default HeaderTasks;