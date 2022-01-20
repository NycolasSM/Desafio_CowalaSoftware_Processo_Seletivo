import React from 'react';

import { FieldsFormUser } from './FieldsStyle'

interface Props {
  label: string;
  value?: any;
  name: string;
  width?: number;
  readonly?: boolean;
  maxLenght?: number;
  type?: string;
}

const Fields: React.FC<Props> = ({ label, width = 100, readonly = false, type = 'text', value}) => {

  return (
    <FieldsFormUser style={{ width: `${width}%` }}>
      {label}
      <input type={type} readOnly={readonly} name="" value={value} />
    </FieldsFormUser>
  );
};

export default Fields;