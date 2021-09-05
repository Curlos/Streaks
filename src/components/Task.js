import styled, { css, ThemeProvider } from 'styled-components'

// Styled components to act as parent to children
const TaskContainer = styled.span`
  display: ${props => props.theme.display};
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
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

const TaskNameLarge = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  width: 200px;
`

const TaskNameForm = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: normal;
  margin: 20px;
  width: 200px;
`

const TaskNameArrow = styled.span`
  margin: 20px;
  float: right;
`


// Themes to be used depending on the type of the task and the size of the screen
const smallTaskTheme = {
  "height": "60px",
  "width": "60px",
  "border": "none",
  "background-color": "rgb(99, 99, 99)",
  "padding": "0px",
  "margin": "20px",
}

const smallTaskFormTheme = {
  "height": "60px",
  "width": "60px",
  "border": "none",
  "background-color": "rgb(99, 99, 99)",
  "display": "flex",
  "padding": "10px",
  "margin": "0",
}

const largeTaskTheme = {
  "height": "200px",
  "width": "200px",
  "border": "15px solid gray",
  "background-color": "none",
  "display": "flex"
}

const getTheme = (theme) => {

  switch(theme) {
    case 'small':
      return smallTaskTheme
    case 'smallForm':
      return smallTaskFormTheme
    case 'large':
      return largeTaskTheme
    default:
      return largeTaskTheme
  }
}

const Task = ({ name, icon, taskSize, clickHandler, theme, type }) => {

  
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <TaskContainer onClick={clickHandler}>
        <TaskCircle>
          <span className="taskIcon">{icon}</span>
        </TaskCircle>
        {type === 'form' ? <TaskNameForm>{name}</TaskNameForm> : <TaskNameLarge>{name}</TaskNameLarge>}
        
        {type === 'form' ? <TaskNameArrow>
          <i value="arrow" className="fas fa-greater-than fa-2x"></i>
        </TaskNameArrow> : null}
      </TaskContainer>
    </ThemeProvider>
  )
}

export default Task;