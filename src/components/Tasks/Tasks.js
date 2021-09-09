import styled from 'styled-components'
import Task from './Task'

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;
`

const Tasks = ({ chosenColor, showSettings }) => {

  return (
    <TasksContainer>
      <Task iconClassName="fas fa-star-and-crescent" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-bible" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-star-and-crescent" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-bible" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-star-and-crescent" chosenColor={chosenColor} showSettings={showSettings}/>
      <Task iconClassName="fas fa-bible" chosenColor={chosenColor} showSettings={showSettings}/>

    </TasksContainer>
  )
}

export default Tasks;