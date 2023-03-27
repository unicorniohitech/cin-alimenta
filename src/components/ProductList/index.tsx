import React from 'react'

import ProductCard, { Card } from '@/components/ProductCard'

import * as S from './styles'

const ProductList = () => {
  const props: Card = {
    productName: 'Product Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tempor tortor, sit amet molestie erat. Phasellus suscipit mattis elit.',
    value: 'R$ 19,00',
  }

  return (
    <S.ProductGrid sx={{ justifyContent: 'center' }} container spacing={{ xs: 1, md: 1 }}>
      {Array.from(Array(8)).map((_, index) => (
        <div key={`${index + 1}`}>
          <ProductCard {...props} />
        </div>
      ))}
    </S.ProductGrid>
  )
}

export default ProductList
