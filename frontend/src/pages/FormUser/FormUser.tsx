import React from 'react';

import Form, { FormFields } from '../../components/Form';
import { Content } from './FormUserStyle';

import Buttom from '../../components/Buttom/Button';

const FormUser: React.FC = () => {
  return (
    <Form>
      <Content>
        {/* component width FormFields represent the percentage that it will occupy in relation to the content container */}
        <FormFields label='Nome' width={100} name="asd" />
        <FormFields label='Profissão' width={47} name="asd" />
        <FormFields label='Celular' width={47} name="asd" />
        <FormFields label='Meu IP' width={63} readonly={true} name="asd" />
        <Buttom label='ENCONTRAR IP' customization={({ backgroundColor: '#00e6de', textColor: 'black', width:'183px' })} />
        <div className='buttomsOptions'>
          <Buttom label='SALVAR' customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px'})}/>
          <Buttom label='LIMPAR' customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px' })}/>
        </div>
      </Content>
    </Form>
  );
};

export default FormUser;