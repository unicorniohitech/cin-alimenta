import styled from 'styled-components'

import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import { ShoppingCartOutlined, AccountCircleOutlined } from '@mui/icons-material'

export const Line = styled.hr`
  border: solid 1px #ff7878;
  width: 100%;
`

export const VerticalLine = styled.span`
  border-left: solid 2px #ff7878;
  display: block;
  margin: 4px 5px 4px 7px;
`

export const Header = styled(AppBar)`
  &.MuiAppBar-root {
    position: absolute;
  }
  // border-bottom: solid 3px #ff7878;
  // background-color: transparent;
  // box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 20%), 0px 1px 5px 0px rgb(0 0 0 / 14%),
  //   0px 8px 8px 0px rgb(0 0 0 / 12%);
`

export const ContainerToolbar = styled(Toolbar)`
  border-bottom: solid 3px #ff7878;
  background-color: transparent;
  box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 10%), 0px 5px 1px 0px rgb(0 0 0 / 4%),
    0px 5px 10px 0px rgb(0 0 0 / 10%);
  &.MuiToolbar-root {
    min-height: 48px;
  }
`

export const ShoppingCart = styled(ShoppingCartOutlined)`
  color: #ff7878;
`

export const ButtonBar = styled(IconButton)`
  :focus {
    outline: none !important;
  }
`

export const AccountUser = styled(AccountCircleOutlined)`
  color: #ff7878;
  // border-color: #ff7878;
  :focus {
    outline: none !important;
  }
`

export const ContentAccount = styled(Box)`
  justify-content: end;
  display: flex;
  width: 10%;
  :focus {
    outline: none !important;
  }
  justify-content: space-between;
`

export const ContentLogo = styled(Box)`
  justify-content: center;
  display: flex;
  width: 90%;
`

export const ContentHeader = styled(Container)`
  &.MuiContainer-root {
    display: flex;
  }
`

export const ButtonBoxMenu = styled(Box)`
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: inherit;
  color: #ff7878;
  align-items: center;
  position: relative;
  margin: 20px 0;
  :hover {
    transform: scale(1.1, 1.1);
    // box-shadow: 0 4px 4px #999;
    transition: all 0.2s ease-in-out;
    border: 1px solid #ff7878;
  }
  &.MuiBox-root {
    :focus {
      outline: none !important;
    }
  }
  p:last-child {
    margin-top: 1em;
  }
`
