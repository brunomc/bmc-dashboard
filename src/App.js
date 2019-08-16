import React from 'react'
import { useRoutes } from 'hookrouter'
import { routes } from './config/routes'

function App() {
  const routeResult = useRoutes(routes)

  return routeResult || <h1>Page not found</h1>
}

export default App
