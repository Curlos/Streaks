import styled, { css, ThemeProvider } from 'styled-components'

const TaskContainer = styled.span`
  margin: 20px;
`

const TaskCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.width};
  width: ${props => props.theme.height};
  border: ${props => props.theme.border};
  background-color: ${props => props.theme['background-color']};
  border-radius: 50%;
`

const TaskName = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  width: 200px;
`



const smallTaskTheme = {
  "height": "60px",
  "width": "60px",
  "border": "none",
  "background-color": "rgb(99, 99, 99)"
}

const largeTaskTheme = {
  "height": "200px",
  "width": "200px",
  "border": "15px solid gray",
  "background-color": "none"
}

const Task = ({ name, icon, taskSize, clickHandler, theme }) => {
  
  return (
    <TaskContainer onClick={clickHandler}>
      <ThemeProvider theme={theme === 'small' ? smallTaskTheme : largeTaskTheme}>
        <TaskCircle>
          <span className="taskIcon">{icon}</span>
        </TaskCircle>
        <TaskName>{name}</TaskName>
      </ThemeProvider>
    </TaskContainer>
  )
}

export default Task;