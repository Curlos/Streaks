import styled from 'styled-components'
import Task from './Task'

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;
`

const Tasks = ({ automaticColor }) => {

  return (
    <TasksContainer>
      <Task iconClassName="fas fa-star-and-crescent" automaticColor={automaticColor}/>
      <Task iconClassName="fas fa-church" automaticColor={automaticColor}/>

    </TasksContainer>
  )
}

export default Tasks;