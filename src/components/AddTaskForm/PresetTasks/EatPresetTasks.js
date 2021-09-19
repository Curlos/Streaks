import ListElemWithIcon from '../ListElem/ListElemWithIcon' 
import { CreateTaskHeader } from './StyledPresetTask'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptyPresetTask = styled.div`
  border-radius: 0 0 20px 20px;
  background-color: #202020;
  height: 30px;
`

const EatPresetTasks = ({ currentTask, handleTaskChange, chosenColor }) => {

  const presetTasks = [
    {title: "Drink Water", iconClassName: "fas fa-tint"}, 
    {title: "Energy Deficit", iconClassName: "fas fa-fire"}, 
    {title: "Decrease Sugar Intake", iconClassName: "fas fa-utensil-spoon"}, 
    {title: "Decrease Caffeine Intake", iconClassName: "fas fa-coffee"},
    {title: "Increase Protein Intake", iconClassName: "fas fa-egg"}, 
    {title: "Decrease Cholesterol Intake", iconClassName: "fas fa-egg"}
  ]

  return (
    <div>
      <CreateTaskHeader>CREATE YOUR OWN:</CreateTaskHeader>

      {presetTasks.map((presetTask, i) => {

        return (
          <Link to="/confirm" key={i}>
            <ListElemWithIcon title={presetTask.title} iconClassName={presetTask.iconClassName} currentTask={currentTask} handleTaskChange={handleTaskChange} chosenColor={chosenColor}/>
          </Link>
        )
      })}

      <EmptyPresetTask></EmptyPresetTask>
    </div>
  )
}

export default EatPresetTasks;