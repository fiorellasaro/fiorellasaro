import React, {useEffect,  useRef} from 'react';
import lottie from 'lottie-web';

import {
    MainBannerContainer,
    MainMessageContainer,
    MainImageContainer,
    FlexMainContainer,
    MainArrowButton
} from './styles'

import {
  FlexContainer
} from '../Navbar/Navbar.js'

const MainBanner = (props) => {
  const container = useRef(null);
  const containerArrow = useRef(null);

  useEffect(()=>{
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: 'darkRomb',
        animationData: require('../../Lotties/16932-loader.json'),
      })
      lottie.loadAnimation({
        container: containerArrow.current,
        renderer: 'svg',
        loop: true,
        name: 'arrov-down',
        autoplay: true,
        animationData: require('../../Lotties/arrow-down.json'),
      })
  }, [])

  return (
    <>
      <MainBannerContainer>
  <FlexMainContainer>
          <MainMessageContainer>
            <h1>Hello!, my name is Fiorella and I</h1>
            <p>Design, draw, read tarot and love cats </p>

          </MainMessageContainer>
          <MainImageContainer ref={container}>
          </MainImageContainer>
  </FlexMainContainer>
  <MainArrowButton ref={containerArrow}></MainArrowButton>
      </MainBannerContainer>
    </>
  )
}

export default MainBanner