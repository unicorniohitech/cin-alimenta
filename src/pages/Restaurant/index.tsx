import React from 'react'

import OrderList from '@/components/OrderList'

import * as S from './styles'

const Restaurant = () => {
  console.log('teste')
  return (
    <>
      <S.BodyContainer>
        <OrderList />
      </S.BodyContainer>
    </>
  )
}
export default Restaurant
