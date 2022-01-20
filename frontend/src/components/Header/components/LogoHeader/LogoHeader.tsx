import React from "react";

import { Container } from './LogoHeaderStyle'

import CowalaSoftware from "../../../../assets/Logo/CowalaSoftwareBanner/CowalaSofwareBanner";
import LogoCowala from "../../../../assets/Logo/LogoCowala/LogoCowala";

const Header: React.FC = () => {
  return(
    <Container>
      <LogoCowala customization={({ size: "96px" })}/>
      <CowalaSoftware customization={({ size: "63px" })}/>
    </Container>
  );
};

export default Header;