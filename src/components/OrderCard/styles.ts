import styled from 'styled-components'

import { Button, Card, Container, Typography } from '@mui/material'

export const OrderCard = styled(Card)`
  &.MuiCard-root {
    box-shadow: 0px 1px 1px -1px rgba(255, 120, 120, 0.1), 0px 1px 1px 0px rgba(255, 120, 120, 0.1),
      0px 1px 1px 0px rgba(255, 120, 120, 0.1);
    width: inherit;
    flex-flow: row wrap;
    align-content: space-between;
    display: flex;
  }
  width: inherit;
`

export const CardContainer = styled(Container)`
  &.MuiContainer-root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
