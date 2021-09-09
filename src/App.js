import React, { useState } from 'react'
import styled from 'styled-components'
import Tasks from './components/Tasks/Tasks'
import Footer from './components/Tasks/Footer'
import './style.css';

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 30px);
`

const LoginButton = styled.span`
  float:right
`

const FooterBottom = styled.span`
  margin-top: auto;
`

const App = () => {

  const [automaticColor, setAutomaticColor] = useState('#BF2F38')
  const [showSettings, setShowSettings] = useState(false)

  const handlePickColor = (e) => {
    const chosenColor = e.target.attributes.color.value
    setAutomaticColor(chosenColor)
    console.log(`NEw color: ${chosenColor}`)
  }

  const toggleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  return (
    <AppBody>
      <div>
        <span>Streaks App</span>
        <LoginButton>
          <i class="fas fa-user"></i>
        </LoginButton>
      </div>
      <Tasks chosenColor={automaticColor} showSettings={showSettings}/>
      <FooterBottom>
        <Footer handlePickColor={handlePickColor} chosenColor={automaticColor} toggleShowSettings={toggleShowSettings}/>
      </FooterBottom>
    </AppBody>
  );
}

export default App;
