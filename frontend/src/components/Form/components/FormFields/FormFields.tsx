import React from 'react';
import InputWithMask from 'react-input-mask'

import { FieldsFormUser } from './FormFieldsStyle'

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  value?: any;
  width?: number;
  readonly?: boolean;
  maxLenght?: number;
  type?: string;
}

const Fields: React.FC<Props> = ({ label, placeholder, width = 100, readonly = false, type = 'text', value}) => {

  return (
    <FieldsFormUser style={{ width: `${width}%` }}>
      {label}
      {type == "phoneField" ?
      <InputWithMask placeholder={placeholder} mask="(99) 99999-9999" type={type} readOnly={readonly} name="" value={value} /> 
      : 
      <input placeholder={placeholder} type={type} readOnly={readonly} name="" value={value} />
      }
    </FieldsFormUser>
  );
};

export default Fields;