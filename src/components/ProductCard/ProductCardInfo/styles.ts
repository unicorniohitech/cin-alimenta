import styled from 'styled-components'

import { Box } from '@mui/material'
import { Button, Card, Container, Typography } from '@mui/material'

export const CardInfoBox = styled(Box)`
  &.MuiBox-root {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: #fff6f5;
    border: 1px solid #ff7878;
    box-shadow: 24;
    padding: 40px;
    border-radius: 8px;
  }
`

export const ProductCard = styled(Card)`
  &.MuiCard-root {
    box-shadow: 0px 1px 1px -1px rgba(255, 120, 120, 0.1), 0px 1px 1px 0px rgba(255, 120, 120, 0.1),
      0px 1px 1px 0px rgba(255, 120, 120, 0.1);
    width: inherit;
    flex-flow: column wrap;
    align-content: space-between;
    display: flex;
  }
`

export const CardContainer = styled(Container)`
  &.MuiContainer-root {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    border: 1px solid #ff7878;
    box-shadow: 24;
    padding: 40px;
    border-radius: 8px;
    padding: 0;
  }
`

export const CardButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid #ff7878;
    color: #ff7878;
    outline: none;
    margin-left: 0px;
    margin-bottom: 0px;
    background-color: #fff;
    padding: 0px 5px;
  }
`

export const DescriptionText = styled(Typography)`
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 2; */
  -webkit-box-orient: vertical;
`
