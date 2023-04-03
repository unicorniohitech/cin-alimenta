import styled from 'styled-components'

import { Box, Button, Container, Typography } from '@mui/material'

export const SignInConteiner = styled(Container)`
  &.MuiContainer-root {
    display: flex;
  }
  flex-wrap: wrap;
  top: 0;
  left: 0;
  place-content: center;
  margin: auto;
  position: absolute;
  height: 100%;
`
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SignInBox = styled(Box)`
  background-color: white;
  padding: 5rem;
  border: 0.01rem solid rgba(255, 120, 120, 0.4);
  border-radius: 13px;
`
export const SignInButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid #ff7878;
    color: #ff7878;
    outline: none;
    background-color: #fff;
  }
`
export const SignInTitle = styled(Typography)`
  &.MuiTypography-root {
    margin-bottom: 0.83em;
  }
`
