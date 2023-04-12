import styled from 'styled-components'

import { Box, Button, Container, TextField, Typography } from '@mui/material'

export const SignUpConteiner = styled(Container)`
  &.MuiContainer-root {
    display: flex;
    max-width: 100%;
  }
  flex-wrap: wrap;
  top: 0;
  left: 0;
  place-content: center;
  margin: auto;
  position: relative;
  height: 100%;
`
export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SignUpBox = styled(Box)`
  background-color: white;
  padding: 5rem;
  border: 0.01rem solid rgba(255, 120, 120, 0.4);
  border-radius: 13px;
`
export const SignUpButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid #ff7878;
    color: #ff7878;
    outline: none;
    background-color: #fff;
  }
`
export const SignUpTitle = styled(Typography)`
  &.MuiTypography-root {
    margin-bottom: 0;
  }
`

export const ContentLogo = styled(Box)`
  justify-content: center;
  display: flex;
  width: 100%;
`

export const SignUpDivide = styled(Typography)`
  &.MuiTypography-root {
    margin-bottom: 0;
    color: #ff7878;
    display: flex;
  }
`
export const Line = styled.hr`
  border-top: solid 1px #ff7878;
  width: 100%;
  margin-top: 0px;
`
export const FormField = styled(TextField)`
  .MuiFormHelperText-root.Mui-error {
    color: blue;
    margin-top: 0px;
  }
`
