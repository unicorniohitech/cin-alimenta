import React from 'react'

import Item from 'antd/es/descriptions/Item'

import { Grid, Tooltip, Typography } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';
// import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
// import MenuIcon from '@mui/icons-material/Adb';

import HeaderMenu from '@/components/HeaderMenu'
import Carousel from '@/components/Carousel'
import Filters from '@/components/Filters'
import ProductCard from '@/components/ProductCard'

import * as S from './styles'

const Home = () => (
  // const { Header, Content, Footer } = Layout;
  <S.Header color="inherit">
    <S.ContainerToolbar>
      <S.ContentHeader>
        <S.ContentLogo>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FF7878',
              textDecoration: 'none',
            }}
          >
            Cin Alimenta
          </Typography>
        </S.ContentLogo>
        <S.ContentAccount>
          <Tooltip title="Ver Carrinho">
            <S.ButtonBar sx={{ p: 0 }}>
              <S.ShoppingCart />
            </S.ButtonBar>
          </Tooltip>
          <S.VerticalLine />
          <Tooltip title="Perfil">
            <S.ButtonBar sx={{ p: 0 }}>
              <S.AccountUser />
            </S.ButtonBar>
          </Tooltip>
        </S.ContentAccount>
      </S.ContentHeader>
    </S.ContainerToolbar>
    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box> */}
    <HeaderMenu />
    <Carousel />
    <Filters />
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(8)).map((_, index) => (
        <Grid item xs="auto" sm={3} md={3} key={`${index + 1}`}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  </S.Header>
)
export default Home
