import ListElemWithIcon from '../ListElem/ListElemWithIcon' 
import { CreateTaskHeader } from './StyledPresetTask'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptyPresetTask = styled.div`
  border-radius: 0 0 20px 20px;
  background-color: #202020;
  height: 30px;
`

const HealthPresetTasks = ({ currentTask, handleTaskChange, automaticColor }) => {

  const presetTasks = [
    {title: "Walk or Run", iconClassName: "fas fa-walking"}, 
    {title: "Stand Minutes", iconClassName: "fas fa-shoe-prints"}, 
    {title: "Cycle", iconClassName: "fas fa-biking"}, 
    {title: "Swim", iconClassName: "fas fa-swimmer"},
    {title: "Mindful Minutes", iconClassName: "fas fa-wind"}, 
    {title: "Climb Flights", iconClassName: "fas fa-running"}
  ]

  return (
    <div>
      <CreateTaskHeader>CREATE A HEALTH TASK:</CreateTaskHeader>

      {presetTasks.map((presetTask, i) => {

        return (
          <Link to="/confirm" key={i}>
            <ListElemWithIcon title={presetTask.title} iconClassName={presetTask.iconClassName} currentTask={currentTask} handleTaskChange={handleTaskChange} automaticColor={automaticColor}/>
        </Link>
        )
      })}

      <EmptyPresetTask></EmptyPresetTask>
    </div>
  )
}

export default HealthPresetTasks;