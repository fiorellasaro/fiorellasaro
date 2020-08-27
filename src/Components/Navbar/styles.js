import styled from '@emotion/styled'
export const NavBarHeader = styled('nav')`
  position: sticky;
  top: 0;
  left: 0;
  background: #1c1c1c;
  height: 10vh;
  display: flex;
  align-items:center;
  /* &:hover{
    display:none
  } */
`

export const NavbarWrapper = styled('div')`
  display: flex;
  border-radius: 0.25rem;
  justify-content: flex-end;
  align-items: center;
  max-height: 10vh;
  min-height: 4rem;
  width: 80%;
`
export const NavUlWrapper = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;

  /* display: block; */
  /* margin: auto 0; */
  & a {
    color: #ffffff;
    font-weight: bolder;
    /* display: block;
    height: 100%; */
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem;
    cursor: pointer;
    &:hover {
      /* color: #c0c0c0;
      border-bottom: 1px solid #1b9481; */
      left: 0;
      right: 0;
      border-bottom-color: inherit;
    }
    &:active {
      left: 0;
      right: 0;
      border-bottom-color: inherit;
    }
    &:before {
      content: '';
      position: absolute;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      left: 50%;
      right: 50%;
      bottom: 0;
      border-bottom-width: 3px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`
export const NavUlWrapperUl = styled('li')`
  /* height: 100%; */
`
export const DropwDownMenuWrapper = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  color: #ffffff;
  & span {
    margin: auto;
  }
`

export const BurgerWrapper = styled('div')`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`