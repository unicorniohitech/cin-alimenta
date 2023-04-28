import React from 'react'

import { CardContent, CardActions, CardMedia, Typography } from '@mui/material'
import { useGlobalStateContext } from '@/hooks/globalStateProvider'

import * as S from './styles'
import { Card } from './types'
import { ProductCardInfo } from './ProductCardInfo'

type Product = {
  qtd: number
} & Card

const ProductCard = (card: Product) => {
  const { handleCart } = useGlobalStateContext()
  const { productName, restaurantName, value, description } = card
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <S.CardContainer>
      <S.ProductCard>
        <ProductCardInfo {...{ open, handleClose, card }} />
        <CardMedia
          sx={{ minWidth: '300px', maxWidth: '1fr' }}
          component="img"
          alt="green iguana"
          height="140"
          image="src\assets\food.jpg"
        />
        <CardContent>
          <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Typography
              sx={{ textAlign: 'left' }}
              gutterBottom
              variant="h6"
              component="div"
              lineHeight="0.8"
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
          <S.CardButton
            onClick={() => {
              handleCart(card)
            }}
            size="small"
          >
            Adicionar ao carrinho
          </S.CardButton>
          <S.CardButton onClick={() => handleOpen()} size="small">
            Ver mais
          </S.CardButton>
        </CardActions>
      </S.ProductCard>
    </S.CardContainer>
  )
}

export default ProductCard
