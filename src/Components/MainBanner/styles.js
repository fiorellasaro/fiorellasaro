import styled from '@emotion/styled'

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
    font-size:80px;
    text-align:center;
  }
  & p{
    font-size:35px;
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 40px;
    }
    & p{
      font-size:25px;
    }
  }
`
export const MainImageContainer = styled('div')`
  display: flex;
  width: 100%;
`

export const MainArrowButton = styled('div')`
  display: flex;
  width: 70px;
`
