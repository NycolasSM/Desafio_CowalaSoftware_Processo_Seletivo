import React from 'react';
import styled from 'styled-components';

import CowalaSoftwareBanner from './SVG/CowalaSoftwareBanner.svg'

export const Content = styled.div<Props>`
  height: ${props => props.customization?.size};

  img {
    height: ${props => props.customization?.size};
  }
`
interface Props {
  customization?: {
    size?: string;
  }
}

const CowalaSoftware: React.FC<Props> = ({ customization = { size : '40px'} }) => {
  return(
    <Content customization={customization}>
      <img src={CowalaSoftwareBanner} alt="CowalaSoftwareBanner" />
    </Content>
  );
};

export default CowalaSoftware;