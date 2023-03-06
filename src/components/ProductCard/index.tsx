import React from 'react'

import {
  Button,
  // Card,
  CardActions,
  CardContent,
  CardMedia,
  // Select,
  // SelectChangeEvent,
  Typography,
} from '@mui/material'

import * as S from './styles'

const ProductCard = () => {
  const ordenation: Array<string> = ['1', 'Maior Preço']
  console.log(ordenation)

  // const [order, setOrder] = React.useState('')

  // const handleChange = (event: SelectChangeEvent) => {
  //   setOrder(event.target.value)
  // }

  return (
    <S.CardContainer>
      <S.ProductCard sx={{ maxWidth: 245 }}>
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
          <Button size="small">Ver mais</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </S.ProductCard>
    </S.CardContainer>
  )
}

export default ProductCard
