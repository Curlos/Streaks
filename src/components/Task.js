import styled, { css, ThemeProvider } from 'styled-components'

// Styled components to act as parent to children
const TaskContainer = styled.span`
  display: ${props => props.theme.display};
  flex-direction: ${props => props.theme['flex-direction']};
  align-items: ${props => props.theme['align-items']};;
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  width: 100%;
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

const SelectedTaskCircle = styled(TaskCircle)`
  background-color: red;
`

const TaskNameLarge = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-left: 0px;
  text-align: center;
  width: 200px;
`

const TaskNameForm = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: normal;
  width: 350px;
  margin: 20px;
`

const TaskContainerRight = styled.span`
  
  margin: 20px;
  float: right;
`

const PresetIcon = styled.span`
  margin-right: 10px;
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

const mediumTaskFormTheme = {
  "height": "100px",
  "width": "100px",
  "border": "7px solid gray",
  "background-color": "none",
  "display": "flex",
  "flex-direction": "column",
  "align-items": "center",
}

const largeTaskTheme = {
  "height": "200px",
  "width": "200px",
  "border": "15px solid gray",
  "background-color": "none",
  "display": "flex"
}

const TaskIconSmall = styled.div`
  font-size: .1.33em;
`

const TaskIconMedium = styled.div`
  font-size: 1.75em;
`

const TaskIconLarge = styled.div`
  font-size: 2em;
`


const getTheme = (theme) => {

  console.log(theme)

  switch(theme) {
    case 'small':
      return smallTaskTheme
    case 'smallForm':
      return smallTaskFormTheme
    case 'mediumForm':
      return mediumTaskFormTheme
    case 'large':
      return largeTaskTheme
    default:
      return largeTaskTheme
  }
}

const getTaskType = (type) => {

  console.log(type)

  switch(type) {
    case 'form':
      return (
        <TaskContainerRight>
          <i value="arrow" className="fas fa-greater-than fa-2x"></i>
        </TaskContainerRight>
      )
    case 'plusMinusForm':
      return (
        <TaskContainerRight>
          <TaskCircle>
            <i value="arrow" className="fas fa-minus fa-2x"></i>
          </TaskCircle>
          <TaskCircle>
            <i value="arrow" className="fas fa-plus fa-2x"></i>
          </TaskCircle>
        </TaskContainerRight>
      )
    default:
      return null
  }
}

const getIconSize = (theme) => {

  console.log(`Getting icon size: ${theme}`)

  switch(theme) {
    case 'small':
      return TaskIconSmall
    case 'smallForm':
      return TaskIconSmall
    case 'mediumForm':
      return TaskIconMedium
    case 'large':
      return TaskIconLarge
    default:
      return TaskIconSmall
  }
}

const Task = ({ name, icon, iconSize, taskSize, clickHandler, theme, type, presetIcon, selectedTaskType }) => {

  console.log(name)

  const TaskIcon = getIconSize(theme)
  const TaskRightIcon = getTaskType(type)

  
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <TaskContainer onClick={clickHandler}>
        {selectedTaskType === name ? 
        <SelectedTaskCircle>
          <TaskIcon>{icon}</TaskIcon>
        </SelectedTaskCircle> : 
        <TaskCircle>
          <TaskIcon>{icon}</TaskIcon>
        </TaskCircle>
        }

{type === 'form' || type == 'plusMinusForm' ? <TaskNameForm><PresetIcon>{presetIcon}</PresetIcon>{name}</TaskNameForm> : <TaskNameLarge>{name}</TaskNameLarge>}
        

        {TaskRightIcon !== null ? TaskRightIcon : null}

      </TaskContainer>
    </ThemeProvider>
  )
}

export default Task;