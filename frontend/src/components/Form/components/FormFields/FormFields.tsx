import React from 'react';
import InputWithMask from 'react-input-mask'

import { FieldsFormUser } from './FormFieldsStyle'

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  value?: any;
  width?: number;
  readonly?: boolean;
  disable?: boolean;
  maxLenght?: number;
  type?: string;
  onChange?: (e?:any) => void,
}

const Fields: React.FC<Props> = ({ label, onChange, disable = false, placeholder, name, width = 100, readonly = false, type = 'text', value}) => {

  return (
    <FieldsFormUser style={{ width: `${width}%` }}>
      {label}
      {type === "phoneField" ?
      <InputWithMask disabled={disable} onChange={onChange} placeholder={placeholder} mask="(99) 99999-9999" type={type} readOnly={readonly} name={name} value={value} /> 
      : 
      <input disabled={disable} onChange={onChange} placeholder={placeholder} type={type} readOnly={readonly} name={name} value={value} />
      }
    </FieldsFormUser>
  );
};

export default Fields;