import React from 'react';

import { Content } from './FormButtomStyle'

interface Props {
  label?: string,
  type?: string,
  onClick?: () => void,
  customization?: {
    backgroundColor?: string;
    textColor?: string;
    width?: string
  }
}

const FormButton: React.FC<Props> = ({ label = 'Botão', onClick, type = 'button', customization = { backgroundColor: 'green', textColor: 'black', width: '130px' } }) => {
  return (
    <Content customization={customization} onClick={onClick} type={type === "submit" ? "submit" : type === "reset" ? "reset" : "button"} >
      {label}
    </Content>
  );
};

export default FormButton;