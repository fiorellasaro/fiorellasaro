import React from 'react';
import styled from "styled-components";

const Burgermenu = (props) => {
  return (
    <Wrapper onClick={props.handleNavbar} >
   <div className={ props.navbarState ? "open flex" : "flex" }>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>

    </Wrapper>
  );
}

export default Burgermenu;

const Wrapper = styled.div`

  @media (min-width: 769px) {
      display: none;
  }

  width: 60px;
  height: 45px;
  display: flex;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
& .flex{
  display: flex;
  flex-direction: column;
  width: 100%;
}
  & span{
  justify-content: space-between;
  height: 9px;
  width: 100%;
  background: #ffffff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  }

  & span:nth-child(2){
 margin-top: 9px;
 margin-bottom: 9px;
  }


  .open span:nth-child(2) {
      opacity: 0;
    }
  .open span:nth-child(3) {
    transform: rotate(-45deg);
    margin-top: -35px;
  
  }
  .open span:nth-child(1) {
    transform: rotate(45deg);
    margin-top: 20px;
  } 
/* .open span:nth-child(1) {
  top: 0px;
}

.open span:nth-child(2) {
  top: 18px;
}

.open span:nth-child(3) {
  top: 36px;
} */
/* sdjks */
/* .open span:nth-child(1), .open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.open span:nth-child(2), .open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.open span:nth-child(1) {
  left: 5px;
  top: 7px;
}

.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 7px;
}

.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

.open span:nth-child(5) {
  left: 5px;
  top: 29px;
}

.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 29px;
} */
  /* padding-top: .7rem;
  cursor: pointer;
  display: block;
  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }
  .open {
      width:60px;
      height:60px;
    }
  .open span:nth-child(2) {
      opacity: 0;
    }
  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  } */
`;