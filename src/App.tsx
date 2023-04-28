import React from 'react'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import HomeLayout from './pages/Home'
import { GlobalStateProvider, useGlobalStateContext } from './hooks/globalStateProvider'
import SignIn from './pages/SignIn'
// import { ROUTES } from './routes/routes.ENUM'

const queryClient = new QueryClient()

const App = () => {
  console.log('-----')
  const { logged } = useGlobalStateContext()

  return (
    <>
      {logged ? (
        <HomeLayout>
          <Routes />
        </HomeLayout>
      ) : (
        <React.Suspense fallback={<div />}>
          <SignIn />
        </React.Suspense>
      )}
    </>
  )
}
const AppWithProviders = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </QueryClientProvider>
  </BrowserRouter>
)

export default AppWithProviders
