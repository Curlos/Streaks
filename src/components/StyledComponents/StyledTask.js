import styled, { ThemeProvider } from 'styled-components'

// Styled components to act as parent to children
export const TaskContainer = styled.span`
  display: ${props => props.theme.display};
  flex-direction: ${props => props.theme['flex-direction']};
  align-items: ${props => props.theme['align-items']};;
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  width: 100%;
`

export const TaskCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.width};
  width: ${props => props.theme.height};
  border: ${props => props.theme.border};
  background-color: ${props => props.theme['background-color']};
  border-radius: 50%;
`

export const SelectedTaskCircle = styled(TaskCircle)`
  background-color: red;
`

export const TaskNameLarge = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-left: 0px;
  text-align: center;
  width: 200px;
`

export const TaskNameForm = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: normal;
  width: 350px;
  margin: 20px;
`

export const TaskContainerRight = styled.span`
  margin: 20px;
  float: right;
`

export const PresetIcon = styled.span`
  margin-right: 10px;
`


// Themes to be used depending on the type of the task and the size of the screen
export const smallTaskTheme = {
  "height": "60px",
  "width": "60px",
  "border": "none",
  "background-color": "rgb(99, 99, 99)",
  "padding": "0px",
  "margin": "20px",
}

export const smallTaskFormTheme = {
  "height": "60px",
  "width": "60px",
  "border": "none",
  "background-color": "rgb(99, 99, 99)",
  "display": "flex",
  "padding": "10px",
  "margin": "0",
}

export const mediumTaskFormTheme = {
  "height": "100px",
  "width": "100px",
  "border": "7px solid gray",
  "background-color": "none",
  "display": "flex",
  "flex-direction": "column",
  "align-items": "center",
}

export const largeTaskTheme = {
  "height": "200px",
  "width": "200px",
  "border": "15px solid gray",
  "background-color": "none",
  "display": "flex"
}

export const TaskIconSmall = styled.div`
  font-size: .1.33em;
`

export const TaskIconMedium = styled.div`
  font-size: 1.75em;
`

export const TaskIconLarge = styled.div`
  font-size: 2em;
`