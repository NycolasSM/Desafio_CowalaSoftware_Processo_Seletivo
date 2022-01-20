import React from "react";

import { HeaderCowala } from './HeaderStyle'
import LogoHeader  from './components/LogoHeader/LogoHeader';

const Header: React.FC = () => {
  return(
    <HeaderCowala>
      <LogoHeader />
    </HeaderCowala>
  );
};

export default Header;