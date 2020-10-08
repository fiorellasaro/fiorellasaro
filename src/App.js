import React, { Component, useState, useRef, useEffect } from 'react'
import Navbar from "./Components/Navbar/Navbar";
import MainBanner from './Components/MainBanner/index';
import WorkContainer from './Components/WorkContainer/index';
import { Burger, Menu } from './Components';
import { GlobalStyle } from "./GlobalStyles";
import FocusLock from 'react-focus-lock';
// class App extends Component {
//   state = {
//     navbarOpen: false
//   }

//   handleNavbar = () => {
//     this.setState({ navbarOpen: !this.state.navbarOpen });
//   }

//   render() {

//     return (
//       <>
//         {/* <Navbar 
//           navbarState={this.state.navbarOpen} 
//           handleNavbar={this.handleNavbar}
//         />
//         <MainBanner></MainBanner> */}
//         <div ref={node}>
//           <FocusLock disabled={!open}>
//             <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
//             <Menu open={open} setOpen={setOpen} id={menuId} />
//           </FocusLock>
//         </div>
//          <GlobalStyle/>

//       </>
//     )
//   }
// }

// export default App;


function App() {
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
        <MainBanner></MainBanner>
        <WorkContainer></WorkContainer>
        
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