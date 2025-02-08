import React from 'react'
import { NavLink, useRouteError } from 'react-router'

const ErrorPage = () => {
    const error =useRouteError();

  return (
   <div className='flex bg-black h-screen text-white justify-center items-center flex-col gap-5'>
    <h1 className='text-5xl'>Oops An Error occurrd.</h1>
    {error && <p className='text-2xl'>{error.data}</p> }
    <NavLink to='/'>
   <button className='border border-white px-4 py-2 text-2xl hover:bg-white hover:text-black'>Go to Home</button>
   </NavLink>
   
   </div>
   
  )
}

export default ErrorPage