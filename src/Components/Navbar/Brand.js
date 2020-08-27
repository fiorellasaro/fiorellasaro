import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Fiorella Saro Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 50px;
  margin: auto 0;
`;