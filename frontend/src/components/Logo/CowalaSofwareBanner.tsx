import React from 'react';
import styled from 'styled-components';

import CowalaSoftwareBannerSVG from '../../assets/logo/CowalaSoftwareBanner.svg'

export const Content = styled.div<Props>`
  height: ${props => props.customization?.size};
`
type Props = {
  customization?: {
    size?: string;
  }
}

const CowalaSoftwareBanner: React.FC<Props> = ({ customization = { size : '40px'} }) => {
  return(
    <Content customization={customization}>
      <img src={CowalaSoftwareBannerSVG} alt="CowalaSoftwareBanner" />
    </Content>
  );
};

export default CowalaSoftwareBanner;