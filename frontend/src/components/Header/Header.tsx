import React from "react";

import { HeaderCowala } from './HeaderStyle'
import Logo  from './components/Logo/Logo';

const Header: React.FC = () => {
  return(
    <HeaderCowala>
      <Logo />
    </HeaderCowala>
  );
};

export default Header;