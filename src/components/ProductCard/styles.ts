import styled from 'styled-components'

import { Button, Card, Container } from '@mui/material'

export const ProductCard = styled(Card)`
  &.MuiCard-root {
    box-shadow: 0px 1px 1px -1px rgba(255, 120, 120, 0.1), 0px 1px 1px 0px rgba(255, 120, 120, 0.1),
      0px 1px 1px 0px rgba(255, 120, 120, 0.1);
  }
`

export const CardContainer = styled(Container)`
  &.MuiContainer-root {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    padding: 0;
  }
`
export const CardButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid #ff7878;
    color: #ff7878;
    outline: none;
    margin-left: 8px;
    margin-bottom: 8px;
    background-color: #fff;
  }
`
