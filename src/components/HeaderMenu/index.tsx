import React from 'react'

import { Box, Typography } from '@mui/material'
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined'
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined'
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import * as S from './styles'

const HeaderMenu = () => {
  const pages = [
    {
      name: 'Home',
      icon: <HomeOutlinedIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'flex' } }} />,
    },
    {
      name: 'Restaurantes',
      icon: (
        <RestaurantOutlinedIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'flex' } }} />
      ),
    },
    {
      name: 'Lanchonetes',
      icon: <FastfoodOutlinedIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'flex' } }} />,
    },
    {
      name: 'Produtos',
      icon: (
        <DinnerDiningOutlinedIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'flex' } }} />
      ),
    },
  ]

  return (
    <S.Content>
      {/* <Container disableGutters> */}
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: 'flex',
            md: 'flex',
          },
        }}
      >
        {pages.map((page, index) => (
          <S.ButtonMenu
            component="button"
            key={`${page}-${index + 1}`}
            border="0px"
            // sx={{ my: 2 }}
          >
            {page.icon}
            <Typography>{page.name}</Typography>
          </S.ButtonMenu>
        ))}
      </Box>
    </S.Content>
  )
}

export default HeaderMenu
