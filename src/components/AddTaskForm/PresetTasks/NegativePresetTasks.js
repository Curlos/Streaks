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
    {title: "Don't Smoke", iconClassName: "fas fa-smoking"}, 
    {title: "Don't Swear", iconClassName: "fas fa-frown-open"}, 
    {title: "Don't Slouch", iconClassName: "fas fa-chair"}, 
    {title: "Don't Bite Nails", iconClassName: "fas fa-hand-paper"},
    {title: "Don't Pick Nose", iconClassName: "fas fa-hand-point-up"}, 
    {title: "Don't Drink Alcohol", iconClassName: "fas fa-beer"},
    {title: "Don't Drink Coffee", iconClassName: "fas fa-mug-hot"},
    {title: "Don't Eat Bad Food", iconClassName: "fas fa-pizza-slice"},
    {title: "Decrease Screen Time", iconClassName: "fas fa-mobile-alt"},
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