import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Task from '../Task'

const HeaderTasks = styled.div`
  display: flex;
  justify-content: center;
`

const FormTasks = () => {

  const [selectedTaskType, setSelectedTaskType] = useState('')

  
  const handleClick = (e) => {
    const newSelectedTaskType = e.target.attributes[0].nodeValue
    setSelectedTaskType(newSelectedTaskType)
    console.log(newSelectedTaskType)
  }

  return (
    <HeaderTasks>
      <Task name="" icon={<i value="customTask" className="fas fa-check fa-2x"></i>} taskSize="addSmallTask" clickHandler={handleClick} theme="small"/>
      <Task name="" icon={<i value="healthTask" className="fas fa-heart fa-2x"></i>} taskSize="addSmallTask" clickHandler={handleClick} theme="small"/>
      <Task name="" icon={<i value="eatTask" className="fas fa-utensils fa-2x"></i>} taskSize="addSmallTask" clickHandler={handleClick} theme="small"/>
      <Task name="" icon={<i value="timedTask" className="far fa-clock fa-2x"></i>} taskSize="addSmallTask" clickHandler={handleClick} theme="small"/>
      <Task name="" icon={<i value="negativeTask" className="fas fa-ban fa-2x"></i>} taskSize="addSmallTask" clickHandler={handleClick} theme="small"/>
    </HeaderTasks>
  )
}

export default FormTasks;