import styled from 'styled-components'

import { Container } from '@mui/material'

export const CarrouselContainer = styled(Container)`
  &.MuiContainer-root {
    background-color: #f2f78b;
    align-items: center;
    justify-content: space-between;
    display: flex;
    max-width: none;
    height: 400px;
    width: auto;
    margin: 0 40px;
    top: 20px;
    position: relative;
    padding: 0;
    border-radius: 15px;
  }
`
