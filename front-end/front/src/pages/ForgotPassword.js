import React from 'react';
import SendSimpleInput from '../components/SendSimpleInput';

export default function ForgotPassword() {

  return(
    <>
      <SendSimpleInput 
        description='Insira seu email e enviaremos a você um link 
        para voltar a acessar sua conta.' 
        label='E-mail'
      />
    </>
  );
}