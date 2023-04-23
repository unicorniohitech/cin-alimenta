import React from 'react'

import { Grid } from '@mui/material'
import ProductCard from '@/components/ProductCard'
import { Cards } from '@/components/ProductCard/types'

import * as S from './styles'

const props: Cards = {
  cards: [
    {
      productName: 'Product One',
      restaurantName: 'Restaurant One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor tortor, sit amet molestie erat. Phasellus suscipit mattis elit.',
      value: 'R$ 19,90',
    },
    {
      productName: 'Product Two',
      restaurantName: 'Restaurant Two',
      description:
        'Mauris id tempor tortor, sit amet molestie erat. Phasellus suscipit mattis elit.',
      value: 'R$ 9,90',
    },
    {
      productName: 'Product Three',
      restaurantName: 'Restaurant Three',
      description: 'Phasellus suscipit mattis elit.',
      value: 'R$ 24,99',
    },
    {
      productName: 'Product Four',
      restaurantName: 'Restaurant Four',
      description: 'Lorem ipsum dolor sit amet. Phasellus suscipit mattis elit.',
      value: 'R$ 17,20',
    },
    {
      productName: 'Product Five',
      restaurantName: 'Restaurant Five',
      description: 'Mauris id tempor tortor, sit amet molestie erat.',
      value: 'R$ 11,40',
    },
    {
      productName: 'Product Six',
      restaurantName: 'Restaurant Six',
      description: 'Mauris id tempor tortor. Phasellus suscipit mattis elit.',
      value: 'R$ 29,50',
    },
    {
      productName: 'Product Seven',
      restaurantName: 'Restaurant Seven',
      description:
        'Lorem ipsum dolor sit amet. Mauris id tempor tortor. Phasellus suscipit mattis elit.',
      value: 'R$ 15,99',
    },
  ],
}

const ProductList = () => (
  <S.ProductGrid sx={{ justifyContent: 'center' }} container spacing={{ xs: 1, md: 1 }}>
    {props.cards.map((card, index) => (
      <Grid item key={`${index + 1}`}>
        <ProductCard {...card} />
      </Grid>
    ))}
  </S.ProductGrid>
)

export default ProductList
