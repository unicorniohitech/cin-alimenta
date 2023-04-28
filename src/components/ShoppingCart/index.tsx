import React from 'react'

import {
  Box,
  // Avatar,
  Divider,
  List,
  ListItem,
  // ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material'

import { Card } from '../ProductCard/types'

type ShoppingCartProps = {
  cart: Card[]
  openCart: boolean
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
}

const ShoppingCart = ({ cart, openCart, anchorEl, handleClose }: ShoppingCartProps) => {
  console.log(cart)

  return (
    <Popover
      //   id={id}
      open={openCart}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cart.length !== 0 ? (
          cart.map((product) => (
            <>
              <ListItem alignItems="center">
                {/* <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar> */}
                <ListItemText
                  sx={{ width: '70%' }}
                  primary={product.productName}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {product.restaurantName}
                      </Typography>
                      ` - {product.description}`
                    </>
                  }
                />
                <Box
                  sx={{
                    width: '10%',
                    height: '100%',
                    textAlign: 'end',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'space-between',
                  }}
                >
                  <ListItemText
                    sx={{
                      textAlign: 'end',
                      display: 'flex',
                      flexDirection: 'column',
                      alignContent: 'space-between',
                    }}
                    primary="Qtd."
                    secondary={
                      <>
                        <Typography
                          sx={{
                            height: '100%',
                            display: 'inline',
                          }}
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          2
                        </Typography>
                      </>
                    }
                  />
                </Box>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))
        ) : (
          <ListItem
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'space-between',
            }}
          >
            <Typography
              sx={{ display: 'inline', width: '400px', textAlign: 'center' }}
              component="span"
              variant="body1"
              color="text.primary"
            >
              Seu Carrinho está vazio!
            </Typography>
          </ListItem>
        )}
        <Divider variant="inset" component="li" />
      </List>
    </Popover>
  )
}

export default ShoppingCart
