import React, { ChangeEvent } from 'react'

import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Typography, Grid } from '@mui/material'
import { ROUTES } from '@/routes/routes.ENUM'

import * as S from './styles'

interface SignUp {
  name: string
  risingDate: string
  document: string
  telephone: string
  address: Address
  email: string
  password: string
  confirmPassword: string
}

interface Address {
  street: string
  number: string
  neighborhood: string
  postCode: string
  complement: string
}

const SignUp = () => {
  const history = useHistory()
  const schema = yup
    .object()
    .shape({
      name: yup.string().min(2, 'teste').required('Campo obrigatório'),
      email: yup.string().email().required('Campo obrigatório'),
      risingDate: yup.date().required('Campo obrigatório'),
      password: yup
        .string()
        .min(8, 'Senha inválida')
        .max(32, 'Senha inválida')
        .required('Campo obrigatório'),
      confirmPassword: yup
        .string()
        .required('Campo obrigatório')
        .min(8, 'Senha inválida')
        .max(32, 'Senha inválida')
        .oneOf([yup.ref('password'), ''], 'Repita a senha criada no campo anterior'),
      street: yup.string().required('Campo obrigatório'),
      number: yup.string().required('Campo obrigatório'),
      neighborhood: yup.string().required('Campo obrigatório'),
      postCode: yup.string().required('Campo obrigatório'),
      complement: yup.string(),
    })
    .required()
  schema
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setValue,
  } = useForm<SignUp>({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data: SignUp) => {
    console.log(data)
    reset()
    clearErrors()
    history.push(ROUTES.HOME)
  }

  return (
    <S.SignUpConteiner>
      <S.SignUpBox>
        <S.SignUpForm style={{ padding: 'auto' }} onSubmit={handleSubmit(onSubmitHandler)}>
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
          <S.SignUpTitle sx={{ fontWeight: '400' }} variant="h5" color="#696969">
            Cadastre-se
          </S.SignUpTitle>

          <Grid container gap="1rem" display="flex" direction="column">
            <Grid item display="flex" direction="column">
              <S.SignUpDivide>Dados pessoais</S.SignUpDivide>
              <S.Line />
            </Grid>
            <Grid container gap="1.5rem" display="flex" direction="column">
              <Grid item gap="2.5rem" display="flex" direction="row">
                <S.FormField
                  error={!!errors.name}
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  {...register('name')}
                  placeholder="Nome"
                  helperText={errors.name?.message}
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('name', value)

                    value.length >= 2 && clearErrors('name')
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="CPF/CNPJ"
                  variant="outlined"
                  {...register('document')}
                  placeholder="CPF/CNPJ"
                  // type="date"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    console.log('11--------', value, '11--------', event.target)
                    setValue('document', value)

                    value.length >= 8 && value.length <= 32 && clearErrors('document')
                  }}
                />
              </Grid>
              <Grid item gap="2.5rem" display="flex" direction="row">
                <TextField
                  id="outlined-basic"
                  label="Data de nascimento"
                  variant="outlined"
                  {...register('risingDate')}
                  placeholder="Data de nascimento"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('risingDate', value)
                    // falta regex para datas
                    value.length >= 2 && clearErrors('risingDate')
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  {...register('email')}
                  placeholder="E-mail"
                  type="email"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('email', value)
                    // falta regex para email
                    clearErrors('email')
                  }}
                />
              </Grid>
              <Grid item gap="2.5rem" display="flex" direction="row">
                <TextField
                  id="outlined-basic"
                  label="Telefone"
                  variant="outlined"
                  {...register('telephone')}
                  placeholder="Telefone"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('telephone', value)
                    // falta regex para telefone
                    value.length >= 2 && clearErrors('telephone')
                  }}
                />
              </Grid>
            </Grid>
            <Grid sx={{ marginTop: '1.5rem' }} item display="flex" direction="column">
              <S.SignUpDivide>Endereço</S.SignUpDivide>
              <S.Line />
            </Grid>
            <Grid item gap="1.5rem" display="flex" direction="column">
              <Grid item gap="2.5rem" display="flex" direction="row">
                <TextField
                  id="outlined-basic"
                  label="Rua"
                  variant="outlined"
                  {...register('address.street')}
                  placeholder="Rua"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('address.street', value)
                    // falta condição para rua
                    value.length >= 2 && clearErrors('address.street')
                  }}
                />
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Número"
                  variant="outlined"
                  {...register('address.number')}
                  placeholder="Número"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('address.number', value)
                    // falta condição para número
                    value.length >= 2 && clearErrors('address.number')
                  }}
                />
              </Grid>
              <Grid item gap="2.5rem" display="flex" direction="row">
                <TextField
                  id="outlined-basic"
                  label="Bairro"
                  variant="outlined"
                  {...register('address.neighborhood')}
                  placeholder="Bairro"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('address.neighborhood', value)
                    // falta condição para bairro
                    value.length >= 2 && clearErrors('address.neighborhood')
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  {...register('address.postCode')}
                  placeholder="CEP"
                  type="address.postCode"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('address.postCode', value)
                    // falta condição para cep e mask
                    value.length >= 2 && clearErrors('address.postCode')
                  }}
                />
              </Grid>
              <Grid item gap="2.5rem" display="flex" direction="row">
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  {...register('address.complement')}
                  placeholder="Complemento"
                  size="small"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('address.complement', value)
                    // falta condição para complemento
                    value.length >= 2 && clearErrors('address.complement')
                  }}
                />
              </Grid>
            </Grid>
            <Grid sx={{ marginTop: '1.5rem' }} item display="flex" direction="column">
              <S.SignUpDivide>Senha</S.SignUpDivide>
              <S.Line />
            </Grid>
            <Grid item gap="2.5rem" display="flex" direction="column">
              <Grid item gap="2.5rem" display="flex" direction="row">
                <TextField
                  id="outlined-basic"
                  label="Senha"
                  variant="outlined"
                  {...register('password')}
                  placeholder="password"
                  type="password"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('password', value)
                    // falta condição para complemento
                    value.length >= 2 && clearErrors('password')
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Confirmar senha"
                  variant="outlined"
                  {...register('confirmPassword')}
                  placeholder="confirmPassword"
                  type="password"
                  size="small"
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    setValue('confirmPassword', value)
                    // falta condição para complemento
                    value.length >= 2 && clearErrors('confirmPassword')
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <S.SignUpButton type="submit">Cadastrar</S.SignUpButton>
        </S.SignUpForm>
      </S.SignUpBox>
    </S.SignUpConteiner>
  )
}

export default SignUp
