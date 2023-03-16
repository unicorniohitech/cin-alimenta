import React from 'react'

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

import * as S from './styles'

const Carousel = () => (
  <S.CarrouselContainer>
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
  </S.CarrouselContainer>
)

export default Carousel
