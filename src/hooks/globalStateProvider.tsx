import React, { createContext, useContext, ReactNode, useCallback, useState } from 'react'

import { Card } from '@/components/ProductCard/types'

interface GlobalStateProviderProps {
  children: ReactNode
}

interface GlobalStateProviderData {
  cart: Product[]
  handleCart: (data: Product) => void
  logged: boolean
  handleLogged: (data: boolean) => void
}
type Product = {
  qtd: number
} & Card
export const GlobalStateContext = createContext<GlobalStateProviderData>(
  {} as GlobalStateProviderData,
)
export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [cart, setCart] = useState<Product[]>([] as Product[])
  //   const test: Card = {} as Card
  //   setCart([...cart, test])
  const [logged, setLogged] = useState<boolean>(true)
  const handleCart = useCallback(
    (card: Product) => {
      setCart([...cart, card])
    },
    [cart],
  )

  const handleLogged = useCallback((status: boolean) => {
    setLogged(status)
  }, [])

  return (
    <GlobalStateContext.Provider value={{ cart, handleCart, logged, handleLogged }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext)
  if (context === undefined) {
    throw new Error('Errado está!')
  }
  return context
}
