import React, { Component, useState, useRef, useEffect  } from 'react'
import Navbar from "./Components/Navbar/Navbar";
import MainBanner from './Components/MainBanner/index';
import WorkContainer from './Components/WorkContainer/index';
import { Burger, Menu } from './Components';
import { GlobalStyle } from "./GlobalStyles";
import FocusLock from 'react-focus-lock';
import {Switch, Route, useLocation} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';

function usePageViews() {
  // const location = useLocation()
  // React.useEffect(() => {
  //   window.ga.send(["pageview", location.pathname]);
  // }, [location]);


}

function App() {

  // usePageViews();
  const location = useLocation()
  const transitions = useTransition(location, location=> location.pathname, {
    from: {opacity:0, transform:"translate(100%,0)"},
    enter :{opacity:1, transform:"translate(0%,0)"},
    leave: {opacity:0, transform:"translate(100%,0)"}
  });

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleNavbar() {
    setNavbarOpen(!navbarOpen)
  }


  return (
      <>
      
        <GlobalStyle />
        {/* <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div> */}
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} ></Navbar>
        <Switch>
                <Route exact path="/" component={MainBanner}></Route>
                <Route exact path="/work" component={WorkContainer}></Route>
                <Route exact path="/tarot"></Route>
                <Route exact path="/about"></Route>
                <Route exact path="/contact"></Route>
        </Switch>
        {/* {transitions.map(({ item,props,key})=>(
          <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route exact path="/" component={MainBanner}></Route>
                <Route exact path="/work" component={WorkContainer}></Route>
                <Route exact path="/tarot"></Route>
                <Route exact path="/about"></Route>
                <Route exact path="/contact"></Route>
            </Switch>
          </animated.div>

        ))} */}

        {/* <MainBanner></MainBanner>
        <WorkContainer></WorkContainer> */}
        
      </>
  );
}

export default App;

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};