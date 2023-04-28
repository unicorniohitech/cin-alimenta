export type Products = {
  product_id: number
  product_qtd: number
  restaurant: User
}

export type OrderCardProps = {
  id: number
  user_id: number
  total_price: number
  status: string
  products: Product[]
  user: User
  created_at: string
  updated_at: string
}

export interface OrderCards {
  orders: OrderCardProps[]
}

export type User = {
  id: number
  name: string
  email: string
  document: string
  rising_date: string
  telephone: string
  address: string
  role: string
  created_at: string
  updated_at: string
}

export type Product = {
  id: number
  user_id: number
  name: string
  price: number
  description: string
  qtd: number
  category: string
  observation: string
  created_at: string
  updated_at: string
  restaurant: User
}
