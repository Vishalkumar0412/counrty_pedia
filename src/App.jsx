import React, { useState } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import { RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layout.jsx/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import Loading from './components/UI/Loading'
import CountryDetails from './components/Layout.jsx/CountryDetails'
 

const Router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path:'country',
        element: <Country/>
      },
      {
        path:'country/:id',
        element: <CountryDetails/>
      },
     
    ]
    
  },
 

  
])

const App = () => {
  const [loading,setLoading]=useState(false);
  if(loading){
    return <Loading/>
  }
  return (
    <>
    <RouterProvider router={Router}>
     </RouterProvider>
    </>
  )
}

export default App