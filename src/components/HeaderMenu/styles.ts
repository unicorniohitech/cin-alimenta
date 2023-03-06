import styled from 'styled-components'

import { Box } from '@mui/material'

export const VerticalLine = styled.span`
  border-left: solid 2px #ff7878;
  display: block;
  margin: 4px 5px 4px 7px;
`

export const ButtonMenu = styled(Box)`
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: inherit;
  color: #ff7878;
  align-items: center;
  position: relative;
  margin: 20px 0;
  // width: 11vw;
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
