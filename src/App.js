import React, { Component } from 'react'
import Navbar from "./Components/Navbar/Navbar";
import MainBanner from './Components/MainBanner/index';

import { GlobalStyle } from "./GlobalStyles";

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <MainBanner></MainBanner>
         <GlobalStyle/>

      </>
    )
  }
}

export default App;


