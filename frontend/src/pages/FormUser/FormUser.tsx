import React, { useState } from 'react';
import api from '../../services/api';

import { convertIPV6ToIPV4 } from './utils/convertIP'

import Form, { FormFields, FormButton } from '../../components/Form';
import { Container } from './FormUserStyle';

//TODO fazer com que o formulario seja customizavel

const FormUser: React.FC = () => {

  const [userIp, setUserIp] = useState("")
  const getIp = () => {
    let ip:string

    api.get('/')
    .then(resp => {
      ip = resp.data
    })
    .then(() =>
      ip = convertIPV6ToIPV4(ip)
    )
    .then(() =>
      setUserIp(ip)
    )
  }

  return (
    <Form>
      <Container>
        {/* component width FormFields represent the percentage that it will occupy in relation to the content container */}
        <FormFields label='Nome' width={100} name="name" />
        <FormFields label='Profissão' width={47} name="job" />
        <FormFields label='Celular'type='phoneField' width={47} name="phone" />
        <FormFields label='Meu IP' value={userIp} width={63} readonly={true} name="userIP" />
        <FormButton onClick={() => getIp()} type='button' label='ENCONTRAR IP' customization={({ backgroundColor: '#00e6de', textColor: 'black', width:'183px' })} />
        <div className='buttomsOptions'>
          <FormButton type='submit' label='SALVAR' customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px'})}/>
          <FormButton type='reset' label='LIMPAR' customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px' })}/>
        </div>
      </Container>
    </Form>
  );
};

export default FormUser;