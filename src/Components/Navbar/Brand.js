import React from 'react'
import styled from "styled-components";

import logo from "../../assets/LogoBolderFS.svg";

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