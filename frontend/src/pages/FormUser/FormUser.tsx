import React, { useState } from 'react';
import api from '../../services/api';

import Form, { FormFields } from '../../components/Form';
import { Container } from './FormUserStyle';

import FormButtom from '../../components/Form/components/FormButtom/FormButton';

//TODO fazer com que o formulario seja customizavel

//TODO fazer o request da api para o ip

const FormUser: React.FC = () => {


  const [userIp, setUserIp] = useState("")

  function getIp():void {
    api.get('/')
    .then(resp => {
      setUserIp(resp.data)
    })
  }

  return (
    <Form>
      <Container>
        {/* component width FormFields represent the percentage that it will occupy in relation to the content container */}
        <FormFields label='Nome' width={100} name="name" />
        <FormFields label='Profissão' width={47} name="job" />
        <FormFields label='Celular' width={47} name="phone" />
        <FormFields label='Meu IP' value={userIp} width={63} readonly={true} name="userIP" />
        <FormButtom onClick={() => getIp()} type='button' label='ENCONTRAR IP' customization={({ backgroundColor: '#00e6de', textColor: 'black', width:'183px' })} />
        <div className='buttomsOptions'>
          <FormButtom type='submit' label='SALVAR' customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px'})}/>
          <FormButtom type='reset' label='LIMPAR' customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px' })}/>
        </div>
      </Container>
    </Form>
  );
};

export default FormUser;