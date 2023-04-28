import styled from 'styled-components'

import { InputBase, Button, Select, Container, Grid } from '@mui/material'

export const OrderGrid = styled(Grid)`
  &.MuiGrid-root {
    margin: 20px 0 0 0;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    display: grid;
    .MuiGrid-item {
      padding: 0px;
      display: flex;
    }
  }
  display: flex;
  grid-column-gap: 20px;
  grid-row-gap: 25px;
  justify-content: center;
  border-radius: 0 0 15px 15px;
`

export const CardContainer = styled(Container)`
  &.MuiContainer-root {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 0;
  }
`

export const Search = styled.div`
  border-radius: 4px;
  background-color: rgba(255, 120, 120, 0.2);
  margin-right: 16px;
  margin-left: 0;
  position: relative;
`

export const FilterButton = styled(Button)`
  &.MuiButton-root {
    border: 1px solid #ff7878;
    color: #ff7878;
    outline: none;
  }
`

export const FilterSelect = styled(Select)`
  &.MuiOutlinedInput-notchedOutline {
    border-color: #ff7878;
    color: #ff7878;
    outline: none;
  }
`

export const SearchIconWrapper = styled.div`
  padding: 0px 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  &.MuiInputBase-root {
    .MuiInputBase-input {
      padding: 8px 8px 8px calc(1em + 32px);
      -webkit-transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      width: 20ch;
    }
  }
`
