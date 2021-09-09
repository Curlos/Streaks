import React, { useState } from 'react'
import styled from 'styled-components'
import Tasks from './components/Tasks/Tasks'
import Footer from './components/Tasks/Footer'
import './style.css';

const LoginButton = styled.span`
  float:right
`

const App = () => {

  const [automaticColor, setAutomaticColor] = useState('#BF2F38')

  const chooseColor = (e) => {
    const chosenColor = e.target.attributes.color.value
    setAutomaticColor(chosenColor)
  }

  return (
    <div className="App">
      <div>
        <span>Streaks App</span>
        <LoginButton>
          <i class="fas fa-user"></i>
        </LoginButton>
      </div>
      <Tasks automaticColor={automaticColor}/>
      <Footer chooseColor={chooseColor}/>
    </div>
  );
}

export default App;
