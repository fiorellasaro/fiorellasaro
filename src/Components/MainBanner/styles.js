import styled from '@emotion/styled'

export const MainBannerContainer = styled('div')`
  display: flex;
  background-color: #1c1c1c;
  align-items: center;
  height: 90vh;
  width: 100%;
`
export const MainContainer = styled('div')`
  display: flex;
  background-color: #1c1c1c;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 80%;
`

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
  background-color: white;
  height: 90vh;

`
