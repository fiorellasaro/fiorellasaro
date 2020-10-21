import React, {useEffect,  useRef} from 'react';
import lottie from 'lottie-web';
import ReactLogo from '../../assets/Universe.svg';



import {
    MainBannerContainer,
    MainMessageContainer,
    MainImageContainer,
    FlexMainContainer,
    MainArrowButton,
    StyledTypist
} from './styles'

import WorkContainer from '../WorkContainer'

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
    <div>
    <MainBannerContainer>
        <FlexMainContainer>
            <MainMessageContainer>
                <h1>Hola! soy Fiorella y me encanta <br></br> <StyledTypist sentences={['diseñar', 'crear', 'el tarot', 'dibujar']} loop={true} cursorColor="white" /></h1>
                {/* <p>Design, draw, read tarot and love cats </p> */}


            </MainMessageContainer>
            <MainImageContainer  style={{ backgroundImage: `url(${ReactLogo})` }}>
           
            </MainImageContainer>
        </FlexMainContainer>
        <MainArrowButton ref={containerArrow}>
          
        </MainArrowButton>
      </MainBannerContainer>
      <WorkContainer></WorkContainer>
    </div>

    </>
  )
}

export default MainBanner