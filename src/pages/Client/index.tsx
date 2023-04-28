import React from 'react'

// import Carousel from '@/components/Carousel'
import Filters from '@/components/Filters'
import ProductList from '@/components/ProductList'

import * as S from './styles'

const Client = () => (
  <>
    {/* <Carousel /> */}
    <S.BodyContainer>
      <Filters />
      <ProductList />
    </S.BodyContainer>
  </>
)
export default Client
