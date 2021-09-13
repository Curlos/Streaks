import ListElemWithIcon from '../ListElem/ListElemWithIcon'
import styled from 'styled-components'
import { CreateTaskHeader } from './StyledPresetTask'
import { Link } from 'react-router-dom'

const EmptyPresetTask = styled.div`
  border-radius: 0 0 20px 20px;
  background-color: #202020;
  height: 30px;
`

const GeneralPresetTasks = ({ currentTask, handleTaskChange, chosenColor }) => {

  const presetTasks = [
    {title: "Eat a Healthy Meal", iconClassName: "fas fa-carrot"}, 
    {title: "Do Your Homework", iconClassName: "fas fa-highlighter"}, 
    {title: "Walk the Dog", iconClassName: "fas fa-carrot"}, 
    {title: "Drink a Smoothie", iconClassName: "fas fa-blender"}, 
    {title: "Take Vitamins", iconClassName: "fas fa-capsules"}, 
    {title: "Take a Photo", iconClassName: "fas fa-camera"}
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

export default GeneralPresetTasks;