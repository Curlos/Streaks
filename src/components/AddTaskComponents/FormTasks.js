import React, { useState } from 'react'
import Task from '../Task'

const FormTasks = () => {

  const [selectedTaskType, setSelectedTaskType] = useState('')

  
  const handleClick = (e) => {
    console.log(e)
    console.log('clicked bitch')
  }

  return (
    <div class="formTasks">
      <Task name="" icon={<i className="fas fa-check fa-2x"></i>} taskSize="addSmallTask" onClick={handleClick}/>
      <Task name="" icon={<i className="fas fa-heart fa-2x"></i>} taskSize="addSmallTask" onClick={handleClick}/>
      <Task name="" icon={<i className="fas fa-utensils fa-2x"></i>} taskSize="addSmallTask" onClick={handleClick}/>
      <Task name="" icon={<i className="far fa-clock fa-2x"></i>} taskSize="addSmallTask" onClick={handleClick}/>
      <Task name="" icon={<i className="fas fa-ban fa-2x"></i>} taskSize="addSmallTask" onClick={handleClick}/>
    </div>
  )
}

export default FormTasks;