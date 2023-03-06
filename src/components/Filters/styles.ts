import styled from 'styled-components'

import { InputBase, Container, Button, Select } from '@mui/material'

export const FiltersContainer = styled(Container)`
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
  /* width: 100%; */
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
