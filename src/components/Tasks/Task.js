import styled from 'styled-components'

const taskContainerWidth = 250
const taskContainerHeight = 250

const TaskIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid gray;
  border-radius: 50%;
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;
`

const TaskIcon = styled.div`
  font-size: ${taskContainerWidth / 2}px;
`

const TaskName = styled.div`
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Task = ({ iconClassName }) => {

  const toggleComplete = () => {
    console.log('Prayed to god today!')
  }

  console.log(iconClassName)
  return (
    <div onClick={toggleComplete}>
      <TaskIconContainer>
        <TaskIcon>
          <i className={iconClassName}></i>
        </TaskIcon>
      </TaskIconContainer>
      
      <TaskName>pray to god</TaskName>
    </div>
  )
}

export default Task;