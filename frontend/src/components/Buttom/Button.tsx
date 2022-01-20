import React from 'react';
import styled from 'styled-components';

import { Content } from './ButtomStyle'

interface Props {
  label?: string,
  customization?: {
    backgroundColor?: string;
    textColor?: string;
    width?: string
  }
}

const Button: React.FC<Props> = ({ label = 'Botão', customization = { backgroundColor: 'green', textColor: 'black', width: '130px'}}) => {
  return(
    <Content customization={customization}>
      {label}
    </Content>
  );
};

export default Button;