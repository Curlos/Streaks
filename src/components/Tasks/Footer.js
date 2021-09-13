import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const presetColors = ['#CC092F', '#BF2F38','#008853', '#1D8CAB', '#1061AC', '#046AB4', '#006BB6', '#41B6E6', '#DB3EB1', '#FDB827', '#F59814', '#F48328', '#542583', '#23375B', '#00D95A']

const FooterContainer = styled.div`
  background-color: ${props => {
    console.log(props)
    return (
      props.footerColor
    )
  }};
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

const DisplayElem = styled.span`
  display: ${props => props.display};
`


const Footer = ({ handlePickColor, chosenColor, toggleShowSettings }) => {

  const [display, setDisplay] = useState('none')
  const [footerColor, setFooterColor] = useState(chosenColor)

  useEffect(() => {
    setFooterColor(chosenColor)
  }, [chosenColor])

  const showFooter = () => {
    console.log('Showing footer')
    toggleShowSettings()
    setDisplay('inline')
  }

  const closeFooter = () => {
    console.log('Closing footer')
    toggleShowSettings()
    setDisplay('none')
  }

  console.log(footerColor)

  return (
    <FooterContainer footerColor={footerColor} display={display}>
      <FooterIcons>
        <FooterContainerLeft>
          <DisplayElem display={display}>
            <FooterIcon onClick={closeFooter}>
              <i class="fas fa-times"></i>
            </FooterIcon>
          </DisplayElem>

          <FooterIcon onClick={showFooter}>
            <i class="fas fa-cog"></i>
          </FooterIcon>
        </FooterContainerLeft>

        <DisplayElem display={display}>
          <FooterContainerRight>
            {presetColors.map((color) => <FooterColorCircle key={color} color={color} onClick={handlePickColor}/>)}
          </FooterContainerRight>
        </DisplayElem>
      </FooterIcons>
    </FooterContainer>
  )
}

export default Footer;