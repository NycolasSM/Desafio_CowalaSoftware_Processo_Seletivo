import React from "react";

import { Container } from './LogoStyle'
import Logo from '../../../../assets/Logo/Logo.svg'

import CowalaSoftware from "../../../../assets/Logo/CowalaSoftware/CowalaSofware";

const Header: React.FC = () => {
  return(

    //TODO transformar as logos em components e poder passar props como tamanho

    <Container>
      <img src={Logo} alt="Logo" />
      <CowalaSoftware customization={({ size: "63px" })}/>
    </Container>
  );
};

export default Header;