import React from 'react'

import ReactDOM from 'react-dom'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.css'
import Routes from './routes'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
