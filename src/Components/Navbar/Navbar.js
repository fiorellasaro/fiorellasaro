import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">WORK</a>
            <a href="/">ABOUT</a>
            <a href="/">CONTACT</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem; */
  position: sticky;
  top: 0;
  left: 0;
  background: #1c1c1c;
  height: 10vh;
  display: flex;
  align-items:center;
`;

const FlexContainer = styled.div`
  width: 80%;
  height: 10vh;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled(animated.ul)`
  /* justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  } */

  display: flex;
  justify-content: center;
  align-items: center;

  /* display: block; */
  /* margin: auto 0; */
  & a {
    color: #ffffff;
    font-weight: bolder;
    transition: all 300ms linear 0s;
    /* display: block;
    height: 100%; */
    font-size: 20px;
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
    /* &:before {
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
    } */
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 
const BurgerWrapper = styled.div`
 
  @media (min-width: 769px) {
    display: none;
  }
`;