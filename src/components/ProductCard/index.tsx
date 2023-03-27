import React from 'react'

import {
  CardActions,
  CardContent,
  CardMedia,
  // Select,
  // SelectChangeEvent,
  Typography,
} from '@mui/material'

import * as S from './styles'

export interface Card {
  productName: string
  description: string
  value: string
}

const ProductCard = (props: Card) => {
  const ordenation: Array<string> = ['1', 'Maior Preço']
  console.log(ordenation, props)

  // const [order, setOrder] = React.useState('')

  // const handleChange = (event: SelectChangeEvent) => {
  //   setOrder(event.target.value)
  // }

  return (
    <S.CardContainer>
      <S.ProductCard>
        <CardMedia component="img" alt="green iguana" height="140" image="src\assets\food.jpg" />
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              sx={{ textAlign: 'left' }}
              gutterBottom
              variant="h6"
              component="div"
              color="#696969"
              fontWeight="600"
            >
              Product Name
            </Typography>
          </div>
          <Typography sx={{ textAlign: 'justify' }} variant="body2" color="#696969">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor tortor, sit
            amet molestie erat. Phasellus suscipit mattis elit.
          </Typography>
          <Typography
            sx={{ textAlign: 'right', marginTop: '0.35em', marginBottom: '0' }}
            gutterBottom
            variant="body1"
            color="#696969"
          >
            R$ 19,00
          </Typography>
        </CardContent>
        <CardActions>
          <S.CardButton size="small">Adicionar ao carrinho</S.CardButton>
          <S.CardButton size="small">Mais info.</S.CardButton>
        </CardActions>
      </S.ProductCard>
    </S.CardContainer>
  )
}

export default ProductCard
