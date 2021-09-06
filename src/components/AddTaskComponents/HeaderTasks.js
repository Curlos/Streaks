import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Task from '../Task'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderTasks = ({ clickHandler, selectedTaskType }) => {



  return (
    <HeaderContainer>
      <Task name="" icon={<i value="customTask" className="fas fa-check fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      <Task name="" icon={<i value="healthTask" className="fas fa-heart fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      <Task name="" icon={<i value="eatTask" className="fas fa-utensils fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      <Task name="" icon={<i value="timedTask" className="far fa-clock fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
      <Task name="" icon={<i value="negativeTask" className="fas fa-ban fa-2x"></i>} taskSize="addSmallTask" clickHandler={clickHandler} theme="small" selectedTaskType={selectedTaskType}/>
    </HeaderContainer>
  )
}

export default HeaderTasks;