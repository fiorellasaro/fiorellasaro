import React, {useEffect,  useRef} from 'react';
import lottie from 'lottie-web';

import {
    MainBannerContainer,
    MainMessageContainer,
    MainImageContainer,
    FlexMainContainer,
    MainContainer,
} from './styles'

import {
  FlexContainer
} from '../Navbar/Navbar.js'

const MainBanner = (props) => {
  const container = useRef(null);

  useEffect(()=>{
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../Lotties/16932-loader.json'),
      })
  }, [])

  return (
    <>
      <MainBannerContainer>
  <FlexMainContainer>
  <MainMessageContainer>
            <h1>Hello!, my name is Fiorella and I</h1>
            <p>Design, draw, read tarot, </p>

          </MainMessageContainer>
          <MainImageContainer ref={container}>
          </MainImageContainer>
  </FlexMainContainer>
      </MainBannerContainer>
    </>
  )
}

export default MainBanner