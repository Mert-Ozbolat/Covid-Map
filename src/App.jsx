import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Layout from './components/layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/detail/:code', element: <Detail /> }
    ]
  }
])


const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App