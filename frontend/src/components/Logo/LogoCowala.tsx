import React from 'react';
import styled from 'styled-components';

import LogoCowalaSVG from '../../assets/logo/LogoCowala.svg'

export const Content = styled.div<Props>`
  height: ${props => props.customization?.size};
`
type Props = {
  customization?: {
    size?: string;
  }
}

const LogoCowala: React.FC<Props> = ({ customization = { size : '40px'} }) => {
  return(
    <Content customization={customization}>
      <img src={LogoCowalaSVG} alt="LogoCowala" />
    </Content>
  );
};

export default LogoCowala;