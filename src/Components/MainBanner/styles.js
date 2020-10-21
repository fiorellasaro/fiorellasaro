import styled from '@emotion/styled'
import Typist from 'react-text-typist';

export const MainBannerContainer = styled('div')`
  display: flex;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  flex-direction: column;

  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FlexMainContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  @media (max-width: 425px){
  flex-direction: column;
  }
`;


export const MainMessageContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  & h1{
    font-size: 45px;
    // font-size:80px;
    // text-align:center;
  }
  & p{
    font-size:35px;
  }

  @media (max-width: 768px) {
    
    & h1 {
       font-size: 35px !important;
       margin-bottom: 2em !important;
    }
    & p{
      font-size:25px;
    }
  }
`
export const MainImageContainer = styled('div')`
  display: flex;
  width: 80%;
  justify-content: center;
  height: 400px;
  background-repeat:no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const MainArrowButton = styled('div')`
  display: flex;
  width: 70px;
`

export const StyledTypist = styled(Typist)`
margin: 0; padding: 0; color: white; font-size: 80px; font-family: graphite-std,sans-serif;
@media (max-width: 768px) {
  font-size: 50px !important;
}
`;
