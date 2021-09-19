import ListElemWithIcon from '../ListElem/ListElemWithIcon' 
import { CreateTaskHeader } from './StyledPresetTask'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptyPresetTask = styled.div`
  border-radius: 0 0 20px 20px;
  background-color: #202020;
  height: 30px;
`

const TimedPresetTasks = ({ currentTask, handleTaskChange, chosenColor }) => {

  const presetTasks = [
    {title: "Read for 10 Minutes", iconClassName: "fas fa-book"}, 
    {title: "Learn a Language", iconClassName: "fas fa-language"}, 
    {title: "Practice Instrument", iconClassName: "fas fa-guitar"}, 
    {title: "Tidy Up", iconClassName: "fas fa-broom"},
    {title: "Pomodoro", iconClassName: "fas fa-hourglass-start"}, 
    {title: "Decrease Screen Time", iconClassName: "fas fa-mobile-alt"},
    {title: "Mindful Minutes", iconClassName: "fas fa-wind"},
    {title: "Brush Your Teeth", iconClassName: "fas fa-tooth"}
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

export default TimedPresetTasks;