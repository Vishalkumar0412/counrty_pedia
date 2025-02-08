import { Box, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'

const Contact = () => {
    // const handlleSubmit=async (e)=>{
    //     try {
        
    //         const formData= Object.fromEntries(e.entries())
    //        await axios.post("http://localhost:3001/users",formData)
            
    //     } catch (error) {
            
    //     }
           
           
    // }
    return (
        <div className='text-white flex flex-col items-center m-3'>
            <h1 className='text-3xl font-bold'>Contact Us</h1>
            <div className="flex items-start gap-16 p-4 mx-auto max-w-4xl font-[sans-serif] m-2">

            <form action="https://formsubmit.co/vishalkumar041200@gmail.com"
            method="POST"
            >
                <input name='username' type='text' placeholder='Name' required
                    className="w-full  py-3 px-4 bg-inherit  text-white text-sm   placeholder:text-gray-600 border border-gray-600" />
                <input name='email' type='email' placeholder='Email' required
                    className="w-full  py-3 px-4 bg-inherit  text-white text-sm   placeholder:text-gray-600 border border-gray-600" />
                <input name='subject' type='text' placeholder='Subject' required
                    className="w-full  py-3 px-4 bg-inherit  text-white text-sm   placeholder:text-gray-600 border border-gray-600" />
                <textarea name='message' placeholder='Message' rows="6" required
                     className="w-full  py-3 px-4 bg-inherit text-white text-sm   placeholder:text-gray-600 border border-gray-600"></textarea>
                <input type='submit'
                    className="text-black bg-white hover:bg-black hover:border hover:border-white hover:text-white box-border tracking-wide  text-sm px-4 py-3 w-full !mt-6" />
            </form>
        </div>
        </div>
    )
}

export default Contact