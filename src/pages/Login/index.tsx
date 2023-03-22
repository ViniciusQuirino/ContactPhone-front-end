import { useState } from 'react'
import Container from './styled'
import { useForm } from "react-hook-form";
import { schemaLogin } from '../../validations';
import { yupResolver } from '@hookform/resolvers/yup';


export interface iFormLogin {
  email: string;
  password: string;
}


function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
    resolver: yupResolver(schemaLogin)
  })

  return (
    <Container>
      <form >
        <h3>Login</h3>
        <div className='input'>
          <label htmlFor="email">E-mail</label>
          <input {...register('email')} type="text" id="email" placeholder='Digite seu email' />
        </div>
        <div className='input'>
          <label htmlFor="senha">Senha</label>
          <input {...register('password')} type="password" id='senha' placeholder='Digite sua senha' />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}

export default Login


