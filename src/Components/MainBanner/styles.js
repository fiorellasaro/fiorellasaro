import styled from '@emotion/styled'

export const MainBannerContainer = styled('div')`
  display: flex;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;

  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FlexMainContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px){
  flex-direction: column;
  }
`;


export const MainMessageContainer = styled('div')`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width:100%;
  & h1{
    font-size:80px;
  }
  & p{
    font-size:24px;
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 30px;
    }
  }
`
export const MainImageContainer = styled('div')`
  display: flex;
  width: 100%;
`
