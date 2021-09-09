import styled from 'styled-components'
import Task from './Task'

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 40px;
`

const Tasks = () => {

  return (
    <TasksContainer>
      <Task iconClassName="fas fa-star-and-crescent"/>
      <Task iconClassName="fas fa-church"/>
      <Task iconClassName="fas fa-star-and-crescent"/>
      <Task iconClassName="fas fa-star-and-crescent"/>
      <Task iconClassName="fas fa-church"/>
      <Task iconClassName="fas fa-star-and-crescent"/>
      <Task iconClassName="fas fa-church"/>
    </TasksContainer>
  )
}

export default Tasks;