import React, { ReactNode } from 'react'

import { Tooltip, Typography } from '@mui/material'
import HeaderMenu from '@/components/HeaderMenu'
import { useGlobalStateContext } from '@/hooks/globalStateProvider'
import ShoppingCart from '@/components/ShoppingCart'

import * as S from './styles'

export type HomeLayoutProps = {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { cart } = useGlobalStateContext()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const openCart = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <S.Content>
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
                <S.ButtonBar
                  onClick={(event) => {
                    handleClick(event)
                  }}
                  sx={{ p: 0 }}
                >
                  <S.StyledBadge
                    badgeContent={cart.length}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <S.ShoppingCart />
                  </S.StyledBadge>
                </S.ButtonBar>
              </Tooltip>
              <ShoppingCart {...{ cart, openCart, anchorEl, handleClose }} />
              <S.VerticalLine />
              <Tooltip title="Perfil">
                <S.ButtonBar sx={{ p: 0 }}>
                  <S.AccountUser />
                </S.ButtonBar>
              </Tooltip>
            </S.ContentAccount>
          </S.ContentHeader>
        </S.ContainerToolbar>
        <HeaderMenu />
      </S.Header>
      {children}
    </S.Content>
  )
}
export default HomeLayout
