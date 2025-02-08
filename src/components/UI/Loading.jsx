import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='h-screen w-screen flex flex-col bg-black justify-center items-center text-white p-20 text-center gap-5'>
        <div className='animate-spin'>
        <AiOutlineLoading3Quarters   style={{height:'150px',width:'250px'}}/>
        </div>
        <br />
        <h1 className='text-3xl text-wrap font-bold'>Please Wait.....</h1>
    </div>
  )
}

export default Loading