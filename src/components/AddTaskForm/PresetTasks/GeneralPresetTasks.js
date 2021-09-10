
import ListElemWithIcon from '../ListElem/ListElemWithIcon' 
import { CreateTaskHeader } from './StyledPresetTask'
import { Link } from 'react-router-dom'

const GeneralPresetTasks = ({ currentTask, handleTaskChange, automaticColor }) => {

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
            <ListElemWithIcon title={presetTask.title} iconClassName={presetTask.iconClassName} currentTask={currentTask} handleTaskChange={handleTaskChange} automaticColor={automaticColor}/>
        </Link>
        )
      })}
    </div>
  )
}

export default GeneralPresetTasks;