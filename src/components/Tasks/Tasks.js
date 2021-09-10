import styled from 'styled-components'
import Task from './Task'
import AddTaskButton from './AddTaskButton'

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;
`

const Tasks = ({ chosenColor, showSettings, toggleModal }) => {

  const sampleTask = {
    title: 'ADD A TASK'
  }

  return (
    <TasksContainer>
      <Task iconClassName="fas fa-star-and-crescent" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-bible" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-star-and-crescent" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-bible" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-star-and-crescent" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-bible" chosenColor={chosenColor} showSettings={showSettings}/>

      <AddTaskButton taskObject={sampleTask} iconClassName="fas fa-plus" chosenColor={chosenColor} toggleModal={toggleModal}/>

    </TasksContainer>
  )
}

export default Tasks;