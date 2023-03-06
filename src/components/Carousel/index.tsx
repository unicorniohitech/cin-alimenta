import React from 'react'

import { Container } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

const Carousel = () => (
  <Container
    maxWidth="xl"
    sx={{
      backgroundColor: '#f2f78b',
      height: '300px',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
    }}
  >
    <ArrowBackIosOutlinedIcon
      fontSize="large"
      color="secondary"
      sx={{ cursor: 'pointer', paddingLeft: '50px' }}
    />
    <ArrowForwardIosOutlinedIcon
      fontSize="large"
      color="secondary"
      sx={{ cursor: 'pointer', paddingRight: '50px' }}
    />
  </Container>
)

export default Carousel
