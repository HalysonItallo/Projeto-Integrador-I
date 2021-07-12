import React from 'react';
import SendSimpleInput from '../components/SendSimpleInput';

export default function VerifyCode() {

  return(
    <>
     <SendSimpleInput
      description='Insira o código que foi enviado via e-mail'
      label='Código'
     />
    </>
  );
}