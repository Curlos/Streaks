import styled from 'styled-components'
import Task from './Task'
import AddTaskButton from './AddTaskButton'

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;
`

const Tasks = ({ chosenColor, showSettings, toggleModal, taskObjs, toggleCompleteTask }) => {

  console.log(JSON.stringify(taskObjs))

  const sampleTask = {
    title: 'ADD A TASK'
  }

  return (
    <TasksContainer>
      {Object.keys(taskObjs).map((id) => {
        const task = taskObjs[id]
        console.log(id)

        return (
          <Task iconClassName={task.icon} chosenColor={task.color.color} showSettings={showSettings} taskObj={task} toggleCompleteTask={toggleCompleteTask}/>
        )
      })}

      <AddTaskButton taskObject={sampleTask} iconClassName="fas fa-plus" chosenColor={chosenColor} toggleModal={toggleModal}/>

    </TasksContainer>
  )
}

export default Tasks;