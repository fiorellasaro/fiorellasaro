import React from 'react'

import {
    MainBannerContainer,
    MainMessageContainer,
    MainImageContainer,
    MainContainer,
} from './styles'

import {
  FlexContainer
} from '../Navbar/Navbar.js'

const MainBanner = (props) => {
  return (
    <>
      <MainBannerContainer>
      <FlexContainer mobile>
         <MainMessageContainer>
            <h1>Hello!, I'm a creative unicorn</h1>
            <p>Miel, guitarra pantalla negra pildora en la cama sábana de chocolate</p>
            <button>WORK</button>
          </MainMessageContainer>
          <MainImageContainer></MainImageContainer>
      </FlexContainer>

      </MainBannerContainer>
    </>
  )
}

export default MainBanner