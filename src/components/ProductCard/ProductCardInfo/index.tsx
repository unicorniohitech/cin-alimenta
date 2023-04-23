import React from 'react'

import { CardContent, CardActions, CardMedia, Modal, Typography } from '@mui/material'

import { Card } from '../../ProductCard/types'
import * as S from './styles'

interface CardInfo {
  open: boolean
  handleClose: () => void
  card: Card
}

export const ProductCardInfo = ({ open, handleClose, card }: CardInfo) => {
  const { productName, restaurantName, value, description } = card

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.CardContainer>
          <S.ProductCard>
            <CardMedia
              sx={{ minWidth: '300px', maxWidth: '1fr' }}
              component="img"
              alt="green iguana"
              height="200"
              image="src\assets\food.jpg"
            />
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{ textAlign: 'left' }}
                  gutterBottom
                  variant="h6"
                  lineHeight="0.8"
                  component="div"
                  color="#696969"
                  fontWeight="600"
                >
                  {productName}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    alignContent: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                  gutterBottom
                  variant="body1"
                  height="2rem"
                  alignContent="start"
                  color="#b1b1b1"
                  fontWeight="600"
                >
                  {restaurantName}
                </Typography>
                <S.DescriptionText variant="body2" color="#696969">
                  {description}
                </S.DescriptionText>
              </div>
            </CardContent>
            <CardContent sx={{ marginTop: 'auto', padding: '0px 16px' }}>
              <Typography
                sx={{ textAlign: 'right', marginTop: '0.35em', marginBottom: '0' }}
                gutterBottom
                variant="body1"
                color="#696969"
              >
                {value}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px' }}>
              <S.CardButton size="small">Adicionar ao carrinho</S.CardButton>
              <S.CardButton onClick={() => handleClose()} size="small">
                Fechar
              </S.CardButton>
            </CardActions>
          </S.ProductCard>
        </S.CardContainer>
      </Modal>
    </div>
  )
}
