import React, { useState } from 'react'
import styled from 'styled-components'

const presetColors = ['#CC092F', '#BF2F38','#008853', '#1D8CAB', '#1061AC', '#046AB4', '#006BB6', '#FDB827', '#F59814', '#F48328', '#542583', '#23375B', '#00D95A']

const FooterContainer = styled.div`
  background-color: #00D95A;
  border-radius: 10px;
`

const FooterContainerLeft = styled(FooterContainer)`
  margin-left: 10px;
  padding: 10px;
  float: left;
`

const FooterContainerRight = styled(FooterContainer)`
  display: flex;
  margin-right: 10px;
  padding: 10px;
  float: right;
`

const FooterIcons = styled.div`
  font-size: 1.2em;
`

const FooterIcon = styled.span`
  font-size: 2.5em;
  margin: 20px;
`

const FooterColorCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
  border: 5px solid white;
  border-radius: 50%;
  margin: 5px;
`


const Footer = ({ chooseColor }) => {

  const [showSettings, setShowSettings] = useState(false)

  const showFooter = () => {
    console.log('Showing footer')
    setShowSettings(true)
  }

  const closeFooter = () => {
    console.log('Closing footer')
    setShowSettings(false)
  }

  return (
    <FooterContainer>
      <FooterIcons>
        <FooterContainerLeft>
          <FooterIcon onClick={closeFooter}>
            <i class="fas fa-times"></i>
          </FooterIcon>

          <FooterIcon onClick={showFooter}>
            <i class="fas fa-cog"></i>
          </FooterIcon>
        </FooterContainerLeft>

        <FooterContainerRight>
          {presetColors.map((color) => <FooterColorCircle color={color} onClick={chooseColor}/>)}
        </FooterContainerRight>
      </FooterIcons>
    </FooterContainer>
  )
}

export default Footer;