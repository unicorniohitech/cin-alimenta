import React from 'react'

import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Typography, Link } from '@mui/material'
import { ROUTES } from '@/routes/routes.ENUM'

import * as S from './styles'

interface SignIn {
  email: string
  password: string
}
const SignIn = () => {
  const history = useHistory()
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignIn>({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data: SignIn) => {
    console.log(data)
    reset()
    history.push(ROUTES.HOME)
  }

  return (
    <S.SignInConteiner>
      <S.SignInBox>
        <S.SignInForm style={{ padding: 'auto' }} onSubmit={handleSubmit(onSubmitHandler)}>
          <S.ContentLogo>
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#FF7878',
                textDecoration: 'none',
                marginRight: 0,
              }}
            >
              Cin Alimenta
            </Typography>
          </S.ContentLogo>
          <S.SignInTitle sx={{ fontWeight: '400' }} variant="h5" color="#696969">
            Insira seu usuário e senha
          </S.SignInTitle>
          {/* <h2 color="black">Insira seu usuário e senha</h2> */}
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            {...register('email')}
            placeholder="email"
            type="email"
            size="small"
            required
          />
          {/* <Input
            variant="outlined"
            {...register('email')}
            placeholder="email"
            type="email"
            required
          /> */}
          {errors.email && <p>{errors.email?.message}</p>}
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            {...register('password')}
            placeholder="password"
            type="password"
            size="small"
            required
          />
          {/* <Input
            variant="outlined"
            {...register('password')}
            placeholder="password"
            type="password"
            required
          /> */}
          {errors.password && <p>{errors.password?.message}</p>}
          <S.SignInButton type="submit">Entrar</S.SignInButton>
          <Typography
            variant="body2"
            noWrap
            sx={{
              display: { xs: 'flex' },
              textAlign: 'right',
              fontFamily: 'monospace',
              fontWeight: 400,
              color: '#FF7878',
              textDecoration: 'none',
              marginRight: 0,
            }}
          >
            Ainda não é cadastrado?{' '}
            <Link underline="none" href="/">
              {' '}
              Cadastre-se.
            </Link>
          </Typography>
        </S.SignInForm>
      </S.SignInBox>
    </S.SignInConteiner>
  )
}

export default SignIn
