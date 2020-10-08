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

const WorkContainer = (props) => {
  const container = useRef(null);

  useEffect(()=>{
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../Lotties/tarot-card-rotation.json'),
      })
  }, [])

  return (
    <>
      <MainBannerContainer>
  <FlexMainContainer>
          <MainMessageContainer>
            <h1>WORK</h1>
          </MainMessageContainer>
          <MainImageContainer ref={container}>
          </MainImageContainer>
  </FlexMainContainer>
      </MainBannerContainer>
    </>
  )
}

export default WorkContainer