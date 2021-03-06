import React, { useState } from 'react';
import api from '../../services/api';

import { convertIPV6ToIPV4 } from '../../utils/convertIP'

import Form, { FormFields, FormButton } from '../../components/Form';
import { Container } from './FormUserStyle';

const FormUser: React.FC = () => {;

  const [form, setForm] = useState({
    userName: "",
    userJob: "",
    userPhone: "",
    userIpv4: "",
    userIpv6: "",
  })

  const cleanAllFields = () => {
    setForm({
      userName: "",
      userJob: "",
      userPhone: "",
      userIpv4: "",
      userIpv6: "",
    })
  }

  const cleanLocalStorage = () => {
    localStorage.removeItem("userForm")
  }

  const cleanFieldsAndLocalStorage = () => {
    cleanAllFields()
    cleanLocalStorage()
  }

  const getUserIp = () => {
    let ipv4:string
    let ipv6:string

    api.get('/')
    .then(resp => {
      ipv6 = resp.data
    })
    .then(() =>
      ipv4 = convertIPV6ToIPV4(ipv6)
    )
    .then(() =>
      setForm({
        userName: form.userName,
        userJob: form.userJob,
        userPhone: form.userPhone,
        userIpv4: ipv4,
        userIpv6: ipv6
      })
    )
  }

  const phoneNumberTreatment = (phoneNumber: any) => {
    return phoneNumber.replace(/[- ]/g, '')
  }

  const formChange = (event: any) => {
    event.preventDefault();

    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }

  const submitForm = (event:any) => {
    event.preventDefault()

    form.userPhone = phoneNumberTreatment(form.userPhone)
    console.log(form) // para ver como ficou o formulario

    localStorage.setItem("userForm",JSON.stringify(form))
    alert("Formulario Enviado")

    cleanAllFields()
  }

  return (
    <Form width='80vw' height='459px'>
      <Container>
        {/* component FormFields width represent the percentage that it will occupy in relation to the content container */}
        <FormFields label='Nome' onChange={formChange} value={form.userName} width={100} name="userName" />
        <FormFields label='Profiss??o' onChange={formChange} value={form.userJob} width={47} name="userJob" />
        <FormFields label='Celular' onChange={formChange} value={form.userPhone} type='phoneField' width={47} name="userPhone" />
        <FormFields label='Meu IP' onChange={formChange} value={form.userIpv4} disable={true} width={63} readonly={true} name="userIp" />
        <FormButton onClick={() => getUserIp()} type='button' label='ENCONTRAR IP' customization={({ backgroundColor: '#00e6de', textColor: 'black', width:'183px' })} />
        <div className='buttomsOptions'>
          <FormButton type='submit' label='SALVAR' onClick={(event) => submitForm(event)} customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px'})}/>
          <FormButton type='reset' label='LIMPAR' onClick={() => cleanFieldsAndLocalStorage()} customization={({ backgroundColor: '#0A1633', textColor: 'white', width:'139px' })}/>
        </div>
      </Container>
    </Form>
  );
};

export default FormUser;