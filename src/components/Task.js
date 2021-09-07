import styled, { css, ThemeProvider } from 'styled-components'
import { TaskContainer, TaskCircle, SelectedTaskCircle, TaskNameLarge, TaskNameForm, TaskContainerRight, PresetIcon, smallTaskTheme, smallTaskFormTheme, mediumTaskFormTheme, largeTaskTheme, TaskIconSmall, TaskIconMedium, TaskIconLarge} from './StyledComponents/StyledTask'


const getTheme = (theme) => {

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

{type === 'form' || type === 'plusMinusForm' ? <TaskNameForm><PresetIcon>{presetIcon}</PresetIcon>{name}</TaskNameForm> : <TaskNameLarge>{name}</TaskNameLarge>}
        

        {TaskRightIcon !== null ? TaskRightIcon : null}

      </TaskContainer>
    </ThemeProvider>
  )
}

export default Task;